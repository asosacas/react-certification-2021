import React from 'react';
import { act, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import api from 'api';
import useVideoDetails from './videoDetails.hook';

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

const selectedVideo = {
  id: { videoId: 'testVideoId' },
  snippet: { title: 'Title', description: 'Description', publishTime: '2020' },
};

api.getRelatedVideos.mockResolvedValue({ items: videoData });
describe('video details hook', () => {
  it('has empty result with no video provided', () => {
    const {
      result: { current },
    } = renderHook(() => useVideoDetails());
    expect(current).toStrictEqual({});
  });

  it('has data fetched once a valid video is provided', async () => {
    const { result, rerender } = renderHook((video) => useVideoDetails(video));
    await act(async () => {
      rerender(selectedVideo);
    });
    const { title, description, publishTime, relatedVideos } = result.current;
    expect(title).toBe('Title');
    expect(description).toBe('Description');
    expect(publishTime).toBe('2020');
    expect(relatedVideos.items.length).toBe(2);
  });
});
