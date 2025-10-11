import { Routes, Route } from 'react-router-dom'
import NavBar from './components/organisms/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import News from './pages/News'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail' // Agregar esta línea

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Nueva ruta */}
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App