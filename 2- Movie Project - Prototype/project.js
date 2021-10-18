const movieForm = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Create Ui
const ui = new UI;

// Create Storage

const storage = new Storage;

addEventListener();

function addEventListener(){

    movieForm.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms)
}

function addMovie(e){

    title = titleElement.value;
    director = directorElement.value;
    url = urlElement.value;

    if(title=== "" || director === "" || url === ""){
        ui.displayMessage("Fill in the blanks !!!","danger")
    }
    else{
        const movie = new Film(title,director,url);

        ui.addMovieToUI(movie);

        storage.addMovieToStorage(movie);

        ui.displayMessage("Added the Movie.","success")

    }
    ui.clearInput(title,director,url);
    e.preventDefault()
}
function deleteFilm(e){
    if(e.target.id ==="delete-film"){
        ui.deleteFilmFromUi(e.target);
        storage.deleteFilmStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        ui.displayMessage("Deleted Process is Success","Success")
    }
}

function clearAllFilms(){
    if(confirm("Are you sure ? ")){
        ui.clearAllFilmsFromUi();
        storage.clearAllFilmsFromStorage();
    }
    
}