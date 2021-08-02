const API_KEY = "1c1d615cce7752579ab5505cd88a56fb";

const requests = {
    findTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    findNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    findTop: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    findActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    findComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    findHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    findRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    findDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;