let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let testCase = Number(input[0]);

let sN = 0;

for(let i = 1 ; i <= testCase; i++){
  let count = 0;
  let arr = input[i].split(' ').map(Number)
  sN = arr.shift()
  let score = arr
  let avg = arr.reduce((acc,val)=>acc+=val,0)
  avg = avg/sN
  // console.log(avg)
  for(let j = 0; j < sN; j++){
    if(score[j] > avg){
      // console.log("score",score[j])
      count++
      // console.log("count",count)
    } 
  }
  
  
  console.log(((count/sN)*100).toFixed(3)+"%");
}


