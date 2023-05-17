import readlineSync from 'readline-sync';
import {
  compareAnswers,
  getRandomNumber,
  startGame,
} from '../index.js';

const getGreatestCommonDividor = (x, y) => {
  if (y > x) return getGreatestCommonDividor(y, x);
  if (!y) return x;
  return getGreatestCommonDividor(y, x % y);
};

const startRound = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = getGreatestCommonDividor(firstRandomNumber, secondRandomNumber);
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(3, startRound, 'Find the greatest common divisor of given numbers.');
};

export default runGame;
