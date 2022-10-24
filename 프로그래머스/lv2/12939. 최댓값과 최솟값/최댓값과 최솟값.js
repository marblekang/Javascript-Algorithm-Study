function solution(s) {
    let answer = [];
    let nums = s.split(' ').map((val)=>val*1);
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    answer.push(min);
    answer.push(max);
    return answer.join(' ')
    
  

}