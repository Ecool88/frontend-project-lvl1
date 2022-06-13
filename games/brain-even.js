import { isEvenNumber, randomIntFromInterval } from '../src/utils.js';
import mainLogicForGames from '../src/index.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function createResultsForBrainEven() {
  const randomNumber = randomIntFromInterval(1, 100);
  const rightAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, rightAnswer };
}

export default function brainEven() {
  mainLogicForGames(taskDescription, createResultsForBrainEven);
}
