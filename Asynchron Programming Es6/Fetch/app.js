function getTextFile(){         // Text File
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
function getJsonFile(){         // Json File
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=8cf77f15d67c960b55977c11de8d9294")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err))
}


// getTextFile();
// getJsonFile()

getExternalAPI();
