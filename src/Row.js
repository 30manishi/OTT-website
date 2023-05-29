import React, {useState , useEffect} from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const[movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific conditions/variable
    useEffect(() => {
        // if [],run once when the loads, and don't run again  
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // here we are fetching the complete url like these 
            //"http://api.themoviedb.org/3" and "/discover/tv?api_key=${API_KEY}&with_networks=213" 
            //both get called and added "http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
            setMovies(request.data.results); 
            return request;
        }
        fetchData();

    },[fetchUrl]);

    // if anything is being pulled in from outside inside the useEffect.. it must be included inside [] => because it is dependent on it
    // we write fetchUrl inside [] to tell useEffect that we are using this (fetchUrl) variable outside the block.
    console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    //console.table(movies); // it is needed to see the data structure that we r getting
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
            //if trailer is already open it sets the trailer to empty. so it closes it.
        } 
        else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                //it gives the unique ID of a url.. substring of URL;
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* it will show posters in the rows*/}

                {movies.map((movie) => (
                    <img 
                    key={movie.id} /*As each movie has their own id, so change in particular will take place by this */
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                     alt={movie.name}/>
                    //here we will get the poster of the movies
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row