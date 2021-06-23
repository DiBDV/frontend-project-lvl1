import readlineSync from "readline-sync";

export const getName = () => readlineSync.question("May I have your name? ");
export const greeting = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};
