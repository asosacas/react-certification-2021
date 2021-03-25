import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { GlobalStateProvider } from 'providers/GlobalStateProvider';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { ProviderWrapper } from 'test';
import Header from './Header.component';

describe('header nav bar', () => {
  it('has all icons present', () => {
    render(<Header />, {
      wrapper: ProviderWrapper,
    });
    expect(document.querySelectorAll('svg').length).toBe(2);
  });

  it('has text box rendered', () => {
    render(<Header />, {
      wrapper: ProviderWrapper,
    });
    expect(document.querySelectorAll('input').length).toBe(1);
  });

  it('updates search with dispatch', () => {
    const mockedDispatch = jest.fn();
    render(
      <Auth0Provider>
        <HashRouter>
          <GlobalStateProvider
            value={{ dispatch: mockedDispatch, state: { theme: 'light', search: '' } }}
          >
            <Header />
          </GlobalStateProvider>
        </HashRouter>
      </Auth0Provider>
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
        <Auth0Provider>
          <HashRouter>
            <GlobalStateProvider
              value={{ dispatch: mockedDispatch, state: { theme: 'light', search: '' } }}
            >
              <Header />
            </GlobalStateProvider>
          </HashRouter>
        </Auth0Provider>
      );
    });
    expect(mockedDispatch.mock.calls.length).toBe(0);
    const themeIcon = document.querySelectorAll('svg')[1];
    fireEvent.click(themeIcon);
    expect(mockedDispatch.mock.calls.length).toBe(1);
  });
});
