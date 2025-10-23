import './App.css'
import Favorite from "./pages/Favorite"
import Home from './pages/Home' 
import {Routes, Route} from "react-router-dom"  
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorite" element={<Favorite />}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
