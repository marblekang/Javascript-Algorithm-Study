function solution(s){
    let arr = s.split('')
    let answer = "";
    arr = arr.map((value)=>{return value.toLowerCase()})
    let pArr = arr.filter((value)=> value =="p");
    let yArr = arr.filter((value)=> value =="y");
    if(pArr.length === yArr.length){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}