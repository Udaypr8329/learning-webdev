let body = document.querySelector("body");

body.addEventListener("keydown",(e)=>{
    let h3 = document.querySelector("h3");
    let key,keycode,value;
    if(e.key===" "){
        key = "space";
        keycode = e.keyCode;
        value = e.code;
    }else{
        key = e.key;
        keycode = e.keyCode;
        value = e.code;
    }
        
    h3.innerHTML = `<table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>${key}</td>
            <td>${keycode}</td>
            <td>${value}</td>
        </tr>
    </table>`
});