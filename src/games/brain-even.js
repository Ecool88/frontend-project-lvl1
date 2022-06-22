import createRandomIntegerFromInterval from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEvenNumber(num) {
  return num % 2 === 0;
}

function createResultsForBrainEven() {
  const randomNumber = createRandomIntegerFromInterval(1, 100);
  const rightAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, rightAnswer };
}

export default function brainEven() {
  runGame(gameDescription, createResultsForBrainEven);
}
