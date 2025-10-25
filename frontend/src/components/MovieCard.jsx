import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";  

function MovieCard({movie}) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext(); 
  const favorite = isFavorite(movie.id); 

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
        removeFavorite(movie.id);
    } else {
        addFavorite(movie);
    } 
  }


  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
      </div>
      <div className="movie-overlay">
        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ❤️
        </button>
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-year">{movie.release_date}</p>
      </div>

    </div>
  );
}


export default MovieCard;