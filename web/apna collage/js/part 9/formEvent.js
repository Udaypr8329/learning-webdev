let form = document.querySelector("form");

form.addEventListener("submit",function(e){
  e.preventDefault();
  console.log(e);
  let inp = document.querySelector("input");
  console.log(inp.value);
});