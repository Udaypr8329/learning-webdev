function hello (){
    console.log("hello world!");
}
hello();

function sum(a,b) {
    console.log("sum :- ",(a+b));
}

sum(5,3)

let a= 5;
let b = 10;
sum(a,b);

function multi(a,b){
    return a*b;
}

let mul= multi(a,b);
console.log("multiplication is : ", mul);
console.log("multiplication is : ",multi(4,5));