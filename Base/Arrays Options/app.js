let value;


const numbers = [43,56,33,23,44,35,5];

const langs = ["Python","Java","C++","Javascript"];

const mix = ["Hello", 22,null,undefined,3.14];


// Array Length
value = numbers.length;


// Index

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];

// Change Index

numbers[2] = 1000;

// Index Of

value = numbers.indexOf(1000);

// Push Array

numbers.push(2000);

// unshift

numbers.unshift(3000);

// Pop

numbers.pop();

// Shift

numbers.shift();

//  Splice

numbers.splice(0,3);

// Reverse

numbers.reverse();

// Sort

numbers.sort(); // First Number Sorting


numbers.sort(
    function(x,y){
        return x-y;
    }
)

numbers.sort(
    function(x,y){
        return y-x;
    }
)

value = numbers;
console.log(value);