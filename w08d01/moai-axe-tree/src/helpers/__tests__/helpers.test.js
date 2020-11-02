import { announceResult, genFeedbackMessage, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('genFeedbackMessage function', () => {

  test('returns "Good job!" if the status is "Won"', () => {
    const result = genFeedbackMessage('Won');
    expect(result).toBe('Good job!');
  });

  test('returns "Tie game!" if the status is "Tied"', () => {
    const result = genFeedbackMessage('Tied');
    expect(result).toBe('Tie game!');
  });

});

describe('chooseRobotItem function', () => {

  test('returns an appropriate choice if cheating is false', () => {
    const cheating = false;
    const playerSelection = 'Tree';
    const actual = chooseRobotItem(cheating, playerSelection);
    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

  test('returns the winning choice if cheating is true', () => {
    const cheating = true;
    const playerSelection = 'Axe'
    const actual = chooseRobotItem(cheating, playerSelection);
    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

});
