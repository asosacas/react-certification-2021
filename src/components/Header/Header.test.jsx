import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
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

  it('bubbles search with prop drilling (to be changed in next challenge :eyes:)', () => {
    const mockedSet = jest.fn();
    render(<Header setSearch={mockedSet} />);
    expect(mockedSet.mock.calls.length).toBe(0);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    fireEvent.submit(input);
    expect(mockedSet.mock.calls.length).toBe(1);
  });
});
