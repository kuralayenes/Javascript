let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardRow;


// Child Nodes - With text

value = todoList.childNodes;
value = todoList.childNodes[0];


// Children - Element

value = todoList.children;
value = todoList.children[0];
value = todoList.children[2].textContent =" Changed";



value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent = "Changed 2";


value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;


value = cardRow;
value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;


// 

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;




value = todo;
console.log(value);