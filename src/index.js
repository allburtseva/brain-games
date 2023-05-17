import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const getName = () => readlineSync.question('May I have your name? ');

export const userName = getName();

export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

export const startRound = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
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