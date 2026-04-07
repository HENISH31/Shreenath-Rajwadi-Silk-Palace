/* ==========================================================
 * ScrollToTop.jsx
 * A "back to top" button that appears after scrolling 400px.
 * ========================================================== */

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-24 right-5 z-50 w-10 h-10 rounded-full bg-maroon-800 border border-gold-500/40 text-gold-400 flex items-center justify-center shadow-lg hover:bg-maroon-700 hover:shadow-[0_0_20px_rgba(172,24,48,0.5)] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
