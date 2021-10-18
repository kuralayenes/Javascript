// Inheritance 

class Person{ // Superclass - BaseClass
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    showInfos(){
        console.log("Name: "+this.name+" Age: "+this.age)
    }
}

class Employee extends Person{ // Derived - Subclass - ChildClass
    constructor(name,age,salary){
        // this.name = name,
        // this.age = age,
        super(name,age);
        // super.showInfos();
        this.salary = salary
    }
    showInfos(){
        console.log("Name: "+this.name+" Age: "+this.age+" Salary: "+this.salary);
    }
}

const emp = new Employee("Mustafa",25,3000);
console.log(emp)
emp.showInfos()

