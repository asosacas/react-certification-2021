import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import api from 'api';
import { ProviderWrapper } from 'test';
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
    } = renderHook(() => useVideoDetails(null, 'api'), {
      wrapper: ProviderWrapper,
    });
    expect(current).toStrictEqual({});
  });

  it('has data fetched once a valid video is provided in api mode', async () => {
    const { result, rerender } = renderHook((video) => useVideoDetails(video, 'api'), {
      wrapper: ProviderWrapper,
    });
    await act(async () => {
      rerender(selectedVideo);
    });
    const { title, description, publishTime, relatedVideos } = result.current;
    expect(title).toBe('Title');
    expect(description).toBe('Description');
    expect(publishTime).toBe('2020');
    expect(relatedVideos.items.length).toBe(2);
  });

  it('has data fetched once a valid video is provided in favorites mode', async () => {
    const { result, rerender } = renderHook(
      (video) => useVideoDetails(video, 'favorites'),
      {
        wrapper: ProviderWrapper,
      }
    );
    await act(async () => {
      rerender(selectedVideo);
    });
    const { title, description, publishTime, relatedVideos } = result.current;
    expect(title).toBe('Title');
    expect(description).toBe('Description');
    expect(publishTime).toBe('2020');
    expect(relatedVideos.items.length).toBe(0);
  });
});
