import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Search from "./components/Search";
import Display from "./components/Display";

function App() {
  const [Movies, setMovies] = useState([]);
  const [list, setList] = useState("now_playing");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${list}?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&page=1&include_adult=false&language=en-US&page=1&include_adult=false`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [list]);

  return (
    <div className="container">
      <Search setMovies={setMovies} />
      <div className="button-group">
        <button className="button-list" onClick={() => setList("now_playing")}>
          Now Showing
        </button>
        <button className="button-list" onClick={() => setList("popular")}>
          Popular
        </button>
        <button className="button-list" onClick={() => setList("top_rated")}>
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
