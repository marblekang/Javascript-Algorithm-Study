let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n');
let num = Number(input[0]);
let sum=0;
for(let i = num; i>=1; i--){
   sum+=i;
}
console.log(sum)
