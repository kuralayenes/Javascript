// Class

// Before es6
// function Employee(name,age,salary){
//     this.name = name;
//     this.age= age;
//     this.salary = salary;
// }

// Employee.prototype.ShowInfos = function(){
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary)
// }

// const emp = new Employee("Enes",25,4000);

// console.log(emp);


// After es6
class Employee{
    constructor(name,age,salary){
        this.name = name,
        this.age = age,
        this.salary = salary
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary)
    }
}

const emp1 = new Employee("Enes",25,300)
emp1.showInfos()
console.log(emp1)