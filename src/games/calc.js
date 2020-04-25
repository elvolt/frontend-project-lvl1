import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const OPERATORS = ['+', '-', '*'];
const TASK = 'What is the result of the expression?';
const MIN_NUM = 0;
const MAX_NUM = 100;

const generateQuestionAndRightAnswer = () => {
  const operand1 = getRandomInt(MIN_NUM, MAX_NUM);
  const operand2 = getRandomInt(MIN_NUM, MAX_NUM);
  // const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = operand1 + operand2;
      break;
    case '-':
      rightAnswer = operand1 - operand2;
      break;
    case '*':
      rightAnswer = operand1 * operand2;
      break;

    // no default
  }

  const question = `${operand1} ${operator} ${operand2}`;

  return [question, String(rightAnswer)];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
