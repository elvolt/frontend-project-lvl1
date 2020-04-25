import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const TASK = 'What number is missing in the progression?';
const PROGRESSION_SIZE = 10;
const MIN_NUM = 1;
const MAX_NUM = 100;

const generateQuestionAndRightAnswer = () => {
  const firstElement = getRandomInt(MIN_NUM, MAX_NUM);
  const step = getRandomInt(MIN_NUM, MAX_NUM);

  const progression = [];
  for (let i = firstElement, count = 1; count <= PROGRESSION_SIZE; i += step, count += 1) {
    progression.push(i);
  }

  const hiddenElementIndex = getRandomInt(0, PROGRESSION_SIZE - 1);

  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
