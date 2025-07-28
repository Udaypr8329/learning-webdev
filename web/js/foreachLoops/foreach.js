let arr = [1,2,3,4,5,6,7,8,9,10,11];

arr.forEach((val) => {
    console.log(val**2);
})

//second method

let Square = (val)=>console.log(val**2);

arr.forEach(Square);