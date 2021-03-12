import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App.component';

describe('app', () => {
  it('to have the navbar available', () => {
    render(<App />);
    expect(screen.queryByRole('navigation')).toBeTruthy();
  });
});
