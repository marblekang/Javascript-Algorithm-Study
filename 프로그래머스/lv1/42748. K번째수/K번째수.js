function solution(array, commands) {
   let arr = [];
    for(let val = 0; val < commands.length; val++){
        let i = commands[val][0];
        let j = commands[val][1];
        let k = commands[val][2];    
     arr.push(array.slice((i-1),(j)).sort((a,b)=>a-b)[k-1]);   
}
    return arr
}