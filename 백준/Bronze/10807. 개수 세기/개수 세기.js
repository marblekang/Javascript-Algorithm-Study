let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let n = input[0]*1;
let arr = input[1].split(' ');
let findVal = input[2]*1;
let answer = arr.filter((val)=> val == findVal)
console.log(answer.length)