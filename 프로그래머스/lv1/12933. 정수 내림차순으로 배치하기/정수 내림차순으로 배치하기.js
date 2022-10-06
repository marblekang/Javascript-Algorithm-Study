function solution(n) {
   let answer = n.toString().split('').sort().reverse().join('');
    return +answer
}