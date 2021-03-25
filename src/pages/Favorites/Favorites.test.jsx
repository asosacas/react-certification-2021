import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';

import Favorites from './Favorites.page';

describe('favorites', () => {
  it('to have the header', async () => {
    await act(async () => {
      render(<Favorites />, { wrapper: ProviderWrapper });
    });
    expect(screen.queryByText('Favorites')).toBeTruthy();
  });
});
