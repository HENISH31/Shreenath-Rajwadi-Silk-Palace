/* ==========================================================
 * About.jsx
 * Brand story, heritage values, and trust badges.
 *
 * 🖼️  IMAGE REPLACEMENT:
 *   Replace ABOUT_IMAGE src with your actual store / brand image.
 * ========================================================== */

import { useNavigate } from 'react-router-dom'

/* Replace with your actual store / brand photo */
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'

const VALUES = [
  { icon: '✦', title: 'Pure Silk',       desc: 'Only the finest GI-certified silk fabrics from Varanasi, Gujarat, and Tamil Nadu.' },
  { icon: '🎨', title: 'Artisan Crafted', desc: 'Each piece is handwoven or hand-embroidered by skilled artisans preserving traditional craft.' },
  { icon: '👑', title: '20+ Years Legacy', desc: 'Trusted by families across Vadodara for bridal, festive, and everyday ethnic wear.' },
  { icon: '🚚', title: 'Pan-India Delivery', desc: 'Doorstep delivery anywhere in India with secure packaging and easy returns.' },
]

export default function About() {
  const navigate = useNavigate()
  return (
    <section id="about" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: image block ── */}
          <div className="reveal relative">
            {/* Decorative border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-400/40 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-royal-gradient rounded-full opacity-10 blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl zoom-card">
              {/* Replace src with your store/brand image */}
              <img
                src={ABOUT_IMAGE}
                alt="Shreenath Rajwadi Silk Palace Store"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 md:right-6 bg-royal-gradient rounded-2xl p-5 border border-gold-500/30 shadow-xl text-center">
              <p className="font-serif text-3xl font-bold text-gold-400">20+</p>
              <p className="font-sans text-xs text-white/80 tracking-wider uppercase mt-0.5">Years of<br/>Excellence</p>
            </div>
          </div>

          {/* ── Right: text block ── */}
          <div className="reveal">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon-600 mb-3">Our Heritage</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-6">
              A Legacy Woven in<br />
              <span className="text-gold-shimmer">Silk & Tradition</span>
            </h2>

            <div className="font-sans text-sm md:text-base text-maroon-700/70 leading-relaxed space-y-4 mb-8">
              <p>
                Founded over two decades ago in the heart of Vadodara, <strong className="text-maroon-800">Shreenath Rajwadi Silk Palace</strong> has
                been the trusted destination for premium ethnic fashion. We specialize in the finest
                silk sarees, traditional chaniya cholis, and authentic Rajputi poshaks.
              </p>
              <p>
                Our collection draws from the rich textile traditions of Gujarat, Rajasthan, and
                Varanasi — bringing together handloom weaves, intricate zari work, and vibrant
                bandhani prints that celebrate India's diverse cultural heritage.
              </p>
              <p>
                Whether it is a bride's special day, a festive Navratri, or a family celebration —
                we have the perfect ensemble to make every occasion truly memorable.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 bg-white rounded-xl border border-gold-200/60 hover:border-gold-400 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-xl mt-0.5 group-hover:animate-float flex-shrink-0">{v.icon}</span>
                  <div>
                    <p className="font-serif text-sm font-bold text-maroon-900 mb-0.5">{v.title}</p>
                    <p className="font-sans text-xs text-maroon-600/70 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-royal-gradient text-white font-sans font-semibold text-sm px-7 py-3 rounded-full border border-gold-500/30 hover:shadow-[0_0_25px_rgba(172,24,48,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Visit Our Store ✦
              </button>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-maroon-800 font-sans font-semibold text-sm px-7 py-3 rounded-full border border-maroon-300 hover:bg-maroon-50 transition-all duration-300"
              >
                <span>📞</span> +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
