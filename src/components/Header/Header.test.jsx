import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { GlobalStateProvider } from 'providers/GlobalStateProvider';
import { act } from 'react-dom/test-utils';
import Header from './Header.component';

describe('header nav bar', () => {
  it('has all icons present', () => {
    render(
      <GlobalStateProvider>
        <Header />
      </GlobalStateProvider>
    );
    expect(document.querySelectorAll('svg').length).toBe(3);
  });

  it('has text box rendered', () => {
    render(
      <GlobalStateProvider>
        <Header />
      </GlobalStateProvider>
    );
    expect(document.querySelectorAll('input').length).toBe(1);
  });

  it('updates search with dispatch', () => {
    const mockedDispatch = jest.fn();
    render(
      <GlobalStateProvider
        value={{ dispatch: mockedDispatch, state: { theme: 'light', search: '' } }}
      >
        <Header />
      </GlobalStateProvider>
    );
    expect(mockedDispatch.mock.calls.length).toBe(0);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);
    expect(mockedDispatch.mock.calls.length).toBe(1);
  });

  it('updates theme with dispatch', async () => {
    const mockedDispatch = jest.fn();
    await act(async () => {
      render(
        <GlobalStateProvider
          value={{ dispatch: mockedDispatch, state: { theme: 'light', search: '' } }}
        >
          <Header />
        </GlobalStateProvider>
      );
    });
    expect(mockedDispatch.mock.calls.length).toBe(0);
    const themeIcon = document.querySelectorAll('svg')[1];
    fireEvent.click(themeIcon);
    expect(mockedDispatch.mock.calls.length).toBe(1);
  });
});
