import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";

export const isEven = (number) => number % 2 === 0;

for (let i = 0; i < 3; i += 1) {
  const question = () =>
    console.log(`Question: ${Math.floor(Math.random() * 100)}`);
  console.log(question);

  const userAnswer = () =>
    console.log(`Your answer: ${readlineSync.question("Your answer: ")}`);

  const expectedAnswer = isEven(number) ? "yes" : "no";
  if (expectedAnswer === userAnswer) {
    console.log("Correct!");
  }

  console.log(`Congratulations, ${getName.name}`);
}
