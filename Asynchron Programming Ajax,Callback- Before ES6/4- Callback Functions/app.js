// Callback

// document.getElementById("btn").addEventListener("click",function(){

// })

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();
//     },3000)
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000)
    
// }
// process1(process2);

// console.log("Naber");


const langs = ["Python","JAVA","C++"]

function addLang(lang,callback){
    setTimeout(() => {
        langs.push(lang)
        console.log("added")
        callback();
    }, 2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang)
        });
    },1000)
}

addLang("JavaScript",getAllLangs);
