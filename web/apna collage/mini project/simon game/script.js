let gameseq = [];
let userseq = [];

let body = document.querySelector("body");
let h2 = document.querySelector("#h2-level");
let box = document.querySelectorAll(".box");

let btns = ["red","blue","lightgreen","lightsalmon"];

let started = false;
let level = 0;
let b = 0;

let result = document.createElement("h1");
body.append(result);
result.classList.add("result");

document.addEventListener("keypress", ()=>{
  if(started == false){
  console.log("game started");
  started = true;

  levelup();
  }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },200);
}

let levelup=()=>{
  userseq =[];
  level++;
  h2.innerText = `Level ${level}`;

  let randowIndex = Math.floor(Math.random()*btns.length);
  let randColor = btns[randowIndex];
  let randBtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  btnFlash(randBtn);
  console.log(gameseq);
}

function check(i){
  if(userseq[i]=== gameseq[i]){
    if(userseq.length == gameseq.length){
      setTimeout(levelup,1000);    
    }
  }else{
    
    h2.innerHTML = `Game Over! At Level<b> ${level}</b>.<br> Press any to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor = "white";
    },350);
    
    if(b<=level){
    b = level;
    result.innerHTML =  `Best score ${b}.`;
    }
    reset();
  }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);
}

for(btn of box){
  btn.addEventListener("click",btnPress);
}

function reset(){
  gameseq = [];
  userseq = [];
  started = false;
  level = 0;
}