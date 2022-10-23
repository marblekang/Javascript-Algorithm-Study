function solution(s) {

    let words = s.split(' ');
    console.log(words)
    return words.map((el)=>el.split('').map((el,idx)=>{return idx % 2===0 ? el.toUpperCase():el.toLowerCase()}).join('')).join(' ')
}