import './App.css'
import MovieList from './MovieList.jsx'
import NavBar from './NavBar.jsx'
import movieData from './movies.json'

function App() {

  return (
    <>
      <NavBar />
      <ul class="movie-cards">
        <MovieList data={movieData.movies}/>
      </ul>
    </>
  )
}

export default App
