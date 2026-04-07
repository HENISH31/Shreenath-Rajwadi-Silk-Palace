/* ==========================================================
 * Contact.jsx
 * Address, phone, hours + Google Maps embed.
 *
 * 📍 MAP REPLACEMENT:
 *   Replace the <iframe> src with the actual Google Maps embed
 *   URL for the store location. Go to maps.google.com →
 *   search the address → Share → Embed a map → copy src URL.
 * ========================================================== */

const CONTACT_INFO = [
  {
    icon: '📍',
    title: 'Our Store',
    lines: [
      'Shreenath Rajwadi Silk Palace',
      'Shop No. 12, Rajwada Complex,',
      'Sayajigunj, Vadodara — 390005',
      'Gujarat, India',
    ],
  },
  {
    icon: '📞',
    title: 'Call / WhatsApp',
    lines: ['+91 99999 99999', '+91 88888 88888'],
    links: ['tel:+919999999999', 'tel:+918888888888'],
  },
  {
    icon: '🕐',
    title: 'Store Hours',
    lines: [
      'Mon – Sat: 10:00 AM – 8:30 PM',
      'Sunday:    11:00 AM – 7:00 PM',
      'Open on all public holidays',
    ],
  },
  {
    icon: '✉️',
    title: 'Email Us',
    lines: ['info@shreenathrajwadisilkpalace.in'],
    links: ['mailto:info@shreenathrajwadisilkpalace.in'],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-darkbg relative overflow-hidden">

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-maroon-800/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-2">Find Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white border-gold-decor">
            Visit Our Store
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-md mx-auto mt-5">
            Come experience the fabric, feel the quality, and let our experts guide you to
            your perfect ethnic ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Contact info cards ── */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {CONTACT_INFO.map((info, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-gold-500/40 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="font-serif text-sm font-semibold text-gold-400 mb-1.5">{info.title}</p>
                    {info.lines.map((line, j) => (
                      info.links?.[j] ? (
                        <a
                          key={j}
                          href={info.links[j]}
                          className="block font-sans text-sm text-white/80 hover:text-gold-300 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={j} className="font-sans text-sm text-white/60 leading-relaxed">{line}</p>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <p className="font-serif text-sm font-semibold text-gold-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook',  href: 'https://facebook.com',  emoji: '📘' },
                  { label: 'Instagram', href: 'https://instagram.com', emoji: '📷' },
                  { label: 'YouTube',   href: 'https://youtube.com',   emoji: '▶️' },
                  { label: 'WhatsApp',  href: 'https://wa.me/919999999999', emoji: '💬' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-lg transition-all duration-300"
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Google Maps embed ── */}
          <div className="lg:col-span-3 reveal">
            <div className="rounded-2xl overflow-hidden border border-gold-500/20 shadow-[0_8px_40px_rgba(0,0,0,0.4)] h-full min-h-[380px]">
              {/*
                📍 REPLACE THE src BELOW WITH YOUR ACTUAL GOOGLE MAPS EMBED URL
                   Steps:
                   1. Go to https://maps.google.com
                   2. Search "Shreenath Rajwadi Silk Palace, Vadodara"
                   3. Click Share → Embed a map → Copy HTML → use only the src URL
              */}
              <iframe
                title="Shreenath Rajwadi Silk Palace Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1234567890!2d73.19285871495726!3d22.30757674850694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5874b36e375%3A0x0!2sSayajigunj%2C+Vadodara%2C+Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px]"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── Quick enquiry form ── */}
        <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 reveal">
          <h3 className="font-serif text-xl font-bold text-white mb-6 text-center">Send Us a Quick Enquiry</h3>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.') }}
          >
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            />
            <input
              type="tel"
              placeholder="Mobile Number *"
              required
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            />
            <select
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white/70 font-sans text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            >
              <option value="">Enquiry About...</option>
              <option>Silk Sarees</option>
              <option>Chaniya Choli</option>
              <option>Rajputi Dresses</option>
              <option>Bridal Collection</option>
              <option>Bulk / Wholesale</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Your Message"
              className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            />
            <div className="sm:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="bg-royal-gradient text-white font-sans font-semibold text-sm px-12 py-3.5 rounded-full border border-gold-500/30 hover:border-gold-400 hover:shadow-[0_0_30px_rgba(172,24,48,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Enquiry ✦
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
