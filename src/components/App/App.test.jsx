import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { GlobalStateProvider } from 'providers/GlobalStateProvider';

import App from './App.component';

describe('app', () => {
  it('to have the navbar available', async () => {
    await act(async () => {
      render(
        <GlobalStateProvider>
          <App />
        </GlobalStateProvider>
      );
    });
    expect(screen.queryByRole('navigation')).toBeTruthy();
  });
});
