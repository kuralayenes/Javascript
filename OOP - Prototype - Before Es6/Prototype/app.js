// Prototype

// const object = new Object();
// const object2 = new Object();
// object.name = "Enes";
// console.log(Object);

// function Employee(name,age){
//     this.name = name;
//     this.age = age,
//     this.showInfos = function(){
//         console.log("Show info..")
//     }
// }

// const emp1 = new Employee("Enes",25);
// console.log(emp1)


// console.log(emp1.toString());

////////////////////////

function Employee(name,age){
    this.name = name;
    this.age = age
    
}

Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " " + "Age: " + this.age);
}

const emp1 = new Employee("Enes",25);
const emp2 = new Employee("Thomas",23);

emp2.showInfos();

console.log(emp1)