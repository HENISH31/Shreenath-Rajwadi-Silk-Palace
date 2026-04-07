/* ==========================================================
 * FeaturesBanner.jsx
 * Auto-scrolling marquee strip between sections showing
 * key selling points. Pure CSS animation — no JS lib needed.
 * ========================================================== */

const FEATURES = [
  '✦ 500+ Silk Designs',
  '✦ 100% Authentic Fabrics',
  '✦ Bridal Specialist',
  '✦ Free Home Delivery',
  '✦ 20+ Years of Trust',
  '✦ Navratri Special Collection',
  '✦ Wholesale Available',
  '✦ Cash on Delivery',
  '✦ Pan-India Shipping',
  '✦ Expert Styling Advice',
]

/* Duplicate for seamless infinite scroll */
const ITEMS = [...FEATURES, ...FEATURES]

export default function FeaturesBanner() {
  return (
    <div className="relative overflow-hidden bg-royal-gradient py-3 border-y border-gold-500/30">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-maroon-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-maroon-800 to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="font-sans text-xs text-gold-300 tracking-widest uppercase font-medium flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Inline keyframe — avoids needing to extend tailwind for this one-off */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
