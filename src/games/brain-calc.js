import readlineSync from 'readline-sync';
import {
  compareAnswers,
  getRandomNumber,
  startGame,
} from '../index.js';

const operators = ['+', '-', '*'];
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getResultOfExpression = (first, second, operator) => {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return 'Something is wrong!';
  }
};

const startRound = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const randomOperator = getRandomItem(operators);
  console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  // eslint-disable-next-line max-len
  const correctAnswer = getResultOfExpression(firstRandomNumber, secondRandomNumber, randomOperator);
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(3, startRound, 'What is the result of the expression?');
};

export default runGame;
