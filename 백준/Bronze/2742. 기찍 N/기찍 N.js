let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n');

let num = Number(input[0])
let ans = "";
for(let i = num; i>=1 ; i-- ){
  ans += i+"\n"
}

console.log(ans)