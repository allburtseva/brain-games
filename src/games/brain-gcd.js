import readlineSync from 'readline-sync';
import {
  compareAnswers,
  getRandomNum,
  startGame,
} from '../index.js';

const getGreatestCommonDivisor = (x, y) => {
  if (y > x) return getGreatestCommonDivisor(y, x);
  if (!y) return x;
  return getGreatestCommonDivisor(y, x % y);
};

const startRound = () => {
  const firstRandomNum = getRandomNum(1, 50);
  const secondRandomNum = getRandomNum(1, 50);
  console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = getGreatestCommonDivisor(firstRandomNum, secondRandomNum);
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(startRound, 'Find the greatest common divisor of given numbers.');
};

export default runGame;
