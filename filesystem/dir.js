const fs = require('fs');

if(fs.existsSync('your-files')){
  console.log('your directory exits ')
  process.exit();
}

fs.mkdir('your-files', (err)=> {
  if (err)  throw err;
  console.log('Directory created')
})