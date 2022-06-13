import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function mainLogicForGames(taskDescription, createResults) {
  const userName = greeting();
  // описание задачи
  console.log(taskDescription);
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = createResults();
    // вопрос
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // проверка правильности ответа
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
