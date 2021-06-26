import readlineSync from 'readline-sync';

export const isEven = (number) => number % 2 === 0;

export const getName = () => readlineSync.question('May I have your name? ');
export const greeting = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (expectedAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
