let s = String(prompt("Enter a string to check golden or not"));
if(s[0]=== "A" || s[0]=== "a" && s.length>5){
    console.log("golden String.");
}else{
    console.log("not golden String.")
}