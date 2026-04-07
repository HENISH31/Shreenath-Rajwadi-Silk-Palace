import { useState, useEffect } from 'react'
import hSaree from '../../Saree/hero-saree-m-9l0MXU.jpg'
import img1 from '../../Saree/image 1.jpeg'
import img3 from '../../Saree/image 3.jpeg'
import rCat from '../../Saree/rajputi-category-DVp4yhn2.jpg'
import sCat from '../../Saree/sarees-category-BCy88Wdv.jpg'
import dSaree from '../../Saree/All Saree/Designer Sarees.jpg'
import rmSaree from '../../Saree/All Saree/Readymade Sarees.jpg'

import logo from '../assets/logo.png'

const BG_IMAGES = [
  hSaree, img1, img3, rCat, sCat, dSaree, rmSaree
]

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [bgIndex, setBgIndex] = useState(0)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  
  const fullText1 = "Shreenath"
  const fullText2 = "Rajwadi"
  const fullText3 = "Silk Palace"

  useEffect(() => {
    let currentStep = 1
    let index = 0
    
    // Snappy typing animation
    const typingInterval = setInterval(() => {
      if (currentStep === 1) {
        if (index < fullText1.length) {
          setText1(fullText1.substring(0, index + 1))
          index++
        } else {
          currentStep = 2
          index = 0
        }
      } else if (currentStep === 2) {
        if (index < fullText2.length) {
          setText2(fullText2.substring(0, index + 1))
          index++
        } else {
          currentStep = 3
          index = 0
        }
      } else if (currentStep === 3) {
        if (index < fullText3.length) {
          setText3(fullText3.substring(0, index + 1))
          index++
        } else {
          clearInterval(typingInterval)
        }
      }
    }, 50)

    const bgInterval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % BG_IMAGES.length)
    }, 450)

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3200) 
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearInterval(typingInterval)
        clearInterval(bgInterval)
      }
    }
  }, [])

  return (
    <div className={`preloader-overlay ${!loading ? 'hidden-preloader' : ''}`}>
      {/* ── Subtle Slideshow Base ── */}
      <div className="absolute inset-0 overflow-hidden bg-[#0a0505]">
        {BG_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-in-out ${
              i === bgIndex ? 'opacity-70 scale-102 z-10' : 'opacity-0 scale-100 z-0'
            }`}
          />
        ))}
        {/* Subtle Matte Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="preloader-content px-4 relative z-20 flex flex-col items-center">
        {/* Centered Brand Emblem (Splash Style) */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-8 animate-pulse-gentle drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <img src={logo} alt="Brand Emblem" className="w-full h-full object-contain" />
        </div>

        <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-4 tracking-wider flex flex-wrap justify-center gap-x-6 min-h-[1.2em]">
          <span>{text1}</span>
          <span className="text-yellow-400">{text2}</span>
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-white/95 italic font-medium min-h-[1.5em] mb-10">
          {text3}
        </p>
        
        <div className={`preloader-dots ${text3.length === fullText3.length ? 'opacity-100' : 'opacity-0'}`}>
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
        </div>
      </div>
    </div>
  )
}
