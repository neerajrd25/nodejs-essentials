
// rl.question('How to like node', (ans) => {
//   console.log(' Your answer is ', ans)
//   // rl.close()
// }
// )
const collectAnsers = require('./lib/collectAnswers')


const questions = [
  'Name ? ',
  'Age ?' ,
  'Qualification ?'
];


const answerEvents = collectAnsers(questions, (res) => {
  console.log('Thank You ');
  console.log(res);
  process.exit();
});

answerEvents.on('answer', (answer) => console.log(answer));