import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";

export const isEven = (number) => number % 2 === 0;

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question("Your answer: ");

  const expectedAnswer = isEven(number) ? "yes" : "no";
  if (expectedAnswer === userAnswer) {
    console.log("Correct!");
  }
  if (expectedAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
    Let's try again, ${getName.name}`);
    break;
  }
}
console.log(`Congratulations, ${getName.name}`);
