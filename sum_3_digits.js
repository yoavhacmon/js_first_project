
const num = 757;
let sum = 0;
let X = (num-num%100)/100;
let Y = (num%100-num%10)/10;
let Z = num%10;
sum = X + Y + Z;
console.log(sum)

