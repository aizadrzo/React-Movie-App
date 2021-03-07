import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [Movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    const popularMoviesUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&page=1&include_adult=false";

    try {
      const res = await fetch(popularMoviesUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <h1>Movie App</h1>
        <div>
          <Search setMovies={setMovies} />
        </div>
      </div>
      {Movies.filter((movie) => movie.poster_path).map((movie) => (
        <Main movie={movie} key={movie.id} />
      ))}
    </>
  );
}

export default App;
