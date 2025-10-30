let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let StopChange;

let randomCode = ()=>{
    let hex = "0123456789ABCDEF";
    let code ="";
    for(let a = 1 ; a<=6 ; a++){
        code += hex[Math.floor(Math.random() * 16)];
    }
    return code;
}
let changeColor = ()=>{
    document.body.style.backgroundColor = `#${randomCode()}`
}

startbtn.addEventListener("click",()=>{
    console.log("event started");
    StopChange = setInterval(changeColor,50);
});

stopbtn.addEventListener("click",()=>{
    console.log("color changing stoped");
    clearInterval(StopChange);
})