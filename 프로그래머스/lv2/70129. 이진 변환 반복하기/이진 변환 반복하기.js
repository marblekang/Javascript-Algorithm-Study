function solution(s) {
    let answer = [0,0];
 
    
 while(s > 1){
     let len = s.length;
    s = s.split("0").join("");
    answer[0]++;
     answer[1]+=(len-s.length);
    s = s.length.toString(2);
}
 return answer   
}
// while 문은 조건이 true 일때 돌아가고 , false 일때 멈춤. 그래서 num 이 1보다 클때는 반복하고 , num 이 1 이하 일때 멈춤. 따라서 while문으로 num 을 1로 만들고 싶으면 조건에 num !== 1 이 들어가야 , num 이 1이 되었을때 false 가 되면서 멈춤.