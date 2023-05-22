import {
  getRandomNum,
  startGame,
} from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const length = 10;
  const firstNumber = getRandomNum(1, 100);
  const step = getRandomNum(2, 15);
  const result = [];
  result[0] = firstNumber;
  for (let i = 1; i <= length; i += 1) {
    result[i] = result[i - 1] + step;
  }
  return result;
};

const getGameData = () => {
  const progression = getProgression();
  const position = getRandomNum(0, 10);
  const correctAnswer = String(progression[position]);
  const newProgression = progression;
  newProgression[position] = '..';
  const question = `${newProgression.join(' ')}`;
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
