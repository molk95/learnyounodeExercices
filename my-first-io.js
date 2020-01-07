const fs = require('fs')

var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var str_arr = str.split('\n');
var newline_length = str_arr.length-1;

console.log(newline_length)