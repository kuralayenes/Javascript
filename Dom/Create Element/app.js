// Dynamic Elements


newElement = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newElement.id = "clear-todos";
newElement.className = "btn btn-danger";
newElement.href = "https://www.google.com.tr";
newElement.target = "_blank";

newElement.appendChild(document.createTextNode("Google"));


//Text Content
// newElement.textContent = "Google"

// Text Node


// const text = document.createTextNode("Hello");


cardBody.appendChild(newElement);



console.log(newElement);