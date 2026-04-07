import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Top Level Collection Images
import dCat from '../../Saree/All Saree/Designer Sarees.jpg'
import rCat from '../../Saree/All Saree/Readymade Sarees.jpg'
import sCat from '../../Saree/All Saree/Silk Sarees.jpg'
import wCat from '../../Saree/All Saree/Wedding Sarees.jpg'
import bCat from '../../Saree/All Saree/Bandhani Sarees.jpeg'

// Specific Collection Images (imported directly for proper Vite handling)
import d1 from '../../Saree/All Saree/Designer Sarees/IMG-20250921-WA0024.jpg'
import d2 from '../../Saree/All Saree/Designer Sarees/IMG-20250921-WA0025.jpg'
import d3 from '../../Saree/All Saree/Designer Sarees/IMG-20250921-WA0026.jpg'

import si1 from '../../Saree/All Saree/Silk Sarees/IMG-20250921-WA0027.jpg'
import si2 from '../../Saree/All Saree/Silk Sarees/IMG-20250921-WA0028.jpg'
import si3 from '../../Saree/All Saree/Silk Sarees/IMG-20250921-WA0029.jpg'

import b1 from '../../Saree/All Saree/Bandhani Sarees/IMG-20250921-WA0030.jpg'
import b2 from '../../Saree/All Saree/Bandhani Sarees/IMG-20250921-WA0031.jpg'
import b3 from '../../Saree/All Saree/Bandhani Sarees/IMG-20250921-WA0032.jpg'

import w1 from '../../Saree/All Saree/Wedding Sarees/IMG-20250921-WA0033.jpg'
import w2 from '../../Saree/All Saree/Wedding Sarees/IMG-20250921-WA0034.jpg'
import w3 from '../../Saree/All Saree/Wedding Sarees/IMG-20250921-WA0035.jpg'

import r1 from '../../Saree/All Saree/Readymade Sarees/IMG-20250921-WA0036.jpg'
import r2 from '../../Saree/All Saree/Readymade Sarees/IMG-20250921-WA0037.jpg'
import r3 from '../../Saree/All Saree/Readymade Sarees/IMG-20250921-WA0038.jpg'

const COLLECTIONS_DATA = {
  designer: {
    title: 'Designer Sarees',
    coverImage: dCat,
    shortDescription: 'Exquisite designer sarees for special occasions and boutique celebrations.',
    paragraph: 'Our designer sarees collection features exclusive handpicked designs crafted with premium materials and exquisite craftsmanship.',
    items: [
      { id: 'd1', name: 'Luxury Designer Saree', image: d1 },
      { id: 'd2', name: 'Embellished Designer Saree', image: d2 },
      { id: 'd3', name: 'Contemporary Designer Saree', image: d3 }
    ]
  },
  silk: {
    title: 'Silk Sarees',
    coverImage: sCat,
    shortDescription: 'Premium silk sarees with intricate traditional patterns and royal elegance.',
    paragraph: 'Our silk sarees are woven by master artisans, preserving the authentic feel and texture of royal heritage silk.',
    items: [
      { id: 'si1', name: 'Premium Silk Saree', image: si1 },
      { id: 'si2', name: 'Pure Silk Saree', image: si2 },
      { id: 'si3', name: 'Handloom Silk Saree', image: si3 }
    ]
  },
  bandhani: {
    title: 'Bandhani Sarees',
    coverImage: bCat,
    shortDescription: 'Traditional bandhani sarees with vibrant colors and authentic patterns.',
    paragraph: 'Experience the vibrant culture of Gujarat with our authentic hand-knotted bandhani sarees in stunning royal shades.',
    items: [
      { id: 'b1', name: 'Traditional Bandhani Saree', image: b1 },
      { id: 'b2', name: 'Designer Bandhani Saree', image: b2 },
      { id: 'b3', name: 'Festive Bandhani Saree', image: b3 }
    ]
  },
  wedding: {
    title: 'Wedding Sarees',
    coverImage: wCat,
    shortDescription: 'Opulent wedding sarees adorned with heavy zardosi and royal zari work.',
    paragraph: 'Complete your bridal look with our magnificent collection of wedding sarees, designed to make your special day grand.',
    items: [
      { id: 'w1', name: 'Bridal Wedding Saree', image: w1 },
      { id: 'w2', name: 'Royal Wedding Saree', image: w2 },
      { id: 'w3', name: 'Designer Wedding Saree', image: w3 }
    ]
  },
  readymade: {
    title: 'Readymade Sarees',
    coverImage: rCat,
    shortDescription: 'Pre-stitched readymade sarees for effortless elegance and quick styling.',
    paragraph: 'Enjoy the beauty of a saree without the hassle of draping. Perfect for modern women who value time and tradition.',
    items: [
      { id: 'r1', name: 'Pre-Stitched Saree', image: r1 },
      { id: 'r2', name: 'Designer Readymade Saree', image: r2 },
      { id: 'r3', name: 'Party Wear Readymade Saree', image: r3 }
    ]
  }
}

