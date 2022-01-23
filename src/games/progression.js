import { getRandomIntInclusive, play } from '../index.js';

const INTRO = 'What number is missing in the progression?';

const getProgression = (length) => {
  const step = getRandomIntInclusive(1, 100);
  const startValue = getRandomIntInclusive(1, 100);
  const result = [startValue];

  for (let i = 0; i < length; i += 1) {
    result.push(result[i] + step);
  }

  return result;
};

const makeGameSubject = () => {
  const length = getRandomIntInclusive(5, 10);
  const hiddenElementIndex = getRandomIntInclusive(0, length);
  const progression = getProgression(length);
  const hiddenElement = progression[hiddenElementIndex];

  const expression = [...progression];
  expression[hiddenElementIndex] = '..';

  return {
    gameSubject: expression.join(' '),
    correctAnswer: hiddenElement,
  };
};

const playProgression = () => {
  play(INTRO, makeGameSubject);
};

export default playProgression;
