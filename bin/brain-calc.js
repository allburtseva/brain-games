#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');

const userName = getName();

const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

greeting();

console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = () => Math.round(Math.random() * 50);

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
  const userAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line max-len
  const correctAnswer = getResultOfExpression(firstRandomNumber, secondRandomNumber, randomOperator);
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
