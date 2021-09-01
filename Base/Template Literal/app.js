const name = "Enes Kuralay";
const department = "Software";
const salary = "3200";

const a = "İsim: " + name + "\nDepartman: " + department + "\nSalary: " + salary;

const b = `İsim:${name}\nDepartment:${department}\nSalary:${salary}`


const html = "<ul>" + 
            "<li>" + name + "</li>"+
            "<li>" + department + "</li>"+
            "<li>" + salary + "</li>"+
            "</ul>";

function afk (){
    return "merhaba";
};
const html1 = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${afk()} </li>
                <li>${4 * 12} </li>
                </ul>

`
// document.body.innerHTML = html;
document.body.innerHTML = html1;

console.log(a);
console.log(b);