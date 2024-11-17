const fs = require('fs');

let stream  = fs.createReadStream('javscript.md', 'UTF-8' );

let data;

stream.once('data', (chunk)=>{
  console.log('Stream started');
  console.log('==============')
  console.log(chunk);
  console.log('================')
})

stream.on('data', (chunk)=> {
  console.log('chunck ', chunk.length);
  data+=chunk;

})

stream.on('end', ()=> console.log('Finished ', data.length))
// (err, data)=>{
//   console.log('File read ', data.length)
// }

console.log('Reading the file')