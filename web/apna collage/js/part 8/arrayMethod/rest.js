let sum = (...arr)=>{
  for (let i = 0; i< arr.length; i++) {
    console.log(`you gave us ${arr[i]}`)
  };
}

sum(3,4,45,2,3);

function min(){
  
    console.log(arguments);
    console.log(arguments.length);
}
min(1,2,3,4,5);

function sum1(...arr){
  return arr.reduce((acc,el)=>{
    return acc+el;
  });
}

let s=sum1(1,2,3,4);
console.log(s);

let max =(...arr)=>{
  return arr.reduce((acc, el)=>{
    if(acc<el){
        return el;
    }else{
        return acc;
    }
});
}

let m = max(2422,34,53,5,36,4,5652);
console.log(m);