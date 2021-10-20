const person = {
    age:25,
    tellAge : function(){

        //this -Person
        console.log(this)
        console.log(this.age)
    }.bind(this)
,
    tellAgeArrow : () =>{
        console.log(this);
        console.log(this.age);
        
    }
    // this -window 
 
}

person.tellAge()
person.tellAgeArrow()