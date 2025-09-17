let avg = (arr) =>{
    let sum = 0;
    let c = 0;
    for (const e of arr) {
        sum +=e;
        c++;
    }
    return sum/c;
}

console.log(avg([2,3,4,5]));