export default function Sarees() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const filter = queryParams.get('filter') || 'all'

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
  }, [location, filter])

  const isDetailView = filter !== 'all' && COLLECTIONS_DATA[filter]
  const activeData = isDetailView ? COLLECTIONS_DATA[filter] : null

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-[#fdfaf6]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 pb-20">
        
        {/* Breadcrumb Header */}
        <div className="mb-14 reveal">
          <p className="font-sans text-[13px] text-gray-400 mb-2 tracking-widest uppercase">
            {isDetailView ? `Sarees / ${activeData.title}` : 'Sarees Collection'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#68101e] mb-4">
            {isDetailView ? activeData.title : 'All Sarees'}
          </h1>
          <div className="w-20 h-1 bg-[#68101e] rounded-full" />
        </div>

        {/* Categories View (Overview) */}
        {!isDetailView && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 reveal">
            {Object.entries(COLLECTIONS_DATA).map(([key, data], i) => (
              <div 
                key={key}
                onClick={() => navigate(`/sarees?filter=${key}`)}
                className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img src={data.coverImage} alt={data.title} className="w-full h-full object-cover object-top transition-transform duration-100 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-[22px] font-bold text-[#3a111a] mb-3 leading-tight">
                    {data.title}
                  </h3>
                  <p className="font-sans text-[14px] text-gray-600 leading-relaxed mb-6 flex-1">
                    {data.shortDescription}
                  </p>
                  <span className="text-[#68101e] font-sans font-semibold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Explore Collection <span className="text-lg">&rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Collection View */}
        {isDetailView && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-12 reveal">
              {activeData.items.map((item, i) => (
                <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col transition-all duration-500">
                  <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-50 border-b border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top transition-transform duration-100 group-hover:scale-110" />
                  </div>
                  <div className="p-4 sm:p-8 flex flex-col flex-1 text-center">
                    <h3 className="font-serif text-[16px] sm:text-[20px] font-bold text-[#3a111a] mb-3 sm:mb-5">
                      {item.name}
                    </h3>
                    <button onClick={() => navigate('/contact')} className="w-full bg-[#68101e] text-white py-3 rounded-lg font-sans font-semibold text-[14px] hover:bg-royal-gradient-hover transition-all">
                      Check Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Descriptive Block */}
            <div className="mt-20 text-center max-w-3xl mx-auto reveal">
               <p className="font-sans text-gray-600 leading-relaxed mb-10 italic">
                 "{activeData.paragraph}"
               </p>
               <button onClick={() => navigate('/sarees?filter=all')} className="text-gray-400 font-sans font-medium text-[13px] hover:text-[#68101e] transition-colors border-b border-gray-200 pb-1">
                 &larr; Back to All Collections
               </button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
