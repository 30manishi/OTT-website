import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css";


function Banner(){
    const[movie,setMovie] = useState([]); //responsible for whatever random movie gets seleted at the top

    //below we are selecting any random movie for thr banner
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
             
           return request;
        }  
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }

    return(
        <header className="banner"
         style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center",
         }}
        >
            {/**adding Background image */}
            <div className="banner__contents">
                {/**title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/**inside div we r gonna have 2 buttons*/}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                
                {/**descriptions*/}
                <div className="banner__description">{truncate(movie?.overview,150)}</div>
            </div>
            
            <div className="button__fadeBottom" />        
        </header>
        // we used header and div both because we wanted to style two different things in other ways. 
        // background and contents in another format so we use two so they don't clash
    )
}

export default Banner