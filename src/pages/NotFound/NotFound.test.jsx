import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';
import NotFound from './NotFound.page';

describe('not found', () => {
  it('to have the header', async () => {
    await act(async () => {
      render(<NotFound />, { wrapper: ProviderWrapper });
    });
    expect(screen.queryByText('Not found')).toBeTruthy();
  });
});
