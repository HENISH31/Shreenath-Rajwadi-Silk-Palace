/* ==========================================================
 * Hero.jsx
 * Full-screen hero banner with layered visuals and CTA.
 * ========================================================== */

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

const HERO_SLIDES = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 },
]

export default function Hero() {
  const navigate = useNavigate()
  const indexRef = useRef(0)
  const totalSlides = HERO_SLIDES.length
  const [activeIndex, setActiveIndex] = useState(0)

  /* Auto-slide every 5 s */
  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % totalSlides
      setActiveIndex(indexRef.current)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] mt-20 md:mt-24 min-h-[550px] overflow-hidden flex items-center justify-center">

      {/* ── Slide images ── */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${i === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* The actual image */}
            <img
              src={slide.image}
              alt="Background Slide"
              className="w-full h-full object-cover object-center"
            />

            {/* Premium Cinematic Side Gradient (Request: Maroon Left, Navy Right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#68101e]/90 via-[#68101e]/30 via-40% to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a2e]/90 via-[#1a1a2e]/30 via-40% to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          </div>
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 text-center pt-8">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[13px] md:text-sm font-sans font-medium px-6 py-2 rounded-full mb-8 shadow-sm animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          <span className="text-yellow-400 text-base">⭐</span>
          <span>Premium Traditional Wear Since 1985</span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-lg animate-fadeInUp"
          style={{ animationDelay: '1.4s' }}
        >
          Exquisite Rajwadi<br />
          <span className="text-yellow-400 block mt-2 drop-shadow-md italic">Silk Heritage</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mb-8 leading-relaxed drop-shadow-md animate-fadeInUp"
          style={{ animationDelay: '1.6s' }}
        >
          Discover our curated collection of designer sarees, chaniya choli, and traditional Rajputi poshak. Where timeless elegance meets contemporary style.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10 animate-fadeInUp w-full sm:w-auto" style={{ animationDelay: '1.8s' }}>
          <button
            onClick={() => navigate('/sarees')}
            className="group flex items-center justify-center gap-2 bg-royal-gradient hover:bg-royal-gradient-hover text-white font-sans font-semibold text-base sm:text-lg px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto shadow-2xl hover:-translate-y-1"
          >
            Explore Collection
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white hover:bg-gray-100 text-[#68101e] font-sans font-semibold text-base sm:text-lg px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto shadow-2xl hover:-translate-y-1"
          >
            Visit Our Store
          </button>
        </div>

        {/* Stats / Features under buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 animate-fadeInUp" style={{ animationDelay: '2.0s' }}>
          <div className="flex items-center gap-3 text-white/95 text-sm sm:text-base font-sans font-medium">
            <span className="text-yellow-400">⭐</span> 1000+ Happy Customers
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center gap-3 text-white/95 text-sm sm:text-base font-sans font-medium">
            <span className="text-yellow-400">⭐</span> Premium Quality Fabrics
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center gap-3 text-white/95 text-sm sm:text-base font-sans font-medium">
            <span className="text-yellow-400">⭐</span> Expert Craftsmanship
          </div>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              indexRef.current = i
              setActiveIndex(i)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
              ? 'w-10 bg-white shadow-lg'
              : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

