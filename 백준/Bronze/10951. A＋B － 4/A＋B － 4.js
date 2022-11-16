let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let count = 0 ;
while(input[count]){
  let a = Number(input[count].split(' ')[0])
  let b = Number(input[count].split(' ')[1])
  console.log(a+b)
  count++
}