let btn = document.querySelector(".btn1");

let p = document.querySelector("p");

let h1 = document.querySelector("h1");

let div = document.querySelector("div");

function call(){
  console.dir(this);
  console.log(this.style.backgroundColor = "lightblue");
}

btn.addEventListener("dblclick", call);
h1.addEventListener("click", call);
p.addEventListener("click", call);
div.addEventListener("click", call);

