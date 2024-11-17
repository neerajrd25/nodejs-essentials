const fs = require('fs');

if (fs.existsSync('./list.js')){
  fs.renameSync('./list.js', 'list-renamed.js')
}


// fs.rename('./java.md', '../java.md', (err)=> {
//   if (err) throw err;
//   console.log('renamed');
// })


// unlink sync 

// fs.unlinkSync('/your-files/to-be-deleted.js')

fs.readdir('./', (err, files)=> {
  if (err)  throw err;
  console.log('Directory listed');
  console.log(...files)

})
fs.unlinkSync('./to-be-deleted.js')