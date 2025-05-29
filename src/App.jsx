import './App.css'
import MovieList from './MovieList.jsx'
import NavBar from './NavBar.jsx'
import movieData from './movies.json'

// function NavBar() {
//   const [status, setStatus] = useState(true)

//   for (let movie in data) {
//     console.log(movie.year)
//   }

//   return (
//   <header>
//     <h1>Assignment 1</h1>
//     <button onClick={() => setStatus(!status)}>{status ? "Logout" : "Login"}</button>
//   </header>
//   );
// }

function App() {

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
