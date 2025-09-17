function oddEvenTest(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!( n%2 == 0 ));
        }
        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0 );
        }
        return even;
    }
}

let fun = oddEvenTest("even");

fun(4);fun(5);