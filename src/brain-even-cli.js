import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";

export const isEven = (num) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${Math.floor(Math.random() * 100)}`);

    let answer = console.log(`Your answer: ${readlineSync.question("Your answer: ")}`);
    if (answer !== "yes" || answer !== "no") {
        return 'Please use "yes" or "no" to answer';
    }
    if (num % 2 === 0 && answer === "yes" && answer !== "no") {
      return "Correct!";
    }
    if (num % 2 === 0 && answer == "no") {
      return `'no' is wrong answer ;(. Correct answer was 'yes'.)
        Let's try again, ${getName.name}!`;
    }

    console.log(`Congratulations, ${getName.name}`);
  }
};
