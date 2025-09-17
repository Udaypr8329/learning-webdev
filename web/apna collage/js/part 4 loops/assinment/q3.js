let num = Number(prompt("Enter the num:- "));

if(isNaN(num)){
    console.log("invalid input");
}else{
let str = String(num);
let sum = 0;
for(i of str){
    sum+=Number(i);    
}
console.log("Sum of the digits in a number: ", sum);
}