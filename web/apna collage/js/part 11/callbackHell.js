h1 = document.querySelector("h1");

// setTimeout(()=>{
//   h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//   h1.style.color = "blue";
// },2000);

// setTimeout(()=>{
//   h1.style.color = "green";
// },3000);

// more better

// function changeColor(color,delay){
//   setTimeout(()=>{
//     h1.style.color = color;
//   },delay);
// }

// changeColor("red",1000);
// changeColor("blue",2000);
// changeColor("green",3000);

// callBack hell

function changeColor(color,delay,nextColorChange){
  setTimeout(()=>{
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
  },delay);
}

changeColor("red",1000,()=>{
  changeColor("blue",1000,()=>{
      changeColor("green",1000,()=>{
          changeColor("yellow",1000,()=>{
              changeColor("grey",1000);
          });
      });
  });
});

