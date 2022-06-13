let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);
let ans = "";
for(let i = 1; i <= num; i++){
  ans += i +"\n";
}

console.log(ans)