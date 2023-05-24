import startGame from '../index.js';
import getRandomNum from '../random.js';

const task = 'What is the result of the expression?';

const min = 1;
const max = 30;

const operators = ['+', '-', '*'];

const getRandomItem = (items) => {
  const maxIndex = items.length - 1;
  const index = getRandomNum(0, maxIndex);
  return items[index];
};

const calculate = (first, second, operator) => {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      console.log('Calculation error!');
      return null;
  }
};

const getGameData = () => {
  const firstNum = getRandomNum(min, max);
  const secondNum = getRandomNum(min, max);
  const operator = getRandomItem(operators);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculate(firstNum, secondNum, operator));
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
