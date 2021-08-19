import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');
export const greeting = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);

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
}