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
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("POST Errorrrrrr",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json") // json data

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("PUT Errorrrrrr",null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }

    delete(url,callback){

        this.xhr.open("DELETE",url);
        // const temp = this;
        this.xhr.onload = function(){
            if(this.status ===200){
                // console.log(this.responseText); //
                callback(null,"Data Deleted")
            }
            else{
                // Error
                callback("Delete Errors",null);
            }
        }
        this.xhr.send();
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



// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })


// request.post("https://jsonplaceholder.typicode.com/albums123123123123123123",{userId:2,title:"Thriller"},function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })



// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:1234123,title:"Tylor Durden"},function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         console.log(err)
//     }
// })




// const albums = request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
//     if(err === null){
//         // Success
//         console.log(response);
//     }
//     else{
//         console.log(err)
//     }
// })



const albums = request.delete("https://jsonplaceholder.typicode.com/albums/1123123asd0",function(err,response){
    if(err === null){
        // Success
        console.log(response);
    }
    else{
        console.log(err)
    }
})
