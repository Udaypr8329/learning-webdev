function largestContry(arr){
    let Maxstr ="";

    for (const e of arr) {
        if(Maxstr.length <e.length){
            Maxstr = e;
        }
    }

    console.log(Maxstr);
}

let CountryList =["India", "United States", "Nepal"];
largestContry(CountryList);