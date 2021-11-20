const ROUND_COUNT = 3;

const getCorrectAnswerPhrase = (value) => (value ? GamePhrase.YES : GamePhrase.NO);

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
