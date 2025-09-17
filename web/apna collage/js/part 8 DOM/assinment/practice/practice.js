let cont = document.createElement("div");
let body = document.querySelector("body");
cont.classList.add("Container");
body.append(cont);

let a = document.querySelector(".Container");
let p = document.createElement("p");
p.classList.add("para");
p.innerText = "Hey I'm red!";
a.append(p);
let para = document.querySelector(".para");
para.style.color = "red";

let h3 = document.createElement("h3");
a.append(h3);
h3.classList.add("heading");
let heading = document.querySelector(".heading");
heading.innerText = "I'm a blue h3!";
heading.style.color = "blue";

let div = document.createElement("div");
a.append(div);
div.classList.add("border");
let border = document.querySelector(".border");
border.style.border = "3px solid black";
border.style.backgroundColor = "pink";

let h1 = document.createElement("h1");
border.append(h1);
h1.classList.add("heading1");
let heading1 = document.querySelector(".heading1");
heading1.innerText = "I'm in a div";

let p1 = document.createElement("p");
border.append(p1);
p1.classList.add("para1");
let para1 = document.querySelector(".para1");
para1.innerText = "ME TOO!";

