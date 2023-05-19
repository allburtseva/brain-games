import readlineSync from 'readline-sync';
import {
  compareAnswers,
  getRandomNum,
  startGame,
} from '../index.js';

const operators = ['+', '-', '*'];
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const calculate = (first, second, operator) => {
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
  const firstRandomNum = getRandomNum(1, 30);
  const secondRandomNum = getRandomNum(1, 30);
  const operator = getRandomItem(operators);
  console.log(`Question: ${firstRandomNum} ${operator} ${secondRandomNum}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = calculate(firstRandomNum, secondRandomNum, operator);
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(startRound, 'What is the result of the expression?');
};

export default runGame;
