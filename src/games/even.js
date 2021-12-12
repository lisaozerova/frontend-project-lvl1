import {
  GamePhrase,
  getRandomIntInclusive,
  play,
} from '../index.js';

const INTRO = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswerPhrase = (value) => (value ? GamePhrase.YES : GamePhrase.NO);

const isNumberParity = (number) => number % 2 === 0;

const makeGameSubject = () => {
  const num = getRandomIntInclusive(1, 100);

  return {
    gameSubject: num,
    correctAnswer: getCorrectAnswerPhrase(isNumberParity(num)),
  };
};

const playEven = (userName) => {
  play(userName, INTRO, makeGameSubject);
};

export default playEven;
