// Local Storage

// SetItem

// localStorage.setItem("M1","Burpee")
// localStorage.setItem("Repeat","50")

// Get Item (Local Storage just save the string  )

// const value = localStorage.getItem("Repeat");
// console.log(value);
// console.log(typeof value);


// Clear Local Storage


// localStorage.clear();

// localStorage.setItem("M1","Burpee")
// localStorage.setItem("Repeat","50")

// console.log(localStorage.getItem("sport"))

// if (localStorage.getItem("sport") === null){
//     console.log("Value Not found")
// }


// Local Storage with array

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos",todos);

// console.log(typeof localStorage.getItem("todos")) // This is a string

// localStorage.setItem("todos", JSON.stringify(todos)); // This is a Array


// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value)
// console.log(typeof value)


// TODO EXAM

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit",addTodo);

function addTodo(e){

    const val = todoInput.value;

    let todos;

    if(localStorage.getItem("todos")== null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(val);

    localStorage.setItem("todos", JSON.stringify(todos));



    e.preventDefault();
}