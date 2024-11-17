const fs = require('fs');

let md = `
This is a new file
============================

ES6 Template are cool, 

* Template Strings
* Node File Systems
* readline CLI
`;
fs.writeFile('javscript.md', md.trim(), (err)=>{
  if (err)  throw err;
  fs.appendFileSync('javscript.md', '\n\nNODE JS READ ME BY NEERAJ')
  console.log('Markdown created')
})