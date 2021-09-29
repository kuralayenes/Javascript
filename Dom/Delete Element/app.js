// Dynamic Delete Element


const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove

// todos[1].remove();

// Remove Child


// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);



console.log(todoList);
console.log(todos);