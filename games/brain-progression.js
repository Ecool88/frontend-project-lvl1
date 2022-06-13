import { randomIntFromInterval } from '../src/utils.js';
import mainLogicForGames from '../src/index.js';

const taskDescription = 'What number is missing in the progression?';

const progressionLength = randomIntFromInterval(5, 10);
const hiddenPosition = randomIntFromInterval(0, progressionLength - 1);

function createResultsForBrainProgression() {
  const beginningProgressions = randomIntFromInterval(1, 100);
  const constantNumber = randomIntFromInterval(1, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i++) {
    progression.push(beginningProgressions + constantNumber * i);
  }
  const question = `${progression.slice(0, hiddenPosition).join(' ')} .. ${progression.slice(hiddenPosition + 1, progressionLength).join(' ')}`;
  const rightAnswer = progression[hiddenPosition];
  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainProgression() {
  mainLogicForGames(taskDescription, createResultsForBrainProgression);
}
