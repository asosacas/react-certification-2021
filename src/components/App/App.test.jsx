import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';
import api from 'api';
import App from './App.component';

jest.mock('api');
api.searchVideos.mockResolvedValue({ items: [] });
describe('app', () => {
  it('to have the navbar available', async () => {
    await act(async () => {
      render(<App />, { wrapper: ProviderWrapper });
    });
    expect(screen.queryByRole('navigation')).toBeTruthy();
  });
});
