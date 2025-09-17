let arr = [1,2,3,4,5,6,2,3];
let num = 2;
let a =0;
console.log(arr);
for(i of arr){
    if(i==num){
        let del = arr.splice(a,1);
    }
    a++;
}
console.log(arr);