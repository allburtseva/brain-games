import {
  getRandomNum,
  startGame,
  } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 2;
const max = 100;

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNum(min, max);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
