let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0])
for(let i = 1; i <= N; i++){
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  console.log(`Case #${i}: ${a} + ${b} = ${a+b}` )
}
