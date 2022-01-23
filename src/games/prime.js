import {
  GamePhrase,
  getRandomIntInclusive,
  play,
} from '../index.js';

const INTRO = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswerPhrase = (value) => (value ? GamePhrase.YES : GamePhrase.NO);

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makeGameSubject = () => {
  const num = getRandomIntInclusive(1, 100);

  return {
    gameSubject: num,
    correctAnswer: getCorrectAnswerPhrase(isNumberPrime(num)),
  };
};

const playEven = (userName) => {
  play(userName, INTRO, makeGameSubject);
};

export default playEven;
