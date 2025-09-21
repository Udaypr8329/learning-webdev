let inp = document.querySelector("#input");
let btn = document.querySelector("#btn3"); 
let ul = document.querySelector("#list");

btn.addEventListener("click",async () => {
    let country = inp.value;
    let collage = await giveUpdate(country);
    console.log(collage);
    show(collage);
})

let show = (arr)=>{
    for(a of arr){
        let li = document.createElement("li");
        li.innerText = "";
        li.style="margin-top: 10px;";
        li.innerHTML = `<b>Name : </b>${a.name} <br> <b>State-province : </b>${a["state-province"] ?? "N/A"}`;
        ul.append(li);
    }
}

let url = "http://universities.hipolabs.com/search?name=";

async function giveUpdate(country){
    try{
        let res = await axios.get(url+country);
        return res.data;

        // console.log(res.data);
    }catch(e){
        console.log("error : ",e);
        return [];
    }
}