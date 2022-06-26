import createRandomIntegerFromInterval from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function createArithmeticProgression(beginningProgressions, constantNumber, progressionLength) {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(beginningProgressions + constantNumber * i);
  }
  return progression;
}

function createResultsForBrainProgression() {
  const progressionLength = createRandomIntegerFromInterval(5, 10);
  const hiddenPosition = createRandomIntegerFromInterval(0, progressionLength - 1);
  const beginningProgressions = createRandomIntegerFromInterval(1, 100);
  const constantNumber = createRandomIntegerFromInterval(1, 10);
  const progression = createArithmeticProgression(beginningProgressions, constantNumber, progressionLength);
  const rightAnswer = progression[hiddenPosition];
  progression.splice(hiddenPosition, 1, '..');
  const question = progression.join(' ');
  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainProgression() {
  runGame(gameDescription, createResultsForBrainProgression);
}
