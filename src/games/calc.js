import readlineSync from 'readline-sync';

const GamePhrase = {
  INTRO: 'What is the result of the expression?',
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

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calcNumbers = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'No such operators';
  }

  return result;
};

const operators = ['+', '-', '*'];

const playCalc = (name) => {
  console.log(GamePhrase.INTRO);
  let round = 0;

  for (round; round < ROUND_COUNT; round += 1) {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    const operator = operators[getRandomIntInclusive(0, 2)];
    const expression = `${num1} ${operator} ${num2}`;
    const userAnswer = readlineSync.question(`${GamePhrase.QUESTION} ${expression}\r\n${GamePhrase.ANSWER}`)
      .trim()
      .toLowerCase();

    const correctAnswer = calcNumbers(num1, num2, operator);
    const isUserAnswerCorrect = correctAnswer === Number(userAnswer);

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

export default playCalc;
