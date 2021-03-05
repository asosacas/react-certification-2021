import React from 'react';
import { act, render } from '@testing-library/react';
import api from 'api';
import VideoGrid from './VideoGrid.component';

jest.mock('api');

const videoData = [
  {
    etag: '1',
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
      render(<VideoGrid />);
    });
    expect(document.querySelectorAll('img').length).toBe(2);
  });
});
