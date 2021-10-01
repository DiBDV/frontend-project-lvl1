import readlineSync, { question } from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const random = (min, max) => {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
};

const startGame = (gameDescription, questionGenerator) => {
  const getName = () => readlineSync.question('May I have your name? ');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  // a question will be generated 3 times
  for (let i = 0; i < 3; i += 1) {
    const userQuestion = questionGenerator(question);
    console.log(`Question: ${userQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userExpectedAnswer = questionGenerator(expectedAnswer);

    // here we're comparing the userAnswer with the right answer
    if (questionGenerator.expectedAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${userExpectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  // Congrats to user on successful game.
  console.log(`Congratulations, ${name}!`);
};

export default startGame;


//движок должен принимать результат и вопрос; вопрос формирует игра;
// index.js = движок
// brain-calc.js = игра
// brain-calc-cli.js = логика игры

// общие части игры, которые должны быть в движке:
// + приветствие; 
// + спрашиваем имя;
// - задаем вопрос участнику;
// - подтверждение верного ответа;
// - сообщение об ошибке
