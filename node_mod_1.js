const path = require('path');

const util = require('util');
const v8 = require('v8');
const dirUploads =  path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);
util.log(dirUploads);
util.log(path.basename(__filename));

util.log(v8.getHeapCodeStatistics());
console.log('-----')
util.log(v8.getHeapStatistics());