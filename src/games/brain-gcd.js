import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculationResult = (number1, number2) => {
  if (number2) {
    return calculationResult(number2, number1 % number2);
  }
  return Math.abs(number1);
};

const questionGenerator = () => {
  const number1 = random(0, 100);
  const number2 = random(0, 100);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(calculationResult(number1, number2));
  return { question, expectedAnswer };
};

const runGCDGame = () => startGame(gameDescription, questionGenerator);

export default runGCDGame;
