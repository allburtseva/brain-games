import readlineSync from 'readline-sync';
import {
  getName,
  compareAnswers,
} from '../index.js';

const getRandomNumber = () => Math.round(Math.random() * 100);

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

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
