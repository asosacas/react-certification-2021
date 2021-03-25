import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import api from 'api';
import { ProviderWrapper } from 'test';
import VideoDetail from './VideoDetail.component';

jest.mock('api');

const videoItem = {
  id: {
    videoId: 'testVideoId',
  },
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

// Ignoring detail's carrousel in this test. This has it's own test in the carrousel folder.
api.getRelatedVideos.mockResolvedValue({ items: [] });

describe('video detail', () => {
  it('iframe is rendered', async () => {
    await act(async () => {
      render(<VideoDetail selectedVideo={videoItem} />, {
        wrapper: ProviderWrapper,
      });
    });

    expect(document.querySelectorAll('iframe').length).toBe(1);
  });

  it('iframe has the right video id for the src', async () => {
    await act(async () => {
      render(<VideoDetail selectedVideo={videoItem} />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(document.querySelectorAll('iframe')[0].src).toContain('testVideoId');
  });

  it('title is rendered', async () => {
    await act(async () => {
      render(<VideoDetail selectedVideo={videoItem} />, { wrapper: ProviderWrapper });
    });
    expect(screen.queryByText('Title').tagName).toBe('SPAN');
  });

  it('clicks inside container handle setter correctly', async () => {
    const mockedSet = jest.fn();
    await act(async () => {
      render(<VideoDetail selectedVideo={videoItem} onClose={mockedSet} />, {
        wrapper: ProviderWrapper,
      });
    });
    expect(mockedSet.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(/Title/i));
    expect(screen.queryByText('Title').tagName).toBe('SPAN');
    expect(mockedSet.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(/X/i));
    expect(mockedSet.mock.calls.length).toBe(1);
  });
});
