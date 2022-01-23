import { getRandomIntInclusive, play } from '../index.js';

const INTRO = 'Find the greatest common divisor of given numbers.';

const isNumberDivisible = (num1, num2) => (num1 % num2 === 0);

const getGCD = (num1, num2) => {
  let result = (num1 <= num2) ? num1 : num2;

  while (result > 1) {
    if (isNumberDivisible(num1, result) && isNumberDivisible(num2, result)) {
      break;
    }

    result -= 1;
  }

  return result;
};

const getRandomExpressionMembers = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);

  return [num1, num2];
};

const makeGameSubject = () => {
  const [num1, num2] = getRandomExpressionMembers();
  const expression = `${num1} ${num2}`;

  return {
    gameSubject: expression,
    correctAnswer: getGCD(num1, num2),
  };
};

const playCalc = () => {
  play(INTRO, makeGameSubject);
};

export default playCalc;
