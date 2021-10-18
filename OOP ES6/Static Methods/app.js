// Static Methods

class Maths {
    sqrt(x){
        console.log(x*x)
    }
    static cube(x){
        console.log(x*x*x)
    }
}

// Before Static

// const math = new Maths();
// math.cube(3);
// console.log(math);

// After Static

// Maths.cube(3)


// const mat1 = new Maths(); 
// mat1.sqrt(4)