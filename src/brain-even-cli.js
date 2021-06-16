import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

export const isEven = (num) => {
  
console.log(`Question: ${Math.floor(Math.random() * 100)}`);

const answer = () => readlineSync.question('Your answer: ');

console.log(`Your answer: ${readlineSync.question("Your answer: ")}`);
        if (num % 2 === 0 && answer === "yes" && answer !== 'no') {
        return 'Correct';
        } if (num % 2 === 0 && answer == 'no') {
        return `'no' is wrong answer ;(. Correct answer was 'yes'.)
        Let's try again, ${getName.name}!`;
        }

};
