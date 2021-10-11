// Session Storage - Key and Value 

// Select Buttons

const addBtn = document.querySelector("#add")
const dellBtn = document.querySelector("#delete")
const clearBtn = document.querySelector("#clear")


// Select Inputs

const addkey = document.querySelector("#addkey")
const addvalue = document.querySelector("#addvalue")
const deleteKey = document.querySelector("#deletekey")



//

addBtn.addEventListener("click",addItem);
dellBtn.addEventListener("click",deleteItem);
clearBtn.addEventListener("click",clearItem);


function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}


function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value)
}


function clearItem(e){
    sessionStorage.clear();
}

console.log(sessionStorage)

