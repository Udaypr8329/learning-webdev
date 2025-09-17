function doubleAndReturn(arr,...args){
  let doubleArgs = args.map((e)=>e*2);

  return [...arr,...doubleArgs];

}

console.log(doubleAndReturn([1,2,3],1,2,3,4));