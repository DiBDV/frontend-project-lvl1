import readlineSync from 'readline-sync';

// eslint-disable-next-line
export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
