let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n'); 


for(let i = 1; i <= Number(input[0]); i++){
  let nums = input[i].split(' ')
  
  console.log(Number(nums[0]) +Number(nums[1]))  
}

