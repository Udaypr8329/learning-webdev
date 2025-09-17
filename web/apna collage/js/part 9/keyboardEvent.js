let inp = document.querySelector("input");

inp.addEventListener("keydown", (e)=>{
  console.log("1"); 
  console.log(e.code);
  console.log(e.key);
});

inp.addEventListener("keyup",(e)=>{
  console.log("2");
  console.log(e.code);
  console.log(e.key);

});

inp.addEventListener("keypress",(e)=>{
  console.log("3");
  console.log(e.code);
  console.log(e.key);

});