let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let n = Number(input[0])
let count = 0
let current = n
while(true){
    // 10의자리수 구하기 -> 10으로 나눠서 버리기 //1의자리수 구하기 -> 10으로나눈 나머지
    let sum = Math.floor(current/10) + (current%10); //7 + 5
  current = (current%10*10) + (sum%10) // 50 + 2
  count++
  if(current == n){
    break;
  }
}
console.log(count)