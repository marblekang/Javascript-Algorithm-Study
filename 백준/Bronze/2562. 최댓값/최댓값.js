let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n').map(Number);
let ans1 = Math.max(...input);
let ans2 = input.indexOf(ans1);
console.log(`${ans1}\n${ans2+1}`);
