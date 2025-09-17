const obj = {
    mess : "hello world",

    logMessage(){
        console.log(this);
    }
};
obj.logMessage();
setTimeout(()=>{console.log(obj.mess);}, 1000);