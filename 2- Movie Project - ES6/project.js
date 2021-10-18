const movieForm = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


addEventListener();

function addEventListener(){

    movieForm.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms)
}

function addMovie(e){

    title = titleElement.value;
    director = directorElement.value;
    url = urlElement.value;

    if(title=== "" || director === "" || url === ""){
        UI.displayMessage("Fill in the blanks !!!","danger")
    }
    else{
        const movie = new Film(title,director,url);

        UI.addMovieToUI(movie);

        Storage.addMovieToStorage(movie);

        UI.displayMessage("Added the Movie.","success")

    }
    UI.clearInput(title,director,url);
    e.preventDefault()
}
function deleteFilm(e){
    if(e.target.id ==="delete-film"){
        UI.deleteFilmFromUi(e.target);
        Storage.deleteFilmStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        UI.displayMessage("Deleted Process is Success","Success")
    }
}

function clearAllFilms(){
    if(confirm("Are you sure ? ")){
        UI.clearAllFilmsFromUi();
        Storage.clearAllFilmsFromStorage();
    }
    
}