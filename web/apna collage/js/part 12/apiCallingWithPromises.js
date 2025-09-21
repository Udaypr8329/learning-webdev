let url = "https://catfact.ninja/fact";

fetch(url)
.then((Res)=>{
    console.log(Res);
    // console.log(Res.json());
    return Res.json();
})
.then((data)=>{
    console.log(data);
    console.log("fact : ",data.fact);
    console.log('length : ',data.length);
    return fetch(url);
})
.then((resp)=>{
    return resp.json();
})
.then((data2)=>{
    console.log(data2);
    console.log("fact2 : ",data2.fact);
    console.log('length2 : ',data2.length);
})
.catch((err)=>{
    console.log("Error - ",err);
})

console.log('i am happy');
