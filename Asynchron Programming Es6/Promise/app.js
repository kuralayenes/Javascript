
// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Pls. Entry String value"))
//             }

//         })
//     },1000);
// }
// getData(1)
// .then(response => { console.log(response);})
// .catch(err => console.error(err))



function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if (typeof number === "number") {
                resolve(number+2)
            }
            else{
                reject(new Error("Pls enter the number"))
            }
        },2000)
    });
}


addTwo(10)
.then(response =>{
    console.log(response);
    return response+2
})
.then(response2=>console.log(response2))
.catch(err => console.error(err)); // You must just 1 use the "catch"