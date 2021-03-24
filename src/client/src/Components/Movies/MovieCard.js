import React from "react";
import "./MovieCard.css";

export const MovieCard = ({ movies }) => {
  // console.log(data);
  //return <div>{movies.length}</div>;

  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="moviecard">
            <div className="moviecard__thumbnail">
              <img src={movie.baseURL} alt="" />
            </div>
            <div className="moviecard__title">{movie.title}</div>
            <div className="moviecard__description">
              <p>
                Published: {movie.year} | Rated: {movie.rating}
              </p>
              <p>{movie.describe}</p>
              <div className="moviecard__icon"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

/* Praesent elementum facilisis leo vel fringilla est ullamcorper.
                Neque ornare aenean euismod elementum nisi quis eleifend. Congue
                nisi vitae suscipit tellus mauris. Eget lorem dolor sed viverra.
                Nisi porta lorem mollis aliquam ut porttitor leo a. Tincidunt
                nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ac
                ut consequat semper viverra nam. Fusce id velit ut tortor
                pretium. */
