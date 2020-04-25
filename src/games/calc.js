import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const OPERATORS = ['+', '-', '*'];
const TASK = 'What is the result of the expression?';
const MIN_NUM = 0;
const MAX_NUM = 100;

const getArithmeticResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown opertor: '${operator}'`);
  }
};

const generateQuestionAndRightAnswer = () => {
  const operand1 = getRandomInt(MIN_NUM, MAX_NUM);
  const operand2 = getRandomInt(MIN_NUM, MAX_NUM);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const rightAnswer = getArithmeticResult(operand1, operand2, operator);
  const question = `${operand1} ${operator} ${operand2}`;

  return [question, String(rightAnswer)];
};

const run = () => launchGame(TASK, generateQuestionAndRightAnswer);

export default run;
