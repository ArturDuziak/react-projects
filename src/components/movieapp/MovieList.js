import React from "react";
import { Link } from "react-router-dom";
import defaultPoster from "../../assets/defaultPoster.jpg";

const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouritesClick,
  isLoading,
  noMoviesFound,
}) => {
  const FavouriteComponent = favouriteComponent;

  if (isLoading) {
    return (
      <div id="loader" data-cy="movies-loader">
        Movies are loading...
      </div>
    );
  }

  if (noMoviesFound) {
    return (
      <div id="loader" data-cy="no-movies-found">
        No movies found, try another name
      </div>
    );
  }

  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
          onClick={() => handleFavouritesClick(movie)}
          data-cy={`movie-item-${index}`}
        >
          <img
            src={movie.Poster === "N/A" ? defaultPoster : movie.Poster}
            alt={`${movie.Title} movie poster`}
          ></img>
          <div className="movieoverlay d-flex align-items-center justify-content-center">
            <div data-cy="show-movie-button">
              <Link to={`/movie-app/movie/${movie.imdbID}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-arrow-right-circle-fill movie-nav-button"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </Link>
            </div>
            <FavouriteComponent />
          </div>
          <div className="movietitleoverlay d-flex align-items-center justify-content-center">
            <span className="favourites-text" data-cy="movie-title">
              {movie.Title}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
