let names = ["uday","raj","yuvraj","anuraj", "rajan","abc","xyz"];

let [first,second,third]=names;

console.log(first,second,third);

let [first1,second1,third1]=["yuvraj","anuraj", "rajan"];

console.log(first1,second1,third1);

let [first2,second2,third2,...others] = names;

console.log(first2,second2,third2,...others);


//object

const stu ={
  name:"uday",
  age:20,
  class:"3year CSE",
  subject: ["hindi","english","science"],
  username: "uday@1234",
  password:"abcffse"
};

let {username,password} = stu;

console.log(username,password);

let {username: user,password : pass} = stu;

console.log(user,pass);

let {username1,password2 , city="gorakhpur"} = stu;

console.log(username1,password2,city);