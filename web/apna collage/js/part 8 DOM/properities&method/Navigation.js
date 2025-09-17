let a = document.querySelector(".boxLink");

console.dir(a.parentElement);
console.dir(a.parentElement.parentElement);
console.dir(a.parentElement.parentElement.parentElement);

let b = document.querySelector(".box");

console.dir(b.children);

console.dir(b.children[1]);

console.dir(b.previousElementSibling);

console.dir(b.nextElementSibling)