let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n'); 
let num = Number(input[0])

if((num % 4 === 0 && num%100!=0) || num%400 === 0){
  console.log(1)
}else{
  console.log(0)
}