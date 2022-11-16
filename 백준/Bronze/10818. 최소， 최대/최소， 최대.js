let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n');

let res = input[1].split(' ').map(Number);
console.log(Math.min(...res), Math.max(...res))


