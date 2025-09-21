let btn = document.querySelector("#cat");
let p = document.querySelector("#fact");

btn.addEventListener("click",async ()=>{
    console.log("button was clicked");
    let fact = await getFacts();
    p.innerText = fact;
})

let btn1 = document.querySelector("#dog");
let img = document.querySelector("#img");


btn1.addEventListener("click",async ()=>{
    console.log("button was clicked");
    let message = await getFactsDog();
    img.src = message;
})

let url = "https://catfact.ninja/fact";
let url1 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch (e) {
        console.log("error : ", e);
        return "No fact found";
    }
}

async function getFactsDog() {
    try {
        let res = await axios.get(url1);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.message);
        return res.data.message;
    } catch (e) {
        console.log("error : ", e);
        return "No image found";
    }
}

// getFacts();