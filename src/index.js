import readlineSync from 'readline-sync';

const RIGHT_ANSWERS_TO_WIN = 3;

const launchGame = (task, generateQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(task);

  for (let i = 0; i < RIGHT_ANSWERS_TO_WIN; i += 1) {
    const [question, rightAnswer] = generateQuestionAndRightAnswer();

    console.log(`Question: ${question}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default launchGame;
