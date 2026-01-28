import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Home from './pages/Home'
import Vacancies from './pages/Vacancies'
import Menu from './pages/Menu'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Vacancies />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
