import './App.css'
import MovieCard from './components/MovieCard'  

function App() {
  return (
    <>
    <MovieCard movie={{title: "Inception", year: 2010, url: "https://m.media-amazon.com/images/I/51s+4GZ3Y9L._AC_SY445_.jpg"}} />
    <MovieCard movie={{title: "The Dark Knight", year: 2008, url: "https://m.media-amazon.com/images/I/51EbJjlLg4L._AC_SY445_.jpg"}} />
    <MovieCard movie={{title: "Interstellar", year: 2014, url: "https://m.media-amazon.com/images/I/71n58v1jW-L._AC_SY679_.jpg"}} />  
    </>
  )
}

export default App
