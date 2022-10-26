function solution(A,B){
 let a = A.sort((a,b)=>a-b);
 let b = B.sort((a,b)=>b-a);
 let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum += a[i]*b[i]
    }
    return sum
}