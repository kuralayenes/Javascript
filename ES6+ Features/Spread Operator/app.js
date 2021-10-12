// Spread Operator


// const langs = ["Python","C++","Java","Php"]


// console.log(langs[0],langs[1],langs[2]);

// console.log(...langs);

// const langs2 = ["Javascript","C#",langs[1],langs[2]]

// console.log(langs2)

// const langs3 = ["Javascript",...langs2]

// console.log(langs3)


const numbers = [1,2,3,4,5,6,7,8,9];


const [a,b,...numbers2] = numbers;

console.log(a,b,numbers2)