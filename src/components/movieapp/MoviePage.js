import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const MoviePage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [movieNotFound, setMovieNotFound] = useState(false);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?i=${movieID}&apikey=1cf5d3da`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (!responseJson.Error) {
      setMovie(responseJson);
      setIsLoading(false);
    } else {
      setMovieNotFound(true);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  if (movieNotFound) {
    return (
      <div>
        It seems that movie with this ID wasn't found
        <Link to="/movie-app">Go back</Link>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading movie...</div>;
  }

  const { Poster, Title, Year, Actors, Director, Plot, Metascore } = movie;

  return (
    <div className="movie-page-container">
      <div>
        <Link to="/movie-app">Go back</Link>
        <img src={Poster}></img>
        <p>Title: {Title}</p>
        <p>Year of premier: {Year}</p>
        <p>Actors: {Actors}</p>
        <p>Director: {Director}</p>
        <p>Plot: {Plot}</p>
        <p>Metascore: {Metascore}</p>
      </div>
    </div>
  );
};
