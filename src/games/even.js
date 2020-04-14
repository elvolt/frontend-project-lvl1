import readlineSync from 'readline-sync';
import launchGame from '../index.js';

const MAX_NUM = 100;
const MIN_NUM = 0;
const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndRightAnswer = () => {
  const questionNum = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1) + MIN_NUM);
  const question = readlineSync.question(`Question: ${questionNum}`);
  const rightAnswer = isEven(questionNum) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
