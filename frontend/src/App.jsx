import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return(
    <div>
      <MovieCard movie={{title: "The Avengers", release_date: "2026"}}/>
    </div>
  )
}

export default App
