function solution(s) {
   return  s.length%2 === 0 ?  s.substr(Math.ceil(s.length/2)-1,2) : s.substr(Math.ceil(s.length/2)-1,1)   
  
}
  
