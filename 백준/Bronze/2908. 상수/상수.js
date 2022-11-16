let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0].split('').reverse().join(''))
let b = Number(input[0].split(' ')[1].split('').reverse().join(''))
console.log(a > b ? a : b)