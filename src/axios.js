import axios from "axios"; //axios work like postman,it provide us the genre links 

/** base url to make requests to the movie database */
const instance = axios.create({
    baseURL:"http://api.themoviedb.org/3",
});

export default instance;