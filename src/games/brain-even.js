import startGame from '../index.js';
import getRandomNum from '../random.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 100;

const isEvenNum = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(min, max);
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
