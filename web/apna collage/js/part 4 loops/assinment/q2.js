let num = Number(prompt("Enter the num:- "));

if(isNaN(num)){
    console.log("invalid input");
}else{
let str = String(Math.abs(num));
console.log("digits in a number: ", str.length);
}