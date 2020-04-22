import launchGame, { getRandomInt } from '../index.js';

const TASK = 'Find the greatest common divisor of given numbers.';
const MIN_NUM = 1;
const MAX_NUM = 100;


const getGcd = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  const reminder = max % min;
  return (reminder === 0) ? min : getGcd(min, reminder);
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
