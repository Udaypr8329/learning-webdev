let arr=[1,2,3,1,2,3,0,1,2,3,1,2,3,0];
let newArr = [...arr];

console.log(...arr);

console.log(newArr);

let str ="sdkjvjndvkjdfv";
let char = [...str];

console.log(...str);
console.log(char);

let a = Math.min(...arr);

console.log(a);

//object

let stu = {
  name: "uday",
  class: "3year CSE",
}

let obj= {...arr};

console.log(obj);

let c= {
  ...stu,
  country:"India",
  id: 1
};
console.log(c);