function solution(arr) {
  if(arr.length > 1){
         let result =  arr.filter((value)=>{
            return value != Math.min(...arr)
            
             
          })
        return result
  }else{
      return [-1]
  }
}