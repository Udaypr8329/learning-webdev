let arr = [1,2,3,4,5];

let square = arr.map((e)=>{
  return e*2;
});

console.log(`square of arr : ${square}`);

let sum = arr.reduce((acc,el)=>{
  return acc+el;
});

console.log(`sum of arr : ${sum}`);

let avg = sum/arr.length;

console.log(`avg of arr : ${avg}`);

