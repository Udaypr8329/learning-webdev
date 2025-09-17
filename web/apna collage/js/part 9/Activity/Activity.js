let h1 = document.querySelector("h1");

let btn = document.querySelector("button");

let div = document.querySelector("#div");
let color = ()=>{
  let red = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);

  let a = `rgb(${red},${blue},${green})`;
  return a;
};


btn.addEventListener("click",function(){
  console.log("btn clicked")
  h1.innerText = color();
  div.style.backgroundColor = color();
  // div.style.backgroundColor = "red";
});

div.addEventListener("mouseenter",()=>{
  console.log("mouse pointer entered in div");
});
div.addEventListener("mouseleave",()=>{
  console.log("mouse pointer level from div");
});