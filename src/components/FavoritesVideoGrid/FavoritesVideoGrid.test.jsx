import React from 'react';
import { act, render, screen } from '@testing-library/react';
import api from 'api';
import { ProviderWithStateWrapper } from 'test';
import FavoritesVideoGrid from './FavoritesVideoGrid.component';

jest.mock('api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    videoId: 'video1',
  }),
}));
const videoData = [
  {
    etag: '1',
    id: { videoId: 'video1' },
    snippet: {
      title: 'Title 1',
      description: 'This is the description 1',
      thumbnails: {
        medium: {
          url: 'http://theurl.com',
        },
      },
    },
  },
  {
    etag: '2',
    id: { videoId: 'video2' },
    snippet: {
      title: 'Title 2',
      description: 'This is the description 2',
      thumbnails: {
        medium: {
          url: 'http://theurl2.com',
        },
      },
    },
  },
];

api.searchVideos.mockResolvedValue({ items: videoData });
describe('favorites video grid', () => {
  it('has the right video loaded', async () => {
    await act(async () => {
      render(<FavoritesVideoGrid videoHandler={jest.fn} />, {
        wrapper: ProviderWithStateWrapper({
          value: { isFavorite: jest.fn, state: { favorites: videoData } },
        }),
      });
    });
    // the grid representation, and the loaded detail
    expect(screen.queryAllByText('This is the description 1').length).toBe(2);
  });
});
