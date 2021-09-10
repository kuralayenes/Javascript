function hello(name = "No İnformation",age = "No İnformation"){

    // if (typeof name === "undefined") name ="No information"
    // if (typeof age === "undefined") age ="No information"

    console.log(`Name ${name} Age: ${age}`);
}

hello("Enes Kuralay",26);  // Function Call
hello();
hello("Enes");



function square(x){

    // console.log(x*x);
    return x*x
}

function cube(x){
    // console.log(x*x*x);
    return x*x*x;
}

let a = square(12);

a = cube(a); // Nan -  Please use return

let b = cube(square(12));

console.log(a);
console.log(b);


// Function Expression

// const heello = function(){
//     console.log("Hello")
// }


// Immediately Invoked Function Expression (IIFE)


(function(names){
    console.log("hello: " + names);
})("Enes");



// 

const database = {
    host: "localhost",
    add: function(){
        console.log("Added");
    },
    get: function(){
        console.log("Got");
    },
    update: function(id){
        console.log(`Id: ${id} Updated`);
    },
    delete: function(id){
        console.log(`Id: ${id} Deleted`)
    }
}


console.log(database.host);
database.add();
database.get();
database.update(12123123);
database.delete(1123123122);