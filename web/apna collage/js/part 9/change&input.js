let form = document.querySelector("form");
let inp = document.querySelector("input");

form.addEventListener("submit",()=>{
  console.log("form submited");
});

inp.addEventListener("change",()=>{
  console.log("change performed", inp.value);
});

inp.addEventListener("input",()=>{
  console.log("inputchange performed", inp.value);
});

