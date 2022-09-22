function solution(a, b) {
    let small = 0;
    let big = 0;
    let sum = 0;
    if(a<b){
        small = a;
        big = b;
    }else{
        small = b;
        big = a;
    }
    for(let i = small; i<=big;i++){
         sum += i
    }
    return sum;
}