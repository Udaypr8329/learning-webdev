let obj1 = {
  name: "uday",
  class: "3year CSE"
}

let obj2 = {
  id: 123,
  rollno: 87
}

function mergeObject(obj1,obj2){
  let newobj=({...obj1,...obj2});
  
  return newobj;
}

console.log(mergeObject(obj1,obj2));