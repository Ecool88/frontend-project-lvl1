import createRandomIntegerFromInterval from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

function calculateRightAnswerForBrainCalc(symbol, number1, number2) {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Неизвестный символ: '${symbol}'!`);
  }
}

function createResultForBrainCalc() {
  const randomNumber1 = createRandomIntegerFromInterval(1, 100);
  const randomNumber2 = createRandomIntegerFromInterval(1, 100);
  const randomSymbol = symbols[createRandomIntegerFromInterval(0, 2)];
  const question = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  const rightAnswer = calculateRightAnswerForBrainCalc(randomSymbol, randomNumber1, randomNumber2);
  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainEven() {
  runGame(gameDescription, createResultForBrainCalc);
}
