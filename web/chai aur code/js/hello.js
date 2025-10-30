// // console.log("hello world");

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];

// // let arr3=arr1.concat(arr2);
// let arr3 = [...arr1,...arr2];
// // console.log(arr3);

// //flat

// let arr = [1,2,3,[4,5,6],7,8,[9,10,[14,15,[4,5,6],16],11],12,13,];

// // console.log(arr.flat(3));
// // console.log(Array.isArray(arr));
// // console.log(Array.isArray(4));
// // console.log(Array.from("uday"));

// let mysym = Symbol("id");
// let obj1 = {
//     name : "uday",
//     age : 19,
//     [mysym] : "key1"
// }

// let obj2 = {
//     names : "raj",
//     ages : 29
// }

// let obj3 = {...obj1,...obj2};
// // console.log(obj3);

// // console.log(obj2.hasOwnProperty('name'));

// // const {name} = obj1;

// // console.log(name);

// // const navbar = ({company})=>{

// // }
// // navbar(company= "uday");

// // console.log(navbar());


// let newarr = arr.flat(Infinity);
// console.log(newarr);

// let newarr1 = newarr.filter((num)=> (num>=10));
//  console.log(newarr1);

// let newarr2 = newarr.map((num)=> num*10 );
//  console.log(newarr2);


// let promiseOne = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         resolve("no error. promise completed");
//     }else{
//         reject("error occur. promise not completed");
        
//     }
// });

// promiseOne.then((resolve)=>{
//     console.log("R : ",resolve);
// }).catch((error)=>{
//     console.log("E: ",error);
    
// })

//mouseover - point element and it children.

// mouseenter - point element only.

document.querySelector('div').addEventListener("mouseover",(e)=>{
    console.log(e.ctrlKey);
});

