import React from "react";

function Main({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + "poster"}
      />
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Main;
