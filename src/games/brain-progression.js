import startGame from '../index.js';
import random from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (start, length, step) => {
  const progression = [];
  let element = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(element);
    element += step;
  }
  return progression;
};

const hideProgressionElement = (progression, index) => {
  // eslint-disable-next-line no-param-reassign
  progression[index] = '..';
  return progression;
};

const questionGenerator = () => {
  const start = random(0, 10);
  const step = random(1, 10);
  const length = random(5, 10);
  const progression = createProgression(start, length, step);
  const randomProgressionIndex = random(0, progression.length);
  const expectedAnswer = String(progression[randomProgressionIndex]);
  const question = hideProgressionElement(progression, randomProgressionIndex).join(', ');
  return { question, expectedAnswer };
};

const runProgressionGame = () => startGame(gameDescription, questionGenerator);

export default runProgressionGame;
