import readlineSync from 'readline-sync';

const roundCount = 3;

/**
 *
 * @param {*} gameDescription  описание игры
 * @param {*} questionGenerator генератор вопроса к игре
 * @returns
 */

const startGame = (gameDescription, questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name?');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundCount; i += 1) {
    const { question, expectedAnswer } = questionGenerator();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  // Congrats to user on successful game.
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
