let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let day = Number(input[0].split(' ')[0])
let money = Number(input[0].split(' ')[1])
let priceArr = [];
for(let i = 1 ; i <= day; i++){
  let price = Number(input[i])
  priceArr.push(price)
}

for(let i = 0; i <day-1; i++){
  if(priceArr[i]<priceArr[i+1]){
    let count = parseInt(money/priceArr[i]);
    money += count*(priceArr[i+1]-priceArr[i])
  }
}
console.log(money)