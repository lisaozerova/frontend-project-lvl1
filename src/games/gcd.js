import { getRandomIntInclusive, play } from '../index.js';

const INTRO = 'Find the greatest common divisor of given numbers.';

// TODO: написать логику получения gcd
const getGCD = (num1, num2) => {
  let result;

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

const playCalc = (userName) => {
  play(userName, INTRO, makeGameSubject);
};

export default playCalc;
