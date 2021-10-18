// HTTP STATUS

// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Interval Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    // xhr.onprogress = function(){
    //     console.log("Processing",this.readyState)
    // }
    xhr.onload = function(){
        // console.log(this.readyState)
        if(this.status  === 200){
            // console.log(this.responseText)
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    // xhr.onreadystatechange = function(){
    //     // console.log(this.readyState)
    //     // console.log(this.status);

    //     if(this.status == 200 && this.readyState ==4){
    //         // Response Ready
    //         console.log(this.responseText)
    //     }
    // }

    xhr.open("GET","example.txt",true);

    xhr.send();

})