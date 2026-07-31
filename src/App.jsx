import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Courses from './Components/Courses'
import Faculty from './pages/Faculty'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import PhotoGallery from './pages/Photo_gallery'
import Library from './pages/Library'
import News from './pages/News'
import Feedback from './pages/Feedback'
import Alumini from './pages/Alumini'
import Modal from './Components/Modal'
import Enroll from './pages/Enroll'
import ScrollToTop from './Components/ScrollToTop'
import PageTransition from './Components/PageTransition'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Modal />

      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero />
              <Courses />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/library" element={<Library />} />
          <Route path="/news" element={<News />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/alumini" element={<Alumini />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </PageTransition>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
