import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const TASK = 'What number is missing in the progression?';
const PROGRESSION_SIZE = 10;
const MIN_NUM = 1;
const MAX_NUM = 100;

const getProgression = (firstMember, step, size) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    const member = firstMember + i * step;
    progression.push(member);
  }

  return progression;
};

const generateQuestionAndRightAnswer = () => {
  const firstMember = getRandomInt(MIN_NUM, MAX_NUM);
  const step = getRandomInt(MIN_NUM, MAX_NUM);
  const progression = getProgression(firstMember, step, PROGRESSION_SIZE);

  const hiddenElementIndex = getRandomInt(0, PROGRESSION_SIZE - 1);
  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
