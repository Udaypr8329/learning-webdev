const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"))

app.get("/",(request,response)=>{
    response.render("home.ejs");
    // response.send("hello world");

})

app.get("/ig/:username",(req,res)=>{
    let followers = ["Uday", "Aarav", "Priya", "Neha", "Rohan"]
    let {username} = req.params;
    res.render("instagram.ejs",{username , followers});
})

app.get("/diceroll",(request,response)=>{
    let value = Math.floor(Math.random()*6+1);
    response.render("diceRoll.ejs",{value});
})

app.get("/hello",(request,response)=>{
    response.send("hello world");

})

app.listen(port,()=>{
    console.log("listening on port : ",port);
    
})