import MovieCard from '../components/MovieCard'

function Home() {

  const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'The Matrix', director: 'The Wachowskis', year: 1999},
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 }
  ] 

  return (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
  )
}

export default Home