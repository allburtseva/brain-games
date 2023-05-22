import {
  getRandomNum,
  startGame,
  } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 50;

const getGreatestCommonDivisor = (num1, num2) => {
  if (num2 > num1) return getGreatestCommonDivisor(num2, num1);
  if (!num2) return num1;
  return getGreatestCommonDivisor(num2, num1 % num2);
};

const getGameData = () => {
  const firstNum = getRandomNum(min, max);
  const secondNum = getRandomNum(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
