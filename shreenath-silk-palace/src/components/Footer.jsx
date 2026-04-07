import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#600e1b] text-white pt-12 md:pt-16 pb-8">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Segment: 3-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12 lg:gap-x-20 mb-12">
          
          {/* Column 1: Brand Essence & Contact */}
          <div className="flex flex-col items-start text-left">
            <h2 className="font-serif text-[24px] md:text-[26px] font-bold text-white mb-3 leading-tight">
              Shreenath Rajwadi <br /> Silk Palace
            </h2>
            <div className="w-16 h-[1.5px] bg-white/20 mb-6" />
            <p className="font-sans font-medium text-white/95 text-[14px] md:text-[14.5px] leading-relaxed mb-6 max-w-[400px]">
              Your trusted destination for exquisite traditional Indian wear. For over 35 years, we have been creating memories and celebrating the beauty of heritage fashion in Pethapur.
            </p>
            
            <ul className="space-y-3 text-[13px] md:text-[14px] text-white/80">
              <li className="flex items-start gap-4 group">
                <svg className="w-[12px] h-[12px] text-white/60 mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="leading-relaxed opacity-90">Shreeji Darshan Complex, Manjalpur, Vadodara, Gujarat 390011</span>
              </li>
              <li className="flex items-center gap-4 group">
                <svg className="w-[12px] h-[12px] text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="opacity-90">+91 7600 465 647</span>
              </li>
              <li className="flex items-center gap-4 group">
                <svg className="w-[12px] h-[12px] text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="opacity-90">Mon - Sat: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigational Luxury */}
          <div className="flex flex-col items-start text-left">
            <h3 className="font-serif text-[17px] md:text-[18px] font-bold text-white mb-3 uppercase tracking-[0.1em]">
              Quick Links
            </h3>
            <div className="w-10 h-[1.5px] bg-white/20 mb-6" />
            <ul className="space-y-3 font-sans text-[14px] md:text-[14.5px] text-white/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/sarees" className="hover:text-white transition-colors">Sarees Collection</Link></li>
              <li><Link to="/chaniya-choli" className="hover:text-white transition-colors">Chaniya Choli</Link></li>
              <li><Link to="/kids-wear" className="hover:text-white transition-colors">Kids Wear</Link></li>
              <li><Link to="/rajputi-poshak" className="hover:text-white transition-colors">Rajputi Poshak</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Collection Showcase */}
          <div className="flex flex-col items-start text-left">
            <h3 className="font-serif text-[17px] md:text-[18px] font-bold text-white mb-3 uppercase tracking-[0.1em]">
              Our Collections
            </h3>
            <div className="w-10 h-[1.5px] bg-white/20 mb-6" />
            <ul className="space-y-3 font-sans text-[14px] md:text-[14.5px] text-white/80">
              <li><Link to="/sarees?filter=designer" className="hover:text-white transition-colors">Designer Sarees</Link></li>
              <li><Link to="/sarees?filter=silk" className="hover:text-white transition-colors">Silk Sarees</Link></li>
              <li><Link to="/sarees?filter=bandhani" className="hover:text-white transition-colors">Bandhani Sarees</Link></li>
              <li><Link to="/sarees?filter=wedding" className="hover:text-white transition-colors">Wedding Sarees</Link></li>
              <li><Link to="/sarees?filter=readymade" className="hover:text-white transition-colors">Readymade Sarees</Link></li>
              <li><Link to="/chaniya-choli" className="hover:text-white transition-colors">Bridal Wear</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider Segment */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full border border-white/15" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Action Segment: Premium CTAs */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 mb-10">
          <div>
            <h3 className="font-serif text-[28px] md:text-[32px] font-bold text-white mb-2">Get in Touch</h3>
            <p className="font-sans text-white/70 text-[14.5px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              Experience the royal touch in person. Visit our Vadodara store for a personalized styling session or reach out via WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 min-w-[300px]">
            <a 
              href="tel:+917600465647"
              className="bg-white text-[#600e1b] px-10 py-3 rounded-full font-sans font-bold text-[15px] hover:bg-white/90 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/917600465647"
              target="_blank"
              rel="noreferrer"
              className="bg-[#eec143] hover:bg-[#d9b038] text-black px-10 py-3 rounded-full font-sans font-bold text-[15px] transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.658 4.762 1.808 6.75L2 30l7.476-1.776A13.922 13.922 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.318 18.876c-.346-.174-2.046-1.006-2.364-1.122-.318-.116-.548-.174-.778.174-.23.348-.894 1.122-1.096 1.352-.202.23-.404.26-.75.086-.346-.174-1.46-.534-2.782-1.706-1.028-.914-1.722-2.04-1.924-2.386-.202-.346-.022-.534.152-.706.156-.154.346-.404.52-.606.172-.202.23-.346.346-.578.116-.23.058-.432-.028-.606-.088-.174-.778-1.876-1.066-2.57-.28-.674-.566-.582-.778-.594-.202-.01-.432-.012-.662-.012s-.606.086-.924.432-1.21 1.182-1.21 2.882 1.238 3.344 1.41 3.574c.172.23 2.436 3.72 5.902 5.216.824.356 1.468.568 1.97.728.826.264 1.578.226 2.172.138.662-.1 2.046-.836 2.336-1.642.29-.806.29-1.498.202-1.642-.086-.144-.316-.23-.662-.404z"/></svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="flex items-center gap-10 opacity-60">
            <a href="https://facebook.com" className="hover:text-white hover:opacity-100 transition-all active:scale-95" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" className="hover:text-white hover:opacity-100 transition-all active:scale-95" aria-label="Instagram">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] md:text-[13px] text-white/40 font-sans uppercase tracking-[0.15em] font-medium">
          <p>© TejasKP AI Software. All rights reserved.</p>
          <div className="flex items-center gap-6 md:gap-10">
            <span className="opacity-60">Handcrafted Heritage</span>
            <span className="hidden sm:inline w-[1px] h-3 bg-white/10" />
            <span className="opacity-60 italic normal-case">Pethapur Vala</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
