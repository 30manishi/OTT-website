import React from 'react';
import './App.css';
import Row from './Row'; //to import from row
import requests from './requests'; //to import genre links from requests.js
import Banner from "./Banner"; //import banner which is at the topmost imf from the Banner.js
import Nav from "./Nav";

/** in this Row bracket we are fetching link of different rows(genre) from requests */
function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav />
      {/* Banner->now creating the top most banner*/}
      <Banner /> 
      <Row title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentation" fetchUrl={requests.fetchDocumentaries}/>
      
    </div> 
  );
}

export default App;

