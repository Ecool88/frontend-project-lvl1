import readlineSync from 'readline-sync';
import greeting from './cli.js';

const numberOfRounds = 3;

export default function runGame(gameDescription, createResults) {
  const userName = greeting();
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, rightAnswer } = createResults();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
