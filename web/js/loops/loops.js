/*let arr= [1,4,2,3,5];

//let  obj={2,3,4};
/*for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element);
    }
}*
for (const element of arr) {
    console.log(element);
}

//for in 

let stu = {
    name : "uday",
    class : "B.E 3rd year",
    rollno: 87
}

for(let a in stu){
    console.log(`keys : ${a} \\ value : ${stu[a]}`);
}

arr=[4,5,4,2,23,4,23,4];

for(let a of arr){
    console.log(a);
}*/

let arr = [];
for(let num = 0; num<=100; num++){
    if(num%2==0){
        arr.push(num);
    }
}
console.log(arr);