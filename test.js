

var sd = require('./index.js');


console.log(sd.getDateTime(new Date().getTime() - 10*24*60*60*1000));

console.log(sd.touch('test.txt'));

