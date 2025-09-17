let c =0;


let id = setInterval(() => {
        console.log("hello world");
        c++;
        if(c===5){
            clearInterval(id);
        }
    },2000)    
