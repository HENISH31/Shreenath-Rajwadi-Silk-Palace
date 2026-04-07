/* ==========================================================
 * TrustBar.jsx
 * A horizontal strip of trust signals / guarantees shown
 * between major sections to reinforce brand credibility.
 * ========================================================== */

const TRUST_ITEMS = [
  {
    icon: '🏆',
    title: '20+ Years',
    desc: 'Of Heritage & Trust',
  },
  {
    icon: '🎁',
    title: 'Free Delivery',
    desc: 'Within Vadodara',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    desc: '7-Day Return Policy',
  },
  {
    icon: '💎',
    title: 'Genuine Silk',
    desc: 'GI Certified Fabrics',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    desc: 'Cash, UPI & Cards',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-maroon-100 py-6">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group"
            >
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-full bg-cream border border-gold-200 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-gold-50 group-hover:border-gold-400 transition-colors duration-300">
                {item.icon}
              </div>
              {/* Text */}
              <div>
                <p className="font-serif text-sm font-bold text-maroon-900 leading-tight">{item.title}</p>
                <p className="font-sans text-[11px] text-maroon-500/70">{item.desc}</p>
              </div>
              {/* Divider (hide after last) */}
              {i < TRUST_ITEMS.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-maroon-100 ml-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
