import React, { useState } from "react";
import axios from "axios";
import MovieList from "./MoviesList";
import "./moviesList.css";

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "c8c056b5",
          s: searchText,
        },
      });
      console.log(response);
      //console.log(response.data.Search);
      setMovies(response.data.Search);
      //console.log(movies);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="movie-search">
      <h1>Movie Search</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Enter a movie title"
          value={searchText}
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSearch;
