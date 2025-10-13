import { Routes, Route } from 'react-router-dom'
import NavBar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import News from './pages/News'
import Contact from './pages/Contact'
import NewsDetail from './pages/NewsDetail'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import './styles/global.css'

function App() {
  return (
    <div className="d-flex flex-column main-background">
      <NavBar />
      <main className="flex-grow-1" style={{ marginTop: '90px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer /> {/* Ya está correcto con mt-auto */}
    </div>
  )
}

export default App