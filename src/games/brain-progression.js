import {
  compareAnswers,
  getAnswer,
  getRandomNum,
  startGame,
} from '../index.js';

const getProgression = () => {
  const length = 10;
  const first = getRandomNum(1, 100);
  const step = getRandomNum(2, 15);
  const result = [];
  result[0] = first;
  for (let i = 1; i <= length; i += 1) {
    result[i] = result[i - 1] + step;
  }
  return result;
};

const startRound = () => {
  const progression = getProgression();
  const position = getRandomNum(0, 10);
  const correctAnswer = progression[position];
  const newProgression = progression;
  newProgression[position] = '..';
  console.log(`Question: ${newProgression.join(' ')}`);
  const userAnswer = Number(getAnswer());
  if (compareAnswers(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = () => {
  startGame(startRound, 'What number is missing in the progression?');
};

export default runGame;
