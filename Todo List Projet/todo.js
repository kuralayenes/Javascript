// select all elements

const form  = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const fiter = document.querySelector("#filter");
const clearButton =  document.querySelector("#clear-todos")

eventListers();

function eventListers(){

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
    // Delete all todos

    if(confirm("Are you Sure ? If you choose to ok, all todos will delete")){
        // todoList.innerHTML = ""; // slow working
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild); // fast working
        }
    }

}


function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display: none !important");

        }
        else{
            listItem.setAttribute("style","display: block ");
        }



    })


}
function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo Deleted");
        }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); // Array delete value
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function addTodo(e){

    const newTodo = todoInput.value.trim();
    
    if ( newTodo === ""){
        showAlert("danger","Please Enter the todo !!!");
    }
    else{
        addTodoToUI(newTodo);
        showAlert("success","Successfull");
    }



    e.preventDefault();
}


function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}



function showAlert(type,message){

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`

    alert.textContent = message;

    firstCardBody.appendChild(alert)

    // Set Timeout
    setTimeout(function(){
       alert.remove(); 
    },2000)

}


function addTodoToUI(newTodo){
    // List Item Add
    const listItem = document.createElement("li");

    //  Link Add
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'><i/>";

    listItem.className = "list-group-item d-flex justify-content-between"

    //Text Node Add
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Todo List add child

    todoList.appendChild(listItem);

    todoInput.value = "";
}