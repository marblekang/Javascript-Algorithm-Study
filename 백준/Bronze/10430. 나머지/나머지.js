let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n'); 


let A = Number(input[0].split(' ')[0])
let B = Number(input[0].split(' ')[1])
let C = Number(input[0].split(' ')[2])

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C)