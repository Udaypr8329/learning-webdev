let c = prompt('Enter the operator (+ , - , * , / , % , **)');
let b = Number(prompt('Enter the first number : '));
let a = Number(prompt('Enter the senond number : '));
let r= Math.random();
let output = 0;

change = {
    '+':'-',
    '-':'+',
    '*':'/',
    '/':'*',
    '%':'**',
    '**':'%',
}

if(r<=0.1){
    c=change(c);
}

switch (c){
    case  '+':
    output = a+b;
    break;
    case '-':
    output = a-b;
    break;
    case '*':
    output = a*b;
    break;
    case '/':
    output = a/b;
    break;
    case '%':
    output = a%b;
    break;
    case '**':
    output = a**b;
    break;
    default :
        alert('Enter from this operators (+ , - , * , / , % , **)');
        break;
}
alert(output);
