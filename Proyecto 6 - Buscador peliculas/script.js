document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '7be372ff605fe78b6ccf7028fb5507fc'
let url = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'
let results = document.getElementById('results')

function searchMovies(){
    results.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${url}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    results.innerHTML = ''

    if(movies.length === 0){
        results.innerHTML = '<p>No se encontraron resultados para tu búsqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview
        
        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        results.appendChild(movieDiv)
    });
}