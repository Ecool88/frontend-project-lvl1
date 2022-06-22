import createRandomIntegerFromInterval from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

function createResultsForBrainGCD() {
  const randomNumber1 = createRandomIntegerFromInterval(1, 100);
  const randomNumber2 = createRandomIntegerFromInterval(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = gcd(randomNumber1, randomNumber2);
  return { question, rightAnswer: rightAnswer.toString() };
}

export default function brainGCD() {
  runGame(gameDescription, createResultsForBrainGCD);
}
