// console.log(process.argv)
/*

[
  '/Users/neeraj/.nvm/versions/node/v20.12.0/bin/node',
  '/Users/neeraj/lab/node_essentials/chap1/process.js'
]
*/

// neeraj@Neerajs-MacBook-Pro chap1 % node process --user neeraj --age 22  --lname 'Vishwakarma' 
// converts everything to array of string after filename 
/*
[
  '/Users/neeraj/.nvm/versions/node/v20.12.0/bin/node',
  '/Users/neeraj/lab/node_essentials/chap1/process',
  '--user',
  'neeraj',
  '--age',
  '22',
  '--lname',
  'Vishwakarma'
]*/

function grab(flag){
  let indexAfterFlag = process.argv.indexOf(flag) + 1
  return process.argv[indexAfterFlag];
}

let user = grab('--user');
let age = grab('--age');
let lname = grab('--lname');

console.log(`User is ${user} ${lname} with age of ${age}`)