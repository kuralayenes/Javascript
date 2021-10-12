// Maps : Key() - Value()
// let myMap = new Map(); // CREATE MAP

// console.log(typeof myMap)
// console.log(myMap)


//  const key1 = "Enes";
//  const key2 = {a:10,b:20};
//  const key3 = () => 2;

// set 

//  myMap.set(key1, "String Değer");
//  myMap.set(key2, "Object Literal Value");
//  myMap.set(key3, "Function");


// // Get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));

// console.log(myMap)

///////

// console.log(myMap.size);


///////////////// 

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Istanbul",15);
// cities.set("Izmir",4);

// foreach
// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// for of 

// for ( let [key,value] of cities){ // Destructing
//     console.log(key,value);
// }

// Map Keys

// for( let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for( let value of cities.values()){
//     console.log(value);
// }

// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap)

// Maps to Array

const cities2 = new Map();
cities2.set("Ankara",5);
cities2.set("Istanbul",15);
cities2.set("Izmir",4);

// [["Ankara",5],["Istanbul",15],["Izmir",4]]
const array = Array.from(cities2)

console.log(array)