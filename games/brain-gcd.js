import { randomIntFromInterval } from '../src/utils.js';
import mainLogicForGames from '../src/index.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

function createResultsForBrainGCD() {
  const randomNumber1 = randomIntFromInterval(1, 100);
  const randomNumber2 = randomIntFromInterval(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = gcd(randomNumber1, randomNumber2);
  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainGCD() {
  mainLogicForGames(taskDescription, createResultsForBrainGCD);
}
