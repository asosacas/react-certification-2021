import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ProviderWrapper } from 'test';
import VideoCard from './VideoCard.component';

const videoItem = {
  id: { videoId: 'videoId' },
  snippet: {
    title: 'Title',
    description: 'This is the description',
    thumbnails: {
      medium: {
        url: 'http://theurl.com',
      },
    },
  },
};

describe('video card', () => {
  it('img is rendered are present', async () => {
    await act(async () =>
      render(<VideoCard video={videoItem} />, {
        wrapper: ProviderWrapper,
      })
    );
    expect(document.querySelectorAll('img').length).toBe(1);
  });

  it('img has alt text', async () => {
    await act(async () =>
      render(<VideoCard video={videoItem} />, {
        wrapper: ProviderWrapper,
      })
    );
    expect(screen.queryByAltText('Title').tagName).toBe('IMG');
  });

  it('title is rendered', async () => {
    await act(async () =>
      render(<VideoCard video={videoItem} />, {
        wrapper: ProviderWrapper,
      })
    );
    expect(screen.queryByText('Title').tagName).toBe('SPAN');
  });
});
