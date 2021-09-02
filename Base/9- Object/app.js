
let value;

const programmer = {
    name : "Enes Kuralay",
    age : "25",
    email : "kuralayenes@gmail.com",
    langs : ["Python","C#","Js"],

    address : {
        city : "Bursa",
        street : "Nilüfer"
    },

    work : function() {
        console.log("Programmer is working..");
    }
}

value = programmer;

value = programmer.email;
value = programmer["email"];


value = programmer.langs;
value = programmer.address.city;

value = programmer.work();



const programmers = [

    {
        name: "Enes",
        age : 25
    },
    {
        name : "Peter",
        age : 32
    }
];

value = programmers[0].name;
value = programmers[1].name;
value = programmers[0].age;
value = programmers[1].age;


console.log(value)