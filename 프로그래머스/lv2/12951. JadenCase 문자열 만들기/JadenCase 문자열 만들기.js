function solution(s) {
    let answer = '';
    answer = s.split(' ').map((val)=>{
        return val.substr(0,1).toUpperCase()+val.substr(1).toLowerCase();
    })
return answer.join(' ')}