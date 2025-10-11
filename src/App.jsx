import { Routes, Route } from 'react-router-dom'
import NavBar from './components/organisms/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import News from './pages/News'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail' 
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App