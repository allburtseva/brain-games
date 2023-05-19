import {
  compareAnswers,
  getRandomNum,
  startGame,
  getAnswer,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const number = getRandomNum(2, 100);
  console.log(`Question: ${number}`);
  const userAnswer = getAnswer();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(startRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default runGame;
