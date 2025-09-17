function unique(str){
    let str1 ="";

    for (let e=0 ; e<str.length ; e++) {
        let found = false;
        for(let f=0 ; f<str1.length ; f++){ 
            if(str1[f] == str[e]){
                found = true;
                break;
            }
        }
        
        if(found === false){
            str1 += str[e];
        }    
    }

    console.log(str1);
}

unique("rueruglegl");