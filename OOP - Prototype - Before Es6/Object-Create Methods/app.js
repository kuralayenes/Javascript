// const obj = {
//     test1:function(){
//         console.log("Test 1")
//     },
//     test2:function(){
//         console.log("Test 2")
//     }
// };

// console.log(obj)

// const emp = Object.create(obj);

// console.log(emp)

function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test 1")
}

Person.prototype.test2 = function(){
    console.log("Test 2")
}

function Employee(name,age){
    this.name = name;
    this.age = age
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("My test")
}
const emp1  = new Employee("enes",25);


console.log(emp1)
console.log(emp1.test1())
console.log(Person)