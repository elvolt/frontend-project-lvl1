import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const TASK = 'Find the greatest common divisor of given numbers.';
const MIN_NUM = 0;
const MAX_NUM = 100;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const generateQuestionAndRightAnswer = () => {
  const num1 = getRandomInt(MIN_NUM, MAX_NUM);
  const num2 = getRandomInt(MIN_NUM, MAX_NUM);

  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);

  return [question, String(rightAnswer)];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
