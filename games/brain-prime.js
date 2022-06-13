import randomIntFromInterval from '../src/utils.js';
import mainLogicForGames from '../src/index.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function createResultsForBrainPrime() {
  const randomNumber = randomIntFromInterval(1, 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, rightAnswer };
}

export default function brainPrime() {
  mainLogicForGames(taskDescription, createResultsForBrainPrime);
}
