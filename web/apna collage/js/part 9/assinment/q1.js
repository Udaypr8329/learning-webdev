let btn = document.querySelector("button");

btn.addEventListener('mouseout', ()=>{
  console.log("mouseout");
});

let inp = document.querySelector("input");

inp.addEventListener('keypress', ()=>{
  console.log("key pressed");
});

let p = document.querySelector("p");
let img = document.querySelector("img");

p.addEventListener('scroll', ()=>{
  console.log("Scrolled");
});
(p.innerText).addEventListener('load', ()=>{
  console.log("loaded");
});

img.addEventListener('load', ()=>{
  console.log("loaded");
});