import { useEffect } from 'react'

import k1 from '../../Saree/kids wear/Kids Ethnic Wear.jpg'
import k2 from '../../Saree/kids wear/Kids Festival Wear.jpg'
import k3 from '../../Saree/kids wear/Kids Party Wear.jpg'

const KIDS_WEAR_DATA = [
  { 
    id: 'k1', 
    name: 'Kids Ethnic Wear', 
    image: k1, 
    description: 'Traditional ethnic wear for kids, perfect for special family events and celebrations.' 
  },
  { 
    id: 'k2', 
    name: 'Kids Festival Wear', 
    image: k2, 
    description: 'Colorful and vibrant festival wear designed for comfort and celebration.' 
  },
  { 
    id: 'k3', 
    name: 'Kids Party Wear', 
    image: k3, 
    description: 'Elegant party wear outfits that make every occasion special for your little ones.' 
  }
]

export default function KidsWear() {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
  }, [])

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-[#fdfaf6]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 pb-20">
        
        {/* Header */}
        <div className="mb-14 reveal">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#68101e] mb-4">
            Kids Collection
          </h1>
          <div className="w-20 h-1 bg-[#68101e] rounded-full" />
        </div>

        {/* Grid of 3 — Matching the reference square layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {KIDS_WEAR_DATA.map((item, i) => (
            <div 
              key={item.id} 
              className="group reveal bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col transition-all duration-500 hover:-translate-y-1 block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Aspect-Square for Kids Wear Finishing */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-[22px] font-bold text-[#3a111a] mb-3 leading-tight">
                  {item.name}
                </h3>
                <p className="font-sans text-[14px] text-gray-600 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <span className="text-[#68101e] font-sans font-semibold text-[14px] self-start inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  View Collection 
                  <span className="text-lg">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
