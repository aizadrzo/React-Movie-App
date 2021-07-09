import React, { useEffect, useState } from "react";
import "./App.scss";
import Search from "./components/Search";
import Display from "./components/Display";

function App() {
  const [Movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey =
    "?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false";

  const getMovies = async () => {
    const movieUrl = baseUrl + "now_playing" + apiKey;
    try {
      const res = await fetch(movieUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getPopularMovies = async () => {
    const popularUrl = baseUrl + "popular" + apiKey;
    try {
      const res = await fetch(popularUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getTopRatedMovies = async () => {
    const tpUrl = baseUrl + "top_rated" + apiKey;
    try {
      const res = await fetch(tpUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Search setMovies={setMovies} />
      <div className="button-group">
        <button className="button-list" onClick={getMovies}>
          Now Showing
        </button>
        <button className="button-list" onClick={getPopularMovies}>
          Popular
        </button>
        <button className="button-list" onClick={getTopRatedMovies}>
          Top Rated
        </button>
      </div>
      <div className="movie-container">
        {Movies.filter((movie) => movie.poster_path).map((movie) => (
          <Display movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
