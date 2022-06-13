export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEvenNumber(num) {
  return num % 2 === 0;
}
