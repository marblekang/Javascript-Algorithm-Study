function solution(n) {
    
     let len = n.toString(2).split("0").join('').length;
while(true){
    n++
    if(len === n.toString(2).split("0").join('').length){
        return n
    }

}}