import {
  compareAnswers,
  getRandomNum,
  startGame,
  getAnswer,
} from '../index.js';

const isEvenNum = (number) => number % 2 === 0;

const startRound = () => {
  const randomNum = getRandomNum(0, 100);
  console.log(`Question: ${randomNum}`);
  const correctAnswer = isEvenNum(randomNum) ? 'yes' : 'no';
  const userAnswer = getAnswer();
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(startRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default runGame;
