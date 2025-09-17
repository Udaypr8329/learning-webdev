let btns = document.querySelectorAll("button");

let button = ()=>{
  console.dir("button was click");
};

btns.forEach(e => {
  e.addEventListener("click",button);
});
  