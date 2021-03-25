import React from 'react';
import { act, render } from '@testing-library/react';
import api from 'api';
import { ProviderWrapper } from 'test';
import VideoGrid from './VideoGrid.component';

jest.mock('api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    videoId: 'video-id',
  }),
}));
const videoData = [
  {
    etag: '1',
    id: { videoId: 'video1' },
    snippet: {
      title: 'Title',
      description: 'This is the description',
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
describe('video grid', () => {
  it('has the right amount of img elements', async () => {
    await act(async () => {
      render(<VideoGrid videoHandler={jest.fn} items={videoData} />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(document.querySelectorAll('img').length).toBe(2);
  });

  it('has an invalid video', async () => {
    await act(async () => {
      render(<VideoGrid videoHandler={() => false} items={null} />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(document.querySelectorAll('img').length).toBe(0);
  });
});
