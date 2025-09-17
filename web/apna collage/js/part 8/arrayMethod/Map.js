let num = [1,2,3,4];

let double = num.map((e)=>{
    return e*2;
});

console.log(double);

let arr1 = [
    {
        name:"uday",
        marks:94.3,
},
{
        name:"anuraj",
        marks:64.3,
},
{
        name:"raj",
        marks:44.3,
}
];

let cgpa = arr1.map((e)=>{
    return e.marks/10;
});

console.log(cgpa);