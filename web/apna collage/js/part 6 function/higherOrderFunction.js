let greet = function(){
    console.log("hello");
}

function multipleGreet(func, n){
    for(let i=1 ; i<=n ; i++){
        
        console.log(func() , i);
    }
}

multipleGreet(greet,5);