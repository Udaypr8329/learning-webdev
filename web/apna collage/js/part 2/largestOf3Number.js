let a = Number(prompt("Enter the first number:-"));
let b = Number(prompt("Enter the second number:-"));
let c = Number(prompt("Enter the third number:-"));

if(a>b & a>c){
    console.log("First number is largest number :- "+a);
}
if(b>a & b>c){
    console.log("second number is largest number :- "+b);
}else{
    console.log("third number is largest number :- "+c);
}