import "../css/Favorite.css"
import { useMovieContext } from "../contexts/MovieContext"  
import MovieCard from "../components/MovieCard"
 

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>   
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    )
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movie Yet!</h2>
      <p>Start adding movies to Your favorites and they will show up here </p>
    </div>
  )
}

export default Favorites