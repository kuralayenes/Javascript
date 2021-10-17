// console.log(this); // Global Scope

// const emp1 = {
//     name:"Enes",
//     age: 24,
//     showInfos:function(){console.log("Show info")}
// }
// const emp2 = {
//     name:"Mustafa",
//     age: 25
// }
// emp1.salary = 4000;
// console.log(emp1)
// console.log(emp2)


// Constructor

function Employee(name,age,salary){ 
    this.name = name,
    this.age = age,
    this.salary = salary

    // console.log(this)

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary)
    }
    
    this.showInfos()
}

const emp1 = new Employee("Enes",25,4000);
const emp2 = new Employee("Jacop",22,300);



