let newp = document.createElement("p");

let a = document.querySelector(".box");

newp.innerText = "fgdfhbdhdghd";
a.append(newp);

newp.append(" this is new text");

let but = document.createElement("button");

but.innerText = "click me";

let b = document.querySelector("a");
// a.prepend(but);

// b.insertAdjacentElement("beforebegin" , but);
// b.insertAdjacentElement("afterbegin" , but);
// b.insertAdjacentElement("afterend" , but);
b.insertAdjacentElement("beforeend" , but);