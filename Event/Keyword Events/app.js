// Keywords Events

// Keypress

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
}

// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Naber");
// }


// Keydown

// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Naber");
// }

// Keyup

// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
//     // console.log("Naber");
// }