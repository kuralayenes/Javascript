// Ajax, Callback

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // Get Request

    get(url,callback){

        this.xhr.open("GET",url);
        // const temp = this;
        this.xhr.onload = function(){
            if(this.status ===200){
                // console.log(this.responseText); //
                callback(null,this.responseText)
            }
            else{
                // Error
                callback("Errors",null);
            }
        }
        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json") // json data

        this.xhr.onload = () =>{
            b  
        }


    }
}

const request = new Request();

// const albums = request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Success
//         console.log(response);
//     }
//     else{
//         console.log(err)
//     }
// })

// const albums = request.get("https://jsonplaceholder.typicode.com/albums/50",function(err,response){
//     if(err === null){
//         // Success
//         console.log(response);
//     }
//     else{
//         console.log(err)
//     }
// })


