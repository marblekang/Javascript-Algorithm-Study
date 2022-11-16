let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let count = 0 ;
while(true){
  let a = Number(input[count].split(' ')[0])
  let b = Number(input[count].split(' ')[1])
  if(a != 0) {
  console.log(a+b)
  count++
  }else{
    break;
  }
}
