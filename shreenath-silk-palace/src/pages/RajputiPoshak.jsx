import { useEffect, useRef, useState } from 'react'

import v1 from '../../Saree/Rajputi Poshak/rajputi poshak 1.mp4'
import v2 from '../../Saree/Rajputi Poshak/rajputi poshak 2.mp4'
import v3 from '../../Saree/Rajputi Poshak/rajputi poshak 3.mp4'
import v4 from '../../Saree/Rajputi Poshak/rajputi poshak 4.mp4'
import v5 from '../../Saree/Rajputi Poshak/rajputi poshak 5.mp4'
import v6 from '../../Saree/Rajputi Poshak/rajputi poshak 6.mp4'
import v7 from '../../Saree/Rajputi Poshak/rajputi poshak 7.mp4'
import v8 from '../../Saree/Rajputi Poshak/rajputi poshak 8.mp4'
import v9 from '../../Saree/Rajputi Poshak/rajputi  poshak 9.mp4'

const POSHAK_DATA = [
  { id: 'v1', name: 'Royal Bridal Poshak with Gold Embroidery', video: v1 },
  { id: 'v2', name: 'Traditional Red Rajputi Poshak', video: v2 },
  { id: 'v3', name: 'Designer Poshak with Gota Patti Work', video: v3 },
  { id: 'v4', name: 'Elegant Green Rajasthani Poshak', video: v4 },
  { id: 'v5', name: 'Wedding Special Rajputi Ensemble', video: v5 },
  { id: 'v6', name: 'Festive Occasion Poshak Collection', video: v6 },
  { id: 'v7', name: 'Contemporary Rajputi Style', video: v7 },
  { id: 'v8', name: 'Handcrafted Luxury Poshak', video: v8 },
  { id: 'v9', name: 'Premium Silk Rajputi Outfit', video: v9 }
]

function VideoCard({ item, i }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div 
      className="group reveal bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md flex flex-col border border-gray-200 transition-shadow duration-300 relative"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden border-b border-gray-100 cursor-pointer bg-black"
        onClick={togglePlay}
      >
        <video 
          ref={videoRef}
          src={item.video} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-100"
          playsInline
          loop
          onEnded={() => setIsPlaying(false)}
        />
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-100">
            <svg className="w-16 h-16 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-[16px] xl:text-[18px] font-semibold text-[#3a111a] mb-1">
          {item.name}
        </h3>
        <p className="font-sans text-[12px] text-[#998b8d]">
          Click to play video
        </p>
      </div>
    </div>
  )
}

export default function RajputiPoshak() {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
  }, [])

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-[#fcfcfc]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 pb-14">
        
        {/* Grid of 9 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {POSHAK_DATA.map((item, i) => (
            <VideoCard key={item.id} item={item} i={i} />
          ))}
        </div>

      </div>
    </main>
  )
}
