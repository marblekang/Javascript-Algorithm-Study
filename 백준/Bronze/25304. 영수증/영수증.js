let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0])
let count = Number(input[1])
let sum = 0;
for (let i = 2; i <= count + 1; i++) {
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  sum += a * b
}
if (sum == N) {
  console.log("Yes")
} else {
  console.log("No")
}
