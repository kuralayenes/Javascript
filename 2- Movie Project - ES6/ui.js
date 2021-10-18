
class UI{
    static addMovieToUI(newFilm){
        const filList = document.getElementById("films");
        filList.innerHTML += `
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    }
    
    static clearInput(el1,el2,el3){
        el1.value ="";
        el2.value ="";
        el3.value ="";
    }
    static displayMessage(message,type){
        const cardBody = document.querySelectorAll(".card-body")[0];
        
        const div = document.createElement("div")
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        cardBody.appendChild(div)
    
        setTimeout(function(){
            div.remove();
        },2000)
    }
    static loadAllFilms(films){
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
    static deleteFilmFromUi(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUi(){
        const filmList = document.getElementById("films");
        // filmList.innerHTML = ``;
        while(filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }
}
