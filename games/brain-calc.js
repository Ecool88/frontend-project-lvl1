import randomIntFromInterval from '../src/utils.js';
import mainLogicForGames from '../src/index.js';

const taskDescription = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

function createResultsForBrainCalc() {
  const randomNumber1 = randomIntFromInterval(1, 100);
  const randomNumber2 = randomIntFromInterval(1, 100);
  const randomSymbol = symbols[randomIntFromInterval(0, 2)];
  const question = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

  let rightAnswer;

  if (randomSymbol === '+') {
    rightAnswer = randomNumber1 + randomNumber2;
  } else if (randomSymbol === '-') {
    rightAnswer = randomNumber1 - randomNumber2;
  } else {
    rightAnswer = randomNumber1 * randomNumber2;
  }

  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainEven() {
  mainLogicForGames(taskDescription, createResultsForBrainCalc);
}
