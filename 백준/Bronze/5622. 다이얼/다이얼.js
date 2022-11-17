let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let phone = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ"
}
let time = 0;
for (let i = 0; i < input[0].length; i++) {
  for (let j = 3; j <= 10; j++) {
    if (phone[j].includes(input[0][i])) {
      time += j
    }
  }
}
console.log(time)

