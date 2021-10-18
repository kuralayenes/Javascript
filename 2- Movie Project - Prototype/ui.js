function UI(){

}

UI.prototype.addMovieToUI = function(newFilm){
    const filList = document.getElementById("films");
    filList.innerHTML += `
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `
}

UI.prototype.clearInput = function(el1,el2,el3){
    el1.value ="";
    el2.value ="";
    el3.value ="";
}
UI.prototype.displayMessage = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    
    const div = document.createElement("div")
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div)

    setTimeout(function(){
        div.remove();
    },2000)
}
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
    })
}
UI.prototype.deleteFilmFromUi = function(element){
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUi = function(){
    const filmList = document.getElementById("films");
    // filmList.innerHTML = ``;
    while(filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }
}