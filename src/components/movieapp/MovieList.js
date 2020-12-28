import React from "react";

const MovieList = ({ movies, favouriteComponent, handleFavouritesClick }) => {
  const FavouriteComponent = favouriteComponent;

  // console.log(movies);

  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
          onClick={() => handleFavouritesClick(movie)}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div className="movieoverlay d-flex align-items-center justify-content-center">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
