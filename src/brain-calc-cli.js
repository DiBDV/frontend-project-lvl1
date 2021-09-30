import startGame from './index.js';
import random from './index.js';

const calculationResult = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
     return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unexpected operation: ${operation}`)
  }
};

export const questionGenerator = () => {
  const number1 = random(0, 10);
  const number2 = random(0, 10);
  const operations = ['*', '+', '-'];
  const operation = operations[random(0, operations.length-1)];
  const question = `${number1} ${operation} ${number2}`;
  const expectedAnswer = String(calculationResult(number1, operation, number2));
};

const gameDescription = "What is the result of the expression?"

export const runCalcGame = () => startGame(gameDescription, calculationResult, questionGenerator)
