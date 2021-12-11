import {
  GamePhrase,
  getRandomIntInclusive,
  play,
} from '../index.js';

const INTRO = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswerPhrase = (value) => (value ? GamePhrase.YES : GamePhrase.NO);

const isNumberParity = (number) => number % 2 === 0;

const playEven = (userName) => {
  const num = getRandomIntInclusive(1, 100);
  const correctAnswer = getCorrectAnswerPhrase(isNumberParity(num));

  play(userName, INTRO, num, correctAnswer);
};

export default playEven;
