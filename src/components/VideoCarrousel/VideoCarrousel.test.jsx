import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCarrousel from './VideoCarrousel.component';

const videoItem = {
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
  it('img is rendered are present', () => {
    render(<VideoCarrousel {...videoItem} />);
    expect(document.querySelectorAll('img').length).toBe(1);
  });

  it('img has alt text', () => {
    render(<VideoCarrousel {...videoItem} />);
    expect(screen.queryByAltText('Title').tagName).toBe('IMG');
  });

  it('title is rendered', () => {
    render(<VideoCarrousel {...videoItem} />);
    expect(screen.queryByText('Title').tagName).toBe('H3');
  });
});
