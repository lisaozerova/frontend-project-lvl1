import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;

const GamePhrase = {
  QUESTION: 'Question:',
  YES: 'yes',
  NO: 'no',
  ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  WRONG: 'is wrong answer ;(. Correct answer was',
  WIN: 'Congratulations,',
  LOSE: 'Let\'s try again,',
};

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const play = (userName, intro, gameSubject, correctAnswer) => {
  console.log(intro);
  let round = 0;

  for (round; round < ROUND_COUNT; round += 1) {
    const userAnswer = readlineSync
      .question(`${GamePhrase.QUESTION} ${gameSubject}\r\n${GamePhrase.ANSWER}`)
      .trim()
      .toLowerCase();

    const isUserAnswerCorrect = String(correctAnswer) === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(GamePhrase.CORRECT);
    } else {
      console.log(`'${userAnswer}' ${GamePhrase.WRONG} '${correctAnswer}'.`);
      break;
    }
  }

  const finalPhrase = (round === ROUND_COUNT) ? GamePhrase.WIN : GamePhrase.LOSE;
  console.log(`${finalPhrase} ${userName}!`);
};

export {
  GamePhrase,
  getRandomIntInclusive,
  play,
};
