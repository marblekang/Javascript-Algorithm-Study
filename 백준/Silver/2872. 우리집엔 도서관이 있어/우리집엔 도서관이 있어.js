let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
// 우리집도서관
// 뒤에서부터 보면서  가장 큰 값 부터 내림차순으로 구성된 원소들은 위치를 바꿀 필요가 없음.
let n = Number(input[0])
let books = [];

for (let i = 1; i <= n; i++) {
  let book = Number(input[i]);
  books.push(book)
}

//가장 큰 원소의 값과 인덱스 찾기
let maxVal = 0;
let maxIdx = 0;
for (let i = 0; i < n; i++) {
  if(maxVal < books[i]){
    maxVal = books[i];  
       maxIdx = i;
  }
  
 
}
// 뒤에서부터 출발해서 내림차순 배열의 크기 계산
// maxIndex의 앞의 값부터 찾아가기
let target = maxVal - 1; //2
let length=1
//2       
for (let i = maxIdx - 1; i >= 0; i--) { //3,2,1,0
  // 뒤에서부터 하나씩 찾아나가기
  if (target == books[i]) { // 타겟 만나면 4 == 3 // 3 != 2 // 
    target--; //앞으로 이동 // 3
    length++; //길이는 더해주기 2
  }
}
console.log(n-length)
// 내림차순이 아닌 숫자의 갯수가 이동 횟수
// 31245 -> 23145 => 12345
// 12543 -> 31254 => 43125 => 24315 => 12345