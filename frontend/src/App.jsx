import './App.css';
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"

function App() {
  return(
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Home />}></Route>
      </Routes>
    </main>
  )
}

export default App
