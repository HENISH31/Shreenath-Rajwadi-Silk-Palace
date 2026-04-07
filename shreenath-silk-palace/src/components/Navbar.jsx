import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

/* ── Navigation links ── */
const SAREE_LINKS = [
  { label: 'All Sarees', href: '/sarees' },
  { label: 'Designer Sarees', href: '/sarees?filter=designer' },
  { label: 'Silk Sarees', href: '/sarees?filter=silk' },
  { label: 'Bandhani Sarees', href: '/sarees?filter=bandhani' },
  { label: 'Wedding Sarees', href: '/sarees?filter=wedding' },
  { label: 'Readymade Sarees', href: '/sarees?filter=readymade' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (href, isRouterPath = false) => {
    setMenuOpen(false)

    // Exact path navigation (like /sarees)
    if (isRouterPath || href.startsWith('/')) {
      navigate(href)
      window.scrollTo(0, 0)
      return
    }

    // Scroll anchoring
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for home to render then smooth scroll
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100)
    } else {
      const el = document.querySelector(href)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf6] border-b border-gray-100 shadow-sm transition-all duration-300 font-sans">
      <nav className="w-full max-w-[1800px] mx-auto px-4 md:px-10">
        <div className="flex items-center h-20 md:h-28 relative">

          {/* Logo Section - Left Side */}
          <div className="flex-1 flex justify-start items-center">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                <img
                  src={logo}
                  alt="Shreenath Rajwadi"
                  className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start border-l border-gray-300 pl-3 sm:pl-4">
                <span className="font-serif text-[18px] sm:text-[20px] md:text-[24px] font-extrabold text-[#68101e] leading-tight mb-0.5 whitespace-nowrap">
                  Shreenath Rajwadi
                </span>
                <span className="font-sans text-[12px] md:text-[15px] text-[#7a172b]/70 tracking-[0.25em] uppercase font-bold">
                  Silk Palace
                </span>
                <span className="font-sans text-[6px] md:text-[10px] text-[#7a172b]/70 tracking-[0.25em] uppercase font-bold">
                  Pethapur Vala
                </span>
              </div>
            </button>
          </div>

          {/* Nav Links - Absolutely Centered on larger screens */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              <li>
                <button
                  onClick={() => handleNavClick('#home')}
                  className={`px-3 py-2 font-sans text-[15px] xl:text-[16px] tracking-wide transition-all duration-300 rounded-md hover-underline-animation ${isHome
                    ? 'text-[#68101e] font-bold bg-[#68101e]/5'
                    : 'text-gray-700 font-medium hover:text-[#68101e] hover:bg-gray-100/50'
                    }`}
                >
                  Home
                </button>
              </li>

              <li className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 font-sans text-[15px] xl:text-[16px] tracking-wide font-medium transition-all duration-300 rounded-md hover-underline-animation ${location.pathname.startsWith('/sarees')
                    ? 'text-[#68101e] font-bold bg-[#68101e]/5'
                    : 'text-gray-700 group-hover:text-[#68101e] group-hover:bg-gray-100/50'
                    }`}
                >
                  Sarees
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 mt-2 z-[60]">
                  {SAREE_LINKS.map(link => (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href, true)}
                      className="text-left px-5 py-3 rounded-lg font-sans text-[15px] xl:text-[16px] font-medium text-gray-700 hover:text-[#68101e] hover:bg-gray-50 transition-all w-full"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </li>

              {['Chaniya Choli', 'Kids Wear', 'Rajputi Poshak', 'About Us', 'Contact'].map((item) => {
                const href = item === 'About Us' ? '/about' :
                  item === 'Contact' ? '/contact' :
                    `/${item.toLowerCase().replace(' ', '-')}`
                const isActive = location.pathname === href
                return (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick(href, true)}
                      className={`px-3 py-2 font-sans text-[15px] xl:text-[16px] tracking-wide transition-all duration-300 rounded-md hover-underline-animation ${isActive
                        ? 'text-[#68101e] font-bold bg-[#68101e]/5'
                        : 'text-gray-700 font-medium hover:text-[#68101e] hover:bg-gray-100/50'
                        }`}
                    >
                      {item}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Action Buttons - Right Side */}
          <div className="flex-1 flex justify-end items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917600465647"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white rounded-full border border-gray-200 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm"
                title="WhatsApp Us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.456.658 4.762 1.808 6.75L2 30l7.476-1.776A13.922 13.922 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.318 18.876c-.346-.174-2.046-1.006-2.364-1.122-.318-.116-.548-.174-.778.174-.23.348-.894 1.122-1.096 1.352-.202.23-.404.26-.75.086-.346-.174-1.46-.534-2.782-1.706-1.028-.914-1.722-2.04-1.924-2.386-.202-.346-.022-.534.152-.706.156-.154.346-.404.52-.606.172-.202.23-.346.346-.578.116-.23.058-.432-.028-.606-.088-.174-.778-1.876-1.066-2.57-.28-.674-.566-.582-.778-.594-.202-.01-.432-.012-.662-.012s-.606.086-.924.432-1.21 1.182-1.21 2.882 1.238 3.344 1.41 3.574c.172.23 2.436 3.72 5.902 5.216.824.356 1.468.568 1.97.728.826.264 1.578.226 2.172.138.662-.1 2.046-.836 2.336-1.642.29-.806.29-1.498.202-1.642-.086-.144-.316-.23-.662-.404z" /></svg>
              </a>
              <a
                href="tel:+917600465647"
                className="bg-[#68101e] text-white px-5 sm:px-6 py-2.5 rounded-full font-sans font-bold text-[13px] md:text-[14px] tracking-wide hover:bg-[#5b0a18] transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Contact Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 text-[#68101e] hover:bg-[#68101e]/5 rounded-lg transition-colors flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
              <div className={`h-0.5 w-6 bg-[#68101e] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`h-0.5 w-6 bg-[#68101e] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-6 bg-[#68101e] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[90vh] opacity-100 py-6' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-[#68101e]/10 rounded-3xl shadow-[0_20px_50px_rgba(104,16,30,0.15)] overflow-hidden">
            <ul className="flex flex-col p-2">
              <li className="mb-1">
                <button 
                  onClick={() => handleNavClick('#home')} 
                  className={`w-full text-left px-6 py-4 font-sans text-[16px] tracking-wide transition-all rounded-2xl ${
                    location.pathname === '/' ? 'bg-[#68101e]/10 text-[#68101e] font-bold' : 'text-gray-800 font-semibold hover:bg-[#68101e]/5'
                  }`}
                >
                  Home
                </button>
              </li>
              
              <li className="mb-2">
                <div className="px-6 pt-5 pb-2 font-sans text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#68101e]/40">Sarees Collection</div>
                <div className="grid grid-cols-1 gap-1 px-2">
                  {SAREE_LINKS.map(link => (
                    <button 
                      key={link.label} 
                      onClick={() => handleNavClick(link.href, true)} 
                      className="w-full text-left px-4 py-3 font-sans text-[15px] font-medium text-gray-700 hover:text-[#68101e] hover:bg-[#68101e]/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </li>

              <div className="h-px bg-gradient-to-r from-transparent via-[#68101e]/10 to-transparent my-2" />

              {['Chaniya Choli', 'Kids Wear', 'Rajputi Poshak', 'About Us', 'Contact'].map((item) => {
                const href = item === 'About Us' ? '/about' : item === 'Contact' ? '/contact' : `/${item.toLowerCase().replace(' ', '-')}`
                const isActive = location.pathname === href
                return (
                  <li key={item} className="mb-1">
                    <button
                      onClick={() => handleNavClick(href, true)}
                      className={`w-full text-left px-6 py-4 font-sans text-[16px] tracking-wide transition-all rounded-2xl ${
                        isActive ? 'bg-[#68101e]/10 text-[#68101e] font-bold' : 'text-gray-800 font-semibold hover:bg-[#68101e]/5'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                )
              })}

              <li className="mt-4 px-4 pb-4">
                <a
                  href="tel:+917600465647"
                  className="flex items-center justify-center gap-3 bg-[#68101e] text-white py-4 rounded-2xl font-sans font-bold text-base shadow-lg shadow-[#68101e]/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
