import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Courses from './Components/Courses'
import Faculty from './pages/Faculty'
import Contact from './Components/Contact'
import PhotoGallery from './pages/Photo_gallery'
import Library from './pages/Library'
import News from './pages/News'
import Modal from './Components/Modal'

function App() {
  return (
    <Router>
      <Navbar />
      <Modal />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Courses />
            <About />
            <Contact />
          </>
        } />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/library" element={<Library />} />
        <Route path="/news" element={<News/>} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </Router>
  )
}

export default App
