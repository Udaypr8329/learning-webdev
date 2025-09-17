let arr = [];


while(true){
    let a = Number(prompt("Choose your option(1,2,3 & 4):-\n1. list :- to show all todos\n2. add :- to add a todo\n3. delete :- to delete a task\n4. quit - to exit the todo"));
switch (a){
    case 1:
        
        if(arr.length == 0){
            console.log("list is empty. \n");
        }else{
        console.log("list:-\n\n---------")
        for(let i=0; i<arr.length;i++){
            console.log((i+1),". ",arr[i]);
        }
        console.log("\n----------\n\n");
    }
    break;
    
    case 2:
        let e = prompt("Enter the data to todo list :- ");
        arr.push(e);
        console.log(e," added to the todo list.");
    break;

    case 3:
        let ind = Number(prompt("enter the number of item you want to delete."));
        if(ind>0 && ind<=arr.length){
        let f =arr.splice((ind-1),1);
        console.log(f," deleted by the todo list.");
        }else{
            console.log("invalid input");
        }
    break;

    case 4:
        console.log("thank you ! come again.\n todo list exited.");
        break;

    default:
        console.log("invalid input");
        break;
    }
    if (a===4){
        break;
    }
}
