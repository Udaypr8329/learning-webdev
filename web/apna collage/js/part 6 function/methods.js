// let calculator = {
//     add: function(a,b){
//         return a+b;
//     },

//     sub: function(a,b){
//         return a-b;
//     },

//     mul: function(a,b){
//         return a*b;
//     }
    
// }

//shorthand

let calculator = {
    add(a,b){
        return a+b;
    },

    sub(a,b){
        return a-b;
    },

    mul(a,b){
        return a*b;
    }
    
}

let a=calculator.add(5,6);
console.log(a);

