let arr = [1,2,20,3,4,5];

//1. el = arr[0];
// acc=1;
// acc = acc*el; = 1

// 2. el = arr[1]; = 2
//acc=1;
//acc = acc*el; = 1*2 =2

//3. el = arr[2]; = 3
//acc = 2;
// acc = 2*3 = 5;

//4. el = arr[3]; = 4
//acc = 5;
// acc = 5*4 = 20;

//5. el = arr[4]; = 5
//acc = 20;
// acc = 20*5 = 120;

let a = arr.reduce((acc,el)=>{
    return acc*el;
});

console.log(a);




let max =arr.reduce((acc, el)=>{
    if(acc<el){
        return el;
    }else{
        return acc;
    }
});

console.log(max);