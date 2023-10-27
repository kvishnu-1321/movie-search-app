// MovieList.js
import React, { useState } from "react";
import "./moviesList.css"

const MovieList = ({ movies }) => {
  const [showPlot, setShowPlot] = useState({});

  const togglePlotVisibility = (imdbID) => {
    setShowPlot((prevShowPlot) => ({
      ...prevShowPlot,
      [imdbID]: !prevShowPlot[imdbID],
    }));
  };

  return (
    <ul className="movies-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <h2 onClick={() => togglePlotVisibility(movie.imdbID)}>
              {movie.Title}
            </h2>
            {showPlot[movie.imdbID] && <p>{movie.Plot}</p>}
            <img src={movie.Poster} alt={movie.Title} />
            <p>IMDB Rating: {movie.imdbRating}</p>
            <p>Release Date: {movie.Year}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
          </li>
        ))
      ) : (
        <li className="not-found">No movies found.</li>
      )}
    </ul>
  );
};

export default MovieList;
