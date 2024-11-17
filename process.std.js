process.stdout.write('Hello \n\n World');

const questions = [
  'Name',
  'Age',
  'Qualification'
];


const answers = [];

const ask = (i = 0) => {
  process.stdout.write(`\n\n ${questions[i]}`)
  process.stdout.write('>');
}

ask(answers.length);
process.stdin.on('data', function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) ask(answers.length);
  else {
    process.exit();
  }
})

process.on('exit', ()=>{
  
  console.log(...answers);
  console.log(answers.toString())
  console.log(answers);
  process.stdout.write(answers.toString())
  // process.stdout.write(answers)

})
