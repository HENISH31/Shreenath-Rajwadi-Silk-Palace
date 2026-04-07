/* ==========================================================
 * WhatsAppBtn.jsx
 * Sticky floating WhatsApp button with pulse animation.
 *
 * 📱 Replace the phone number in WA_NUMBER with the real one.
 * ========================================================== */

import { useState } from 'react'

/* ── Replace with the real WhatsApp business number ── */
const WA_NUMBER = '917600465647'
const WA_MSG    = encodeURIComponent(
  'Hello! I visited your website and would like to enquire about your ethnic wear collection.'
)

export default function WhatsAppBtn() {
  const [tooltip, setTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* Tooltip bubble */}
      {tooltip && (
        <div className="bg-darkbg text-white text-xs font-sans px-3 py-2 rounded-xl border border-white/15 shadow-lg max-w-[180px] text-center leading-relaxed animate-fadeIn">
          Chat with us on WhatsApp! 💬
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-pulse w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.658 4.762 1.808 6.75L2 30l7.476-1.776A13.922 13.922 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5c-2.194 0-4.246-.602-6-1.644l-.43-.254-4.438 1.054 1.082-4.32-.28-.442A11.45 11.45 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.318-8.624c-.346-.174-2.046-1.006-2.364-1.122-.318-.116-.548-.174-.778.174-.23.348-.894 1.122-1.096 1.352-.202.23-.404.26-.75.086-.346-.174-1.46-.534-2.782-1.706-1.028-.914-1.722-2.04-1.924-2.386-.202-.346-.022-.534.152-.706.156-.154.346-.404.52-.606.172-.202.23-.346.346-.578.116-.23.058-.432-.028-.606-.088-.174-.778-1.876-1.066-2.57-.28-.674-.566-.582-.778-.594-.202-.01-.432-.012-.662-.012s-.606.086-.924.432c-.318.346-1.21 1.182-1.21 2.882s1.238 3.344 1.41 3.574c.172.23 2.436 3.72 5.902 5.216.824.356 1.468.568 1.97.728.826.264 1.578.226 2.172.138.662-.1 2.046-.836 2.336-1.642.29-.806.29-1.498.202-1.642-.086-.144-.316-.23-.662-.404z"/>
        </svg>
      </a>
    </div>
  )
}
