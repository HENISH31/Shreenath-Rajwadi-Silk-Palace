import { useEffect } from 'react'

import c1 from '../../Saree/Chaniya choli/Traditional Chaniya Choli.jpg'
import c2 from '../../Saree/Chaniya choli/Designer Chaniya Choli.jpg'
import c3 from '../../Saree/Chaniya choli/Bridal Chaniya Choli.jpg'

const CHANIYA_CHOLI_DATA = [
  { 
    id: 'c1', 
    name: 'Traditional Chaniya Choli', 
    image: c1, 
    description: 'Authentic traditional Chaniya Choli sets that celebrate the true essence of Rajwadi culture and festive beauty.' 
  },
  { 
    id: 'c2', 
    name: 'Designer Chaniya Choli', 
    image: c2, 
    description: 'Modern and elegant designer sets for the fashion-forward woman who appreciates traditional roots.' 
  },
  { 
    id: 'c3', 
    name: 'Bridal Chaniya Choli', 
    image: c3, 
    description: 'Breathtaking bridal collections that make every bride\'s dream come true with unparalleled craftsmanship.' 
  }
]

export default function ChaniyaCholi() {
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
            Chaniya Choli Collection
          </h1>
          <div className="w-20 h-1 bg-[#68101e] rounded-full" />
        </div>

        {/* Grid of 3 — Matching the reference portrait layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {CHANIYA_CHOLI_DATA.map((item, i) => (
            <div 
              key={item.id} 
              className="group reveal bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-50">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-100 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-[22px] font-bold text-[#3a111a] mb-3 leading-tight">
                  {item.name}
                </h3>
                <p className="font-sans text-[14px] text-gray-600 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <button className="text-[#68101e] font-sans font-semibold text-[14px] self-start inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore Collection 
                  <span className="text-lg">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-24 reveal text-center bg-white rounded-2xl p-10 md:p-16 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.06)] border border-gray-100 max-w-5xl mx-auto">
           <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#68101e] mb-6">Designed for Your Special Day</h2>
           <p className="font-sans text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
             Each piece in our Chaniya Choli collection is meticulously crafted with the finest fabrics and intricate handwork, ensuring you shine in every celebration.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
             <a href="tel:+917600465647" className="w-full sm:w-auto bg-royal-gradient text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-royal-gradient-hover transition-all duration-300">
               Call +91 7600 465 647
             </a>
             <a href="https://wa.me/917600465647" className="w-full sm:w-auto bg-white border-2 border-[#68101e] text-[#68101e] px-8 py-4 rounded-lg font-semibold hover:bg-[#68101e] hover:text-white transition-all duration-300">
               WhatsApp Us
             </a>
           </div>
        </div>

      </div>
    </main>
  )
}
