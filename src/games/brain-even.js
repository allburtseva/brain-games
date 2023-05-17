import readlineSync from 'readline-sync';
import {
  compareAnswers,
  getRandomNumber,
  startGame,
} from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(3, startRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default runGame;
