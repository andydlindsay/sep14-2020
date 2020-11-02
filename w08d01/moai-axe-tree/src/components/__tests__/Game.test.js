import React from 'react';
import { getByTestId, render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('Game component tests', () => {

  test('should toggle cheating state when robot head is clicked', () => {
    const { container, getByTestId, debug } = render(<Game />);

    // console.log(prettyDOM(container));
    // debug();

    // const robotIcon = getByTestId(container, 'robot-icon');
    const robotIcon = getByTestId('robot-icon');

    // fake click event on robotIcon
    fireEvent.click(robotIcon);

    // check if the class 'cheating' has been applied
    expect(robotIcon).toHaveClass('cheating');

    fireEvent.click(robotIcon);

    expect(robotIcon).not.toHaveClass('cheating');
  });

});
