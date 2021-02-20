import React from 'react';
import { render } from '@testing-library/react';
import VideoGrid from './VideoGrid.component';

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

describe('video card', () => {
  it('has the right amount of img elements', () => {
    render(<VideoGrid data={{ items: videoData }} />);
    expect(document.querySelectorAll('img').length).toBe(2);
  });
});
