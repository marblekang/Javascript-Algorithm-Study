let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0])
let star = "";
for(let i = 1; i <= N; i++){
 star += "*"
  console.log(star)
}