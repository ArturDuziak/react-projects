import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";
import debounce from "lodash/debounce";

export const MovieApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [noMoviesFound, setNoMoviesFound] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourite-movies")) || []
  );

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1cf5d3da`;
    setIsLoading(true);

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setNoMoviesFound(false);
    } else {
      setNoMoviesFound(true);
    }
    setTimeout(() => setIsLoading(false), 800);
  };

  const addFavouriteMovie = (movie) => {
    if (!favourites.includes(movie)) {
      const newFavourites = [...favourites, movie];
      setFavourites(newFavourites);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavourites = favourites.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setFavourites(newFavourites);
  };

  const debounceSearch = useCallback(
    debounce((value) => getMovieRequest(value), 1000),
    []
  );

  useEffect(() => {
    debounceSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem("favourite-movies", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
          isLoading={isLoading}
          noMoviesFound={noMoviesFound}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};
