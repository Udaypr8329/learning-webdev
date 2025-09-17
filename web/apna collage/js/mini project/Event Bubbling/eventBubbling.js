let div = document.querySelector(".div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");


// stopPropagation() = stops bubbling up;

div.addEventListener("click", (e)=>{
  e.stopPropagation();
  console.log("div is clicked");
});

ul.addEventListener("click", (e)=>{
  e.stopPropagation();
  console.log("ul is clicked");
});

li.addEventListener("click", (e)=>{
  e.stopPropagation();
  console.log("li is clicked");
});
