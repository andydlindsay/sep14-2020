import React from 'react';
import { render } from '@testing-library/react';
import HighScores from '../HighScores';
import axios from 'axios';

jest.mock('axios');

const data = [
  {
    "id": 1,
    "name": "Alice",
    "points": 15
  },
  {
    "id": 2,
    "name": "Bob",
    "points": 10
  },
  {
    "id": 3,
    "name": "Carol",
    "points": 5
  }
];

describe('HighScores component tests', () => {

  test('mocking functions', () => {
    const mockFn = jest.fn();
    let result = mockFn('foo');

    expect(result).toBeUndefined();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('foo');

    const mockFnTwo = jest.fn(() => {
      return 'bar';
    });
    result = mockFnTwo();

    expect(result).toBe('bar');
  });

  test('mocking axios', () => {
    axios.get.mockResolvedValueOnce({ data });

    const { findByText } = render(<HighScores />);

    // return the promise for Jest
    // return findByText('Carol', { exact: false });

    // wait for promise to resolve
    return expect(findByText('Carol', { exact: false })).resolves.toBeTruthy();
  });

});
