let arr = ['a','b','c'];
let arrCopy = arr;

console.log(arr==arrCopy);
console.log(arr===arrCopy);

arr.push('d');
console.log(arr===arrCopy);

arrCopy.pop();

arr.push("e");