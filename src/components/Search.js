import React, { useState } from "react";

function Search({ setMovies }) {
  const [query, setQuery] = useState("");

  const resetField = () => {
    setQuery("");
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=66f24d566eb6008394159f46c59d027e&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
    resetField();
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button-form" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
