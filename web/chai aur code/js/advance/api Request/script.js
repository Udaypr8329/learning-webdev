let body = document.querySelector("body");
let div = document.createElement('div');
let img = document.createElement('img');
let h2 = document.createElement('h2');
let h21 = document.createElement('h2');
let p = document.createElement('p');
let h23 = document.createElement("h2");

div.className = "Container";

body.appendChild(div);
div.append(img,h2,h23,h21,p);

body.style.position = "absolute";
body.style.top = "100px";
body.style.left = "100px";


div.style.width = "350px";
div.style.height = "700px";
div.style.paddingRight ="";
div.style.backgroundColor = "grey";
div.style.border = "5px solid";
div.style.borderRadius = "15px";


img.src = "https://avatars.githubusercontent.com/u/11613311?v=4";
img.style.width="300px";
img.style.position = 'absolute';
img.style.top = "30px";
img.style.left = "25px";
img.style.border = "2px solid";
img.style.borderRadius = "15px";


h2.style.position = "absolute";
h2.style.top = "350px";
h2.style.left = "35px";


h23.style.position = "absolute";
h23.style.top = "400px";
h23.style.left = "35px";


h21.style.position = "absolute";
h21.style.top = "450px";
h21.style.left = "35px";


p.style.width = "280px"
p.style.fontSize = "25px"
p.style.position = "absolute";
p.style.top = "490px";
p.style.left = "35px";

let data;

let url = 'https://api.github.com/users/hiteshchoudhary';
let xml = new XMLHttpRequest();
xml.open('GET',url);
xml.onreadystatechange = function(){
    console.log(xml.readyState);
    if(xml.readyState === 4){
        data = JSON.parse(this.responseText);
        console.log(data.followers);

        h2.innerText = `NAME : ${data.name}`;
        h23.innerText = `ID : ${data.id}`
        h21.innerText =`Followers : ${data.followers}`;
        p.innerHTML =`<b>About :</b> ${data.bio}`;
        
    }    
}
xml.send();



