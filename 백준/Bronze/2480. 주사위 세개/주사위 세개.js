let fs = require('fs');
let input = fs.readFileSync('dev/stdin')
  .toString().split('\n'); 

const numbers = input[0].split(' ').map(Number)



const num1 = numbers[0];
const num2 = numbers[1];
const num3 = numbers[2];



if(num1 === num2 && num2 === num3){
  answer = 10000 + num1 * 1000
}else if(num1 === num2){
  answer = 1000 + num1 * 100
}else if(num2 === num3){
  answer = 1000 + num2 * 100
}else if(num1 === num3){
  answer = 1000 + num3 * 100
}else{
  answer = 100 * (Math.max(num1, num2, num3))
}

console.log(answer)