// Call Apply Bind

const obj1 = {
    number1:10,
    number2:20
}

const obj2 = {
    number1:30,
    number2:40
}

function addNumbers(number3, number4){
    // console.log(this);
    // console.log(this.number1);
    console.log( this.number1 + this.number2 + number3 + number4);
}

// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);

// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);

// Bind

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}


const totals = getNumbersTotal.bind(obj1);
const totals2 = getNumbersTotal.bind(obj1);


// console.dir(totals);
// console.dir(totals2);

console.log(totals(100,200))