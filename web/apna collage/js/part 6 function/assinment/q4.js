function vowelCount(str){
    let arr = ["a","e","i","o","u"];
    let count = 0;
    for (const e of str.toLowerCase()) {
        if(arr.includes(e)){
            count++;
        }
    }
    console.log(count);
}

vowelCount("wieorwieo")