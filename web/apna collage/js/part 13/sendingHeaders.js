let url = "https:icanhazdadjoke.com";

async function getJokes(){
    try{
        let config = {header : {Accept : "application/json"}};
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data);
    }catch(e){
        console.log("error : ",e);
        
    }
}