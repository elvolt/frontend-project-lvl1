import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUM = 1;
const MAX_NUM = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndRightAnswer = () => {
  const question = getRandomInt(MIN_NUM, MAX_NUM);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [String(question), rightAnswer];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
