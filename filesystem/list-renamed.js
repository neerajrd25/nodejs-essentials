const fs = require('fs');

let files = fs.readdirSync('./')
console.log(files);


fs.readdir('./', function (err, files) {
  if (err) throw err;
  console.log(files);
});
console.log('reading files node list')


let read = fs.readFileSync('./readme.txt', 'UTF-8');
console.log(read);

