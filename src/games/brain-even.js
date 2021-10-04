import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculationResult = (number) => number % 2 === 0;

export const questionGenerator = () => {
  const number = random(2, 100);
  const question = number % 2;
  const expectedAnswer = calculationResult(number) ? 'yes' : 'no';
  return { question, expectedAnswer };
};

//   for (let i = 0; i < 3; i += 1) {
//     const number = Math.floor(Math.random() * 100);
//     console.log(`Question: ${number}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     const expectedAnswer = isEven(number) ? 'yes' : 'no';
//     if (expectedAnswer === userAnswer) {
//       console.log('Correct!');
//     }
//     if (expectedAnswer !== userAnswer) {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
//       console.log(`Let's try again, ${name}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${name}!`);
// };

export const runIsEvenGame = () => startGame(gameDescription, questionGenerator);
