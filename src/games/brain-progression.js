import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const calculationResult = (arrayFirstNumber, arrayCoefficient) => {
  const array = [];
  array.length = 10;
  const arrayElement = array[arrayFirstNumber + (array.length - 1) * arrayCoefficient];
  
};

const questionGenerator = () => {
  const arrayFirstNumber = random(0,10);
  const arrayCoefficient = random(0,10);

};

const runProgressionGeame = () => startGame(gameDescription, questionGenerator);

export default runProgressionGeame;
