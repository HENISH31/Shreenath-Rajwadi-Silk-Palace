import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar           from './components/Navbar'
import Home             from './pages/Home'
import Sarees           from './pages/Sarees'
import ChaniyaCholi     from './pages/ChaniyaCholi'
import KidsWear         from './pages/KidsWear'
import RajputiPoshak    from './pages/RajputiPoshak'
import AboutUs          from './pages/AboutUs'
import ContactUs        from './pages/ContactUs'
import Footer           from './components/Footer'
import WhatsAppBtn      from './components/WhatsAppBtn'
import ScrollToTop      from './components/ScrollToTop'
import Preloader        from './components/Preloader'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  /* ── Force Redirect to Home on Reload (Splash First) ── */
  useEffect(() => {
    // If the app is first mounted on a URL other than home, kick back to home
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true })
    }
  }, []) // Empty dependency = initial load only

  /* ── Scroll-reveal IntersectionObserver ── */
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.reveal')
      if (!els.length) return
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
          })
        },
        { threshold: 0.10 }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }
    const t = setTimeout(run, 100)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className="relative">
      <Preloader />
      <ScrollToTop />
      <Navbar />
      
      <div key={location.pathname} className="animate-fadeIn">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/chaniya-choli" element={<ChaniyaCholi />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/rajputi-poshak" element={<RajputiPoshak />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  )
}
