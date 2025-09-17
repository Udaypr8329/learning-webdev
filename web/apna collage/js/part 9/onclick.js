let btn = document.querySelectorAll("button");

// btn.onclick = ()=>{
//   console.log("btn was clicked");
//   alert("btn was clicked");
// }

function click(){
  console.log("btn was clicked 2");
}

// btn.onclick = click;

for( e of btn){
  e.onclick = click;
}