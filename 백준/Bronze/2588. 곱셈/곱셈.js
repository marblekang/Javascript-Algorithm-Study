let fs = require('fs');
let input = fs.readFileSync('dev/stdin')
  .toString().split('\n'); 

let num1 = Number(input[0])
let num2 = Number(input[1])
let a = Number(input[1].split('')[0])
let b = Number(input[1].split('')[1])
let c = Number(input[1].split('')[2])


console.log(num1 * c)
console.log(num1 * b)
console.log(num1 * a)

console.log(num1*num2)