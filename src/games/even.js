import {
  GameText,
  getRandomIntInclusive,
  play,
} from '../index.js';

const INTRO = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswerText = (value) => (value ? GameText.YES : GameText.NO);

const isNumberParity = (number) => number % 2 === 0;

const makeGameSubject = () => {
  const num = getRandomIntInclusive(1, 100);

  return {
    gameSubject: num,
    correctAnswer: getCorrectAnswerText(isNumberParity(num)),
  };
};

const playEven = () => {
  play(INTRO, makeGameSubject);
};

export default playEven;
