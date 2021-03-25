import React from 'react';
import { render, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';
import api from 'api';
import Layout from './Layout.component';

jest.mock('api');
api.searchVideos.mockResolvedValue({ items: [] });

describe('main layout', () => {
  it('has a header', async () => {
    await act(async () => {
      render(<Layout />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(document.querySelectorAll('nav').length).toBe(1);
  });

  it('has a main element', async () => {
    await act(async () => {
      render(<Layout />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(document.querySelectorAll('main').length).toBe(1);
  });
});
