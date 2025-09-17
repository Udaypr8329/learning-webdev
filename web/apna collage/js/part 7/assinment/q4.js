let len = 4;

function callback(){
    console.log(this.len);
}

const obj = {
    len : 5,
    method(callback){
        callback();
    },
};

obj.method(callback,1,2);