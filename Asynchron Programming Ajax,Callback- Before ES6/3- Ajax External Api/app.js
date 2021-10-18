document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=8cf77f15d67c960b55977c11de8d9294");

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText)

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * rate;
            
            // console.log(typeof response.rates.TRY)
        }
    }

    xhr.send();



}