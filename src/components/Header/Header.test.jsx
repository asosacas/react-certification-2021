import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header.component';

describe('header nav bar', () => {
  it('has all icons present', () => {
    render(<Header />);
    expect(document.querySelectorAll('svg').length).toBe(3);
  });

  it('has text box rendered', () => {
    render(<Header />);
    expect(document.querySelectorAll('input').length).toBe(1);
  });
});
