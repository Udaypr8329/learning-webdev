let arr = [111,223,210,113,43,45];

let min = arr.reduce((acc,el)=>{
    if(acc>el){
        return el;
    }else{
        return acc;
    }
});

console.log(min);