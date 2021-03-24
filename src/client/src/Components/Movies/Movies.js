import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import "./MovieContainer.css";

export default function ProjectContainer() {
  const [movies, setMovies] = useState([]);

  //Snippet to aggregate moviews
  useEffect(() => {
    fetch("/movies").then((response) =>
      response.json().then((data) => {
        // console.log(data.movies);
        setMovies(data.movies);
      })
    );
  }, []);
  //console.log(movies);
  return (
    <div className="moviecontainer">
      <MovieCard movies={movies} />
    </div>
  );
}
