let btn = document.querySelectorAll("button");

function click(){
  console.log("mouse pointer is entered in the button");
}

for( e of btn){
  e.onmouseenter = click;
}