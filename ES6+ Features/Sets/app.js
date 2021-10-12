// Sets

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Enes");
myset.add(true);
myset.add([1,2,3,4]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Enes"])


console.log(myset)
console.log(myset2)

// Size

console.log(myset.size);

// Delete Methodu
// myset.delete("Enes")
console.log(myset)


// Has Method

console.log( myset.has("Enes")); // True or False
console.log( myset.has("3.14"))
console.log( myset.has([1,2,3,4]))

// For Each

myset.forEach(function(value){
    console.log(value)
})


// For of

for ( let value of myset){
    console.log(value);
}


// Sets to Array

const array = Array.from(myset);

console.log(array)