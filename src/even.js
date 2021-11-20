import readlineSync from 'readline-sync';

const GamePhrase = {
  RULES: 'Answer "yes" if the number is even, otherwise answer "no".',
  QUESTION: 'Question:',
  YES: 'yes',
  NO: 'no',
  ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  WRONG: 'is wrong answer ;(. Correct answer was',
  WIN: 'Congratulations,',
  LOSE: 'Let\'s try again,',
};

const ROUND_COUNT = 3;

const getCorrectAnswerPhrase = (value) => (value ? GamePhrase.YES : GamePhrase.NO);

const isNumberParity = (number) => number % 2 === 0;

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playEven = (name) => {
  console.log(GamePhrase.RULES);
  let round = 0;

  for (round; round < ROUND_COUNT; round += 1) {
    const num = getRandomIntInclusive(1, 100);
    const userAnswer = readlineSync.question(`${GamePhrase.QUESTION} ${num}\r\n${GamePhrase.ANSWER}`)
      .trim()
      .toLowerCase();

    const correctAnswer = getCorrectAnswerPhrase(isNumberParity(num));
    const isUserAnswerCorrect = correctAnswer === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(GamePhrase.CORRECT);
    } else {
      console.log(`'${userAnswer}' ${GamePhrase.WRONG} '${correctAnswer}'.`);
      break;
    }
  }

  if (round === ROUND_COUNT) {
    console.log(`${GamePhrase.WIN} ${name}!`);
  } else {
    console.log(`${GamePhrase.LOSE} ${name}!`);
  }
};

export default playEven;
