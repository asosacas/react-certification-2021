import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';

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

describe('video detail', () => {
  it('iframe is rendered', () => {
    render(<VideoDetail selectedVideo={videoItem} />);
    expect(document.querySelectorAll('iframe').length).toBe(1);
  });

  it('iframe has the right video id for the src', () => {
    render(<VideoDetail selectedVideo={videoItem} />);
    expect(document.querySelectorAll('iframe')[0].src).toContain('testVideoId');
  });

  it('title is rendered', () => {
    render(<VideoDetail selectedVideo={videoItem} />);
    expect(screen.queryByText('Title').tagName).toBe('DIV');
  });

  it('clicks inside container handle setter correctly', () => {
    const mockedSet = jest.fn();
    render(<VideoDetail selectedVideo={videoItem} setSelectedVideo={mockedSet} />);
    expect(mockedSet.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(/Title/i));
    expect(screen.queryByText('Title').tagName).toBe('DIV');
    expect(mockedSet.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(/X/i));
    expect(mockedSet.mock.calls.length).toBe(1);
  });
});
