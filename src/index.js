import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;

const GameText = {
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

const play = (userName, intro, makeGameSubject) => {
  console.log(intro);

  let round = 0;

  for (round; round < ROUND_COUNT; round += 1) {
    const { gameSubject, correctAnswer } = makeGameSubject();
    const userAnswer = readlineSync
      .question(`${GameText.QUESTION} ${gameSubject}\r\n${GameText.ANSWER}`)
      .trim()
      .toLowerCase();

    const isUserAnswerCorrect = String(correctAnswer) === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(GameText.CORRECT);
    } else {
      console.log(`'${userAnswer}' ${GameText.WRONG} '${correctAnswer}'.`);
      break;
    }
  }

  const finalPhrase = (round === ROUND_COUNT) ? GameText.WIN : GameText.LOSE;
  console.log(`${finalPhrase} ${userName}!`);
};

export {
  GameText,
  getRandomIntInclusive,
  play,
};
