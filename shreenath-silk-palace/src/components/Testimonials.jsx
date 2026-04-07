/* ==========================================================
 * Testimonials.jsx
 * Customer reviews carousel.
 * ========================================================== */

import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    name:   'Priya Sharma',
    city:   'Vadodara',
    rating:  5,
    text:   'The Banarasi silk saree I ordered was absolutely stunning! The quality, the zari work — everything was perfect for my daughter\'s wedding. Shreenath Rajwadi is our family\'s go-to store for all ethnic wear.',
    avatar: 'PS',
  },
  {
    name:   'Meena Patel',
    city:   'Anand',
    rating:  5,
    text:   'Bought a chaniya choli set for Navratri and I have received so many compliments! The mirror work is exquisite and the fabric is breathable even during long dance sessions. Highly recommended!',
    avatar: 'MP',
  },
  {
    name:   'Rekha Rajput',
    city:   'Vadodara',
    rating:  5,
    text:   'The Rajputi poshak we ordered for our family function was beyond expectations. Authentic craftsmanship, vibrant colors, and the fit was perfect. Will definitely shop again!',
    avatar: 'RR',
  },
  {
    name:   'Sunita Verma',
    city:   'Surat',
    rating:  5,
    text:   'Absolutely love the collection here. From the bridal lehenga to the matching accessories — everything was sourced under one roof. The staff was very helpful and patient throughout.',
    avatar: 'SV',
  },
  {
    name:   'Kavita Desai',
    city:   'Baroda',
    rating:  5,
    text:   'I had been searching for an authentic Patola saree for months. Found the perfect one here at a very fair price. The owner\'s knowledge about each fabric and weave is remarkable.',
    avatar: 'KD',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  /* Auto-advance every 4 s */
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 4000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length)

  const visible = [
    TESTIMONIALS[(current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length],
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-maroon-50/30" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon-600 mb-2">Happy Customers</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-900 border-gold-decor">
            What Our Patrons Say
          </h2>
        </div>

        {/* Cards — hidden on mobile, visible md+ */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10 reveal">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all duration-500 ${
                i === 1
                  ? 'bg-royal-gradient text-white border-gold-500/40 shadow-[0_12px_40px_rgba(172,24,48,0.25)] scale-105'
                  : 'bg-white text-maroon-800 border-maroon-100 shadow-md opacity-70'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className={`text-sm ${i === 1 ? 'text-gold-300' : 'text-gold-500'}`}>★</span>
                ))}
              </div>
              <p className={`font-sans text-sm leading-relaxed mb-5 ${i === 1 ? 'text-white/90' : 'text-maroon-700/80'}`}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 ${
                  i === 1 ? 'bg-gold-500/20 text-gold-300' : 'bg-maroon-100 text-maroon-700'
                }`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`font-serif text-sm font-bold ${i === 1 ? 'text-white' : 'text-maroon-900'}`}>{t.name}</p>
                  <p className={`font-sans text-xs ${i === 1 ? 'text-gold-300/80' : 'text-maroon-500/60'}`}>{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden reveal mb-8">
          <div className="bg-royal-gradient rounded-2xl p-6 border border-gold-500/40 shadow-xl text-white">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: TESTIMONIALS[current].rating }).map((_, s) => (
                <span key={s} className="text-gold-300 text-sm">★</span>
              ))}
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/90 mb-5">
              "{TESTIMONIALS[current].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center font-serif font-bold text-sm text-gold-300">
                {TESTIMONIALS[current].avatar}
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-white">{TESTIMONIALS[current].name}</p>
                <p className="font-sans text-xs text-gold-300/80">{TESTIMONIALS[current].city}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 reveal">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-maroon-200 hover:border-maroon-700 hover:bg-maroon-800 hover:text-white text-maroon-700 flex items-center justify-center transition-all duration-300">
            ‹
          </button>
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-maroon-700' : 'w-2 h-2 bg-maroon-200 hover:bg-maroon-400'
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-maroon-200 hover:border-maroon-700 hover:bg-maroon-800 hover:text-white text-maroon-700 flex items-center justify-center transition-all duration-300">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
