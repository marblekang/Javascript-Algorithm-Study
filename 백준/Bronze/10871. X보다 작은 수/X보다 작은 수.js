let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0].split(' ')[0])
let x = Number(input[0].split(' ')[1])
let arr = input[1].split(' ').map(Number)
let numbers = [];
for(let i = 0 ; i < count; i++){
  if(x > arr[i]){
    numbers.push(arr[i])
  }
}
console.log(...numbers)
