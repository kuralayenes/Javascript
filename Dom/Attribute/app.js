const todoInput = document.getElementById("todo");
let element;



element = todoInput;
element = todoInput.classList;

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("newClass2");

element.todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Hello");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

element = todoInput;
element = todoInput.hasAttribute("name");
element = todoInput.hasAttribute("required");

console.log(element)