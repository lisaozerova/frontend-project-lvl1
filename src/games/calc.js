import { getRandomIntInclusive, play } from '../index.js';

const INTRO = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calcNumbers = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'No such operators';
  }

  return result;
};

const getRandomExpressionMembers = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);
  const operator = operators[getRandomIntInclusive(0, 2)];

  return [num1, operator, num2];
};

const playCalc = (userName) => {
  const [num1, operator, num2] = getRandomExpressionMembers();
  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = calcNumbers(num1, num2, operator);

  play(userName, INTRO, expression, correctAnswer);
};

export default playCalc;
