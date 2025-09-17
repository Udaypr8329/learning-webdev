let inp = document.querySelector("input");

let h2 = document.querySelector("h2");

inp.addEventListener("keyup",(e)=>{
  console.log(inp.value);
  let value = inp.value.replace(/[^a-zA-z]/g," ");
  inp.value = value;
  h2.innerText = value;
});