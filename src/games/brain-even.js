import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const questionGenerator = () => {
  const number = random(2, 100);
  const question = number;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return { question, expectedAnswer };
};

export const runIsEvenGame = () => startGame(gameDescription, questionGenerator);
