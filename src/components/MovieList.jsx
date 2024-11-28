import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const MovieList = ({ movies, loading }) => {
  const defaultImage = "../img/error.jpg";
  const navigate = useNavigate(); // Initialize useNavigate

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul className="list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li className="movieCard" key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title}
              className="movie-image"
            />

            <div className="movie-buttons">
             
              <button
                className="button"
                onClick={() => navigate("/about-movie")}  
              >
                About Movie
              </button>
              <button className="button">Watch now</button>
            </div>
          </li>
        ))
      ) : (
        <p>Нет фильмов для отображения.</p>
      )}
    </ul>
  );
};

export default MovieList;
