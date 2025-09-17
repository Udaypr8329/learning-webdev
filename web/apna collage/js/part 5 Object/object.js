let stu = {
    name : "uday",
    class : "3year",
    branch : "Cse",
}

//Read
console.log(stu);

console.log(stu["name"]);
console.log(stu.name);

//Update
console.log(stu.name = "yuvraj");

//Add
console.log(stu.grade = "8.0 cgpa");

//Delete
delete stu.branch;

