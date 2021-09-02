// == 
// ===
// !=
// !==
// >
// <
// >==
// <==


console.log(2 == 2);
console.log("js" == "Java")
console.log(2 == "2");
console.log(2 === "2");
console.log(4 > 2);
console.log(2 > 2);
console.log(2 != 3);
console.log(2 < 3);
console.log(4 < 2);
console.log(2 <= 2);
console.log(3 >= 3);


// Not Operator

console.log( !( 2==2 ) );


// And Operator

console.log( (2 == 2) && ("Test" == "Test") );
console.log( (2 == 2) && ("Test" == "Test1") );

// Or Operator

console.log( (4 == 3) || ("Test" == "Test"));
console.log( (4 == 3) || ("Test" == "Test1"));


const error = false;

if ( error == true ){
    
    console.log("Error Block")

}
else{
    console.log("Success Block")
}

const user = "mmc";

if ( user === "mtc"){
    console.log("Succesful")
}
else{
    console.log("Error")
}

const process = "4";

if (process === "1"){
    console.log("First process");
}
else if (process == "2"){
    console.log("Second Process");
}
else if (process == "3"){
    console.log("Third Process");
}
else{
    console.log("Not Process");
}


const number = 1000;

if (number == 100){
    console.log("Number Equal 100")
}
else{
    console.log("Number not Equal 100")
}

// Ternary Operator


console.log(number === 100 ? "Number equal 100" : "Number Not equal 100")  // İmportant Use
