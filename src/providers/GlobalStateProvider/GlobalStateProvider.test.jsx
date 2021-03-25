import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import { GlobalStateProvider, useGlobalState } from './GlobalStateProvider.provider';

const FakeConsumer = () => {
  const {
    state: { searchValue, theme, favorites },
    dispatch,
  } = useGlobalState();
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: 'setSearch', value: 'seek' })}
      >
        setSearch
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'updateTheme', value: 'shiny' })}
      >
        updateTheme
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: 'addToFavorites', value: { id: { videoId: 'test' } } })
        }
      >
        addToFavorites
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'removeFromFavorites', value: 'test' })}
      >
        removeFromFavorites
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'unknownAction', value: 'the unknown' })}
      >
        unknownAction
      </button>
      <span>searchValue:{searchValue}</span>
      <span>theme:{theme}</span>
      <span>favorites:{favorites.length}</span>
    </>
  );
};

describe('global state provider', () => {
  it('fails with a component that consumes the context', () => {
    expect(() => {
      render(<FakeConsumer />);
    }).toThrowError('useGlobalState is used outside of the GlobalStateProvider');
  });

  it('sends data to hook', () => {
    render(
      <GlobalStateProvider
        value={{ state: { searchValue: 'provider', theme: 'dark', favorites: [{}, {}] } }}
      >
        <FakeConsumer />
      </GlobalStateProvider>
    );

    expect(screen.getByText('searchValue:provider')).toBeTruthy();
    expect(screen.getByText('theme:dark')).toBeTruthy();
    expect(screen.getByText('favorites:2')).toBeTruthy();
  });

  it('dispatches events', async () => {
    render(
      <GlobalStateProvider>
        <FakeConsumer />
      </GlobalStateProvider>
    );
    expect(screen.getByText('searchValue:')).toBeTruthy();
    expect(screen.getByText('theme:light')).toBeTruthy();
    expect(screen.getByText('favorites:0')).toBeTruthy();
    await act(async () => {
      fireEvent.click(screen.getByText(/setSearch/i));
      fireEvent.click(screen.getByText(/updateTheme/i));
      fireEvent.click(screen.getByText(/addToFavorites/i));
    });
    expect(screen.getByText('searchValue:seek')).toBeTruthy();
    expect(screen.getByText('theme:shiny')).toBeTruthy();
    expect(screen.getByText('favorites:1')).toBeTruthy();
    await act(async () => {
      fireEvent.click(screen.getByText(/removeFromFavorites/i));
    });
    expect(screen.getByText('favorites:0')).toBeTruthy();
  });

  it('fails to dispatch unknown action', async () => {
    render(
      <GlobalStateProvider>
        <FakeConsumer />
      </GlobalStateProvider>
    );

    expect(() => {
      fireEvent.click(screen.getByText(/unknownAction/i));
    }).toThrowError('Unhandled action type: unknownAction');
  });
});
