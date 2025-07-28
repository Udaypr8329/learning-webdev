let arr=[250,645,300,900,50];
console.log("Prices : "+arr);
let discountedArr= [];
let discount = 10/100;
let i=0;
for (let e of arr) {
     arr[i] = e - (e*discount);
     i++;
}


console.log("Final price : "+ arr);