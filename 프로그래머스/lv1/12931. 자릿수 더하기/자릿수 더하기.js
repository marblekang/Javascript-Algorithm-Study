function solution(n)
{
    let arr = n.toString().split('').map((value)=>Number(value));
    return arr.reduce((acc,cur)=>acc+cur, 0)
}