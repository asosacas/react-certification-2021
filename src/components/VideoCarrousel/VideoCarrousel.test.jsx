import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoCarrousel from './VideoCarrousel.component';

const videoData = [
  {
    etag: '1',
    id: { videoId: 'testVideoId1' },
    snippet: {
      title: 'Title 1',
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
    id: { videoId: 'testVideoId2' },
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

describe('video carrousel', () => {
  it('correct number of video cards', () => {
    render(<VideoCarrousel videoList={videoData} />);
    expect(document.querySelectorAll('img').length).toBe(2);
  });

  it('title as alt text present', () => {
    render(<VideoCarrousel videoList={videoData} />);
    expect(screen.queryByAltText('Title 1').tagName).toBe('IMG');
  });

  it('title is rendered', () => {
    render(<VideoCarrousel videoList={videoData} />);
    expect(screen.queryByText('Title 1').tagName).toBe('DIV');
  });

  it('clicks inside card handle setter correctly', () => {
    const mockedSet = jest.fn();
    render(<VideoCarrousel videoList={videoData} setSelectedVideo={mockedSet} />);
    expect(mockedSet.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(/Title 1/i));
    expect(mockedSet.mock.calls.length).toBe(1);
  });
});
