import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculationResult = (number1, number2) => {
  if (number1 % number2 === 0) {
    expectedAnswer = number2;
  }
  if (number1 === 1 || number2 === 1) {
    expectedAnswer = 1;
  }
};

const questionGenerator = () => {
  const number1 = random(0, 10);
  const number2 = random(0, 10);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(calculationResult(number1, number2));
  return { question, expectedAnswer};
};

export const runGCDGame = () => startGame(gameDescription, questionGenerator);
