function largestArray (arr,n){
    let newarr = []; 
    for (let e of arr) {
        if(e>n){
            newarr.push(e); 
        }else{
            continue;
        }
    }
    return newarr;
}

let arr =[24,4,5,2,4,7,84,423,6];

let newarr = largestArray(arr, 5);

console.log(arr);

console.log(newarr);