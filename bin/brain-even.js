#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');

const userName = getName();

const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEvenNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startRound = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEvenNumber(randomNumber);
  if (userAnswer.toLowerCase() === correctAnswer) {
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
