import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const calculationResult = (arrayFirstNumber, arrayCoefficient) => {
  const array = [];
  array.length = 10;
  const arrayElements = array[arrayFirstNumber + (array.length - 1) * arrayCoefficient];
  console.log(arrayElements);
};

const questionGenerator = () => {
  const arrayFirstNumber = random(0,10);
  const arrayCoefficient = random(0,10);
  const question = calculationResult.arrayElements;
  const expectedAnswer = String(calculationResult(arrayFirstNumber, arrayCoefficient));
  return { question, expectedAnswer };
};

const runProgressionGeame = () => startGame(gameDescription, questionGenerator);

export default runProgressionGeame;
