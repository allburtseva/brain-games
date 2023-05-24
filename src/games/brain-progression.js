import startGame from '../index.js';
import getRandomNum from '../random.js';

const task = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const result = [];
  result[0] = firstNumber;
  for (let i = 1; i <= length; i += 1) {
    result[i] = result[i - 1] + step;
  }
  return result;
};

const getGameData = () => {
  const length = getRandomNum(5, 15);
  const firstNumber = getRandomNum(1, 100);
  const step = getRandomNum(2, 15);
  const progression = getProgression(firstNumber, step, length);
  const position = getRandomNum(0, progression.length);
  const correctAnswer = String(progression[position]);
  progression[position] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
