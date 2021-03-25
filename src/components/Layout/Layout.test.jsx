import React from 'react';
import { render, act } from '@testing-library/react';
import { GlobalStateProvider } from 'providers/GlobalStateProvider';
import Layout from './Layout.component';

describe('main layout', () => {
  it('has a header', async () => {
    await act(async () => {
      render(
        <GlobalStateProvider>
          <Layout />
        </GlobalStateProvider>
      );
    });
    expect(document.querySelectorAll('nav').length).toBe(1);
  });

  it('has a main element', async () => {
    await act(async () => {
      render(
        <GlobalStateProvider>
          <Layout />
        </GlobalStateProvider>
      );
    });
    expect(document.querySelectorAll('main').length).toBe(1);
  });
});
