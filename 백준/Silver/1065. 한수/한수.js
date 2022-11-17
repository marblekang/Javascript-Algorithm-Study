let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let n = (Number(input[0]))
let count = 0;
for(let i = 1 ; i <= n ; i++){
  if(i < 100){
    count++
  }else{
    let arr = i.toString().split('').map(Number)
    if(arr[1]-arr[0] == arr[2] - arr[1]){
      count++
    }
  }
}
console.log(count)