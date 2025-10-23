import "../css/MovieCard.css"

function MovieCard({movie}) {

  function onFavoriteClick() {
    alert("Favorite clicked!")
  }


  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={`${movie.title} Poster`} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
            ❤️
        </button>
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-year">{movie.year}</p>
      </div>

    </div>
  );
}


export default MovieCard;