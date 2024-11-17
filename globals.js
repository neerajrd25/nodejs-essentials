const path = require('path');
const divider = () => console.log('----------------------------------------------------------------------------');

global.console.log('Hello World')
// console is part of global object
let hello = 'Hellow from Node js';
console.log(global.hello); // undefined as it is file scope;
console.log(hello);

console.log(__dirname); // /Users/neeraj/lab/node_essentials/chap1
console.log(__filename); // /Users/neeraj/lab/node_essentials/chap1/globals.js

console.log(`The dir name is ${path.basename(__dirname)}`);
console.log(`The file name is ${path.basename(__filename)}`);

// list 
for (let key in global) {
  console.log(key)
}
/**
 * 
 * 
 * global
 * clearImmediate
 * setImmediate
 * clearInterval
 * clearTimeout
 * setInterval
 * setTimeout
 * queueMicrotask
 * structuredClone
 * atob
 * btoa
 * performance
 * fetch
 * crypto
 */
divider();

divider()
