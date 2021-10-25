// async function getCurrency(url){
//     const response = await fetch(url); // response Object

//     const data = await response.json(); // Json object

//     return data;
// }

// getCurrency("https://api.exchangeratesapi.io/latest")
// .then(response => console.log(response))

class Request{
    async get(url){ //Get Request 
        const response = await fetch(url); // Response Object
        const data = await response.json() // Json object
        return data;
    }
    async post(url,data){
        const response = await  fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type" : "application/json; charset=UTF-8"
                    }
                });
        const data1 = await response.json();
        return data1;
    }
    async put(url,data){
        const response = await  fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });
        const data1 = await response.json();
        return data1;
    }
    async delete(url){
        const response = await fetch(url,{
                    method: 'DELETE',
                })
        
        // const data = await response.json();

        return "Deletedd";
    }
}
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
   
    console.log(albums)
})
.catch(err => console.log(err))

request.post('https://jsonplaceholder.typicode.com/albums',{userId:1,title:"thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err) )

request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:10,title:"tarkan"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err) )

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));