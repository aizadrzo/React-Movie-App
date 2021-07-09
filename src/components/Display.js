import React, { useState } from "react";
import Popup from "reactjs-popup";

function Display({ movie }) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="poster"
        onClick={() => setOpen((o) => !o)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title + "poster"}
        />
      </button>
      <Popup
        modal
        className-popup="my-popup-content"
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
      >
        <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">
            <img
              className="modal-img"
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              alt={movie.title + "backdrop"}
            />
            <div className="modal-text">
              <h3 className="modal-title">{movie.title}</h3>
              <div className="movie-details">
                <small>Release Date: {movie.release_date}</small>
                <small>Ratings: {movie.vote_average}</small>
              </div>
              <p className="modal-info">{movie.overview}</p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default Display;
