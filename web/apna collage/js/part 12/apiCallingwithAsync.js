let url = "https://catfact.ninja/fact";

async function getFacts() {
try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data);
    console.log("fact : ",data.fact);
    console.log('length : ',data.length);

    let res2 = await fetch(url);
    let data2 = await res.json();
    console.log(res2);
    console.log(data2);
    console.log("fact2 : ",data2.fact);
    console.log('length2 : ',data2.length);
}
catch(err){
    console.log('error : ',err);   
}
}

getFacts();