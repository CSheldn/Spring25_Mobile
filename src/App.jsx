import { useState } from 'react'
import './App.css'
import data from './movies.json' 

function Movie (name, year, rating) {
  return (
    name, year, rating
  );
}

function MovieList (movies) {
  let movieSTR = ""

  for (let movie of movies) {
    movieSTR += movie.name
    movieSTR += movie.year
    movieSTR += movie.rating

  }

  return (movieSTR)
}

function NavBar() {
  const [status, setStatus] = useState(true)

  for (let movie in data) {
    console.log(movie.year)
  }

  return (
  <header>
    <h1>Assignment 1</h1>
    <button onClick={() => setStatus(!status)}>{status ? "Logout" : "Login"}</button>
  </header>
  );
}

function App() {

  return <>
  <NavBar />
  </>;
}

export default App
