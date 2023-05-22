import {
  getRandomNum,
  startGame,
  } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 100;

const isEvenNum = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNum = getRandomNum(0, 100);
  const question = randomNum;
  const correctAnswer = isEvenNum(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
