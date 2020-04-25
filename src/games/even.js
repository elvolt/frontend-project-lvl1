import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const MAX_NUM = 100;
const MIN_NUM = 0;
const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndRightAnswer = () => {
  const question = getRandomInt(MIN_NUM, MAX_NUM);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), rightAnswer];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
