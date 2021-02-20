import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

describe('main layout', () => {
  it('has a header', () => {
    render(<Layout />);
    expect(document.querySelectorAll('nav').length).toBe(1);
  });

  it('has a main element', () => {
    render(<Layout />);
    expect(document.querySelectorAll('main').length).toBe(1);
  });
});
