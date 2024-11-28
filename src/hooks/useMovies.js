import axios from "axios";
import { useEffect, useState } from "react";

const useMovies = (actorName) => {
  const [movies, setMovies] = useState([]); // Array for movies
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage] = useState(12); // Number of movies per page

  useEffect(() => {
    const api_key = "86e61ed67f1db6a4bd295adb5b1fda0e";
    const searchUrl = `https://api.themoviedb.org/3/search/person?api_key=${api_key}&query=${actorName}&language=en-EN`;

    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(searchUrl);
        const actorId = res.data.results[0]?.id;
        if (!actorId) throw new Error("Actor not found");

        const moviesUrl = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${api_key}&language=en-EN`;
        const movieRes = await axios.get(moviesUrl);
        setMovies(movieRes.data.cast); // Store movies from actor's credits
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovies();
  }, [actorName]); // Re-fetch when actorName changes

  // Pagination
  const indexOfLastMovie = currentPage * moviePerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Total number of pages
  const totalPage = Math.ceil(movies.length / moviePerPage);

  return {
    movies: currentMovies,
    totalPage,
    loading,
    error,
    setCurrentPage,
  };
};

export default useMovies;
