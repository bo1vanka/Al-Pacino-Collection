import "./styles/main.css";
import "./styles/normalize.css";

import useMovies from "./hooks/useMovies"; // Importing the custom hook
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import { BrowserRouter } from "react-router-dom"; 
const App = () => {
  const actorName = "Al Pacino"; // Actor name for search
  const { movies, totalPage, loading, error, setCurrentPage } = useMovies(actorName);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>  
    
      <Header />
      <MovieList movies={movies} loading={loading} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Pagination
        totalPage={totalPage}
        moviePerPage={10}
        setCurrentPage={setCurrentPage}
        loading={loading}  
      />
      <Footer />
    
    </BrowserRouter> 
  );
};

export default App;
