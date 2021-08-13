import readlineSync from 'readline-sync';

export const isEven = (number1) => number1 % 2 === 0;

export const calculationResult = (number1, operation, number2) => mathExpression;

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const operation = [' * ', ' + ', ' - '][Math.floor(Math.random() * 3)];
const mathExpression = number1 + operation + number2;

// User greeting
export const getName = () => readlineSync.question('May I have your name? ');
export const greeting = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  // questions generation
  for (let i = 0; i < 3; i += 1) {

    console.log(`Question: ${mathExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const expectedAnswer = calculationResult(mathExpression);
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (expectedAnswer !== mathExpression) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  
  }

  // Congrats to user on successful game.
  console.log(`Congratulations, ${name}!`);
};
