import { useNavigate } from 'react-router-dom'

export default function Gallery() {
  const navigate = useNavigate()
  return (
    <section id="about" className="py-20 md:py-28 bg-[#fdfaf6]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Story & Stats */}
          <div className="w-full lg:w-[45%] lg:pr-8 reveal">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#68101e] mb-6">
              Our Heritage Story
            </h2>
            <p className="font-sans text-gray-600 text-[15px] sm:text-base leading-relaxed mb-6">
              For over three decades, Shreenath Rajwadi Silk Palace has been the epitome of traditional Indian elegance in Pethapur. Founded with a vision to preserve and celebrate the rich heritage of Rajwadi craftsmanship, we have dressed generations of women in the finest silk sarees and traditional wear.
            </p>
            <p className="font-sans text-gray-600 text-[15px] sm:text-base leading-relaxed mb-10">
              Every piece in our collection tells a story of skilled artisans, premium fabrics, and timeless designs that have been perfected over centuries. We take pride in being the bridge between traditional craftsmanship and contemporary fashion.
            </p>

            <div className="flex flex-wrap items-center justify-between sm:justify-start sm:gap-12 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#761022] flex items-center justify-center text-white mb-3 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4a1c24]">35<span className="text-xl">+</span></h3>
                <p className="font-sans text-[13px] text-gray-500">Years Legacy</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#761022] flex items-center justify-center text-white mb-3 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4a1c24]">5000<span className="text-xl">+</span></h3>
                <p className="font-sans text-[13px] text-gray-500">Happy Customers</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#761022] flex items-center justify-center text-white mb-3 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4a1c24]">100<span className="text-xl">+</span></h3>
                <p className="font-sans text-[13px] text-gray-500">Designer Collections</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/about')}
              className="bg-[#761022] hover:bg-[#5b0a18] text-white font-sans text-base font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 inline-flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(118,16,34,0.3)]"
            >
              Read Our Full Story
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          {/* Right Side: Cards */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 reveal" style={{ transitionDelay: '200ms' }}>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#eab308] text-white p-3.5 rounded-xl flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#68101e] mb-2">Royal Quality</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Every piece is crafted with the finest materials and attention to detail that befits royalty, ensuring you feel like a queen.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#eab308] text-white p-3.5 rounded-xl flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#68101e] mb-2">Personal Service</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Our experienced team provides personalized styling advice and custom fitting services to ensure the perfect look for every occasion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#eab308] text-white p-3.5 rounded-xl flex-shrink-0 mt-1 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#68101e] mb-2">Authentic Heritage</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  We preserve traditional Rajwadi techniques while embracing contemporary designs, creating timeless pieces for the modern woman.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
