import MovieCard from '../components/MovieCard'
import { useState } from 'react'  

function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'The Matrix', director: 'The Wachowskis', year: 1999},
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 }
  ] 

  const handleSearch = (e) => {
  e.preventDefault()
  alert(searchQuery)
  setSearchQuery("")

    }

  return (
    <div className="home">
         <form onSubmit={handleSearch} className="search-form"> 
            <input type="text" 
            placeholder="search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
  )
}

export default Home