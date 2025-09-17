let input = document.createElement("input");
let button = document.createElement("button");

let body = document.querySelector("body");
body.append(input, button);

button.innerText = "Click me";

// q2

input.placeholder = "username";

button.id = "btn";


//q3

let btn = document.querySelector("#btn");

btn.style.backgroundColor = "blue";
btn.style.color = "white";

//q4

let h1 = document.createElement("h1");
body.prepend(h1);

h1.innerText = "DOM Practice";

h1.style.textDecoration = "2px solid underline";
h1.style.color = "purple";

// q5

let p = document.createElement("p");

body.append(p);

p.innerHTML = "Apna Collage <b>Delta</b> Practice";
