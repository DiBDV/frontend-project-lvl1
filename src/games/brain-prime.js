import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const questionGenerator = () => {
  const num = random(2, 100);
  const question = num;
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, expectedAnswer };
};

const runPrimeGame = () => startGame(gameDescription, questionGenerator);

export default runPrimeGame;
