import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

export const compareAnswers = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const getRandomNumber = () => Math.round(Math.random() * 30);

export const startGame = (rounds, game, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(question);
  for (let i = 1; i <= rounds; i += 1) {
    const isCorrect = game();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
