import "../css/Favorite.css"
import { useMovieContext } from "../contexts/MovieContext"  
import MovieCard from "../components/MovieCard"
 

function Favorite() {
  const { favoriteMovies } = useMovieContext();

  if (favoriteMovies && favoriteMovies.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>   
      <div className="movie-grid">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    )
  }

  return (
    <div className="favorite-empty">
      <h2>No Favorite Movie Yet!</h2>
      <p>Start adding movies to Your favorites and they will show up here </p>
    </div>
  )
}

export default Favorite