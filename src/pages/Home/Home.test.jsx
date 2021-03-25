import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';
import api from 'api';
import Home from './Home.page';

jest.mock('api');
api.searchVideos.mockResolvedValue({ items: [] });
describe('home', () => {
  it('to have the header', async () => {
    await act(async () => {
      render(<Home />, { wrapper: ProviderWrapper });
    });
    expect(screen.queryByText('Home')).toBeTruthy();
  });
});
