#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEvenNumber(num) {
  return num % 2 === 0;
}

function brainEven(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const randomNumber = randomIntFromInterval(1, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    isEvenNumber(randomNumber);
    if ((isEvenNumber(randomNumber) && answer === 'yes') || (!isEvenNumber(randomNumber) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${isEvenNumber(answer) ? "'yes'" : "'no'"}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

console.log('Welcome to the Brain Games!');
const userName = greeting();
brainEven(userName);
