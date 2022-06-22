import createRandomIntegerFromInterval from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  const max = Math.sqrt(num);
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function createResultsForBrainPrime() {
  const randomNumber = createRandomIntegerFromInterval(1, 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, rightAnswer };
}

export default function brainPrime() {
  runGame(gameDescription, createResultsForBrainPrime);
}
