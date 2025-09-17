let inp = document.querySelector("#items");
let btn = document.querySelector("#submit");
let ol = document.querySelector("ol");

let btn1 = document.querySelector(".delete");

function call(){
  let li = document.createElement("li");
  let del = document.createElement("button");

  li.innerText = inp.value;
  del.innerText="delete";
  del.classList.add("delete");
  del.addEventListener("click",()=>{
    li.remove();
  })

  li.appendChild(del);
  ol.appendChild(li);
  
  inp.value = "";
}

inp.addEventListener("keydown", (e)=>{
  if(e.key == "Enter"){
    call();
  }
});

btn.addEventListener("click", ()=>{call();});

btn1.addEventListener("click", ()=>{
  btn1.parentElement.remove();
});
