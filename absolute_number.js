const num1 = -8;

let absolute;
// your code goes here
if (num1 < 0) {
   absolute = -1*num1
} 
else {
    absolute = num1
}

console.log(absolute)




function pow(x,n){
    let x = prompt("x?", "") 
    let n = prompt("n?", "")
    if(n<0 ) { alert(`Power ${n} is not supported, please enter a non-negative integer number`)} 
    else alert(pow(x, n));
    
    let result= 1;
     for(let i = 0; i < n ;i ++)
     {result *=x} 
     return result} 
     
  