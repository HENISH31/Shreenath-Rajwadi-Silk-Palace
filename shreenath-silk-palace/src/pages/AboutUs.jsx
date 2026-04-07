import { useEffect } from 'react'
import aboutImg from '../../Saree/About us/image 1.jpeg'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
  }, [])

  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-[#fcfcfc]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-20">
        
        {/* Main Title */}
        <div className="mb-12 md:mb-16 reveal">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a1c24]">
            About Us
          </h1>
        </div>

        {/* Heritage Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-24 reveal" style={{ transitionDelay: '100ms' }}>
          
          <div className="flex-1 w-full order-2 lg:order-1">
            <h2 className="font-serif text-2xl md:text-[28px] font-semibold text-[#3a111a] mb-6">
              Our Heritage
            </h2>
            <p className="font-sans text-[15px] md:text-base text-[#786366] leading-relaxed mb-6">
              Shreenath Rajwadi Silk Palace has been a trusted name in traditional Indian attire for over three decades. Founded with a passion for preserving the rich textile heritage of India, we have grown to become one of the premier destinations for authentic and high-quality ethnic wear.
            </p>
            <p className="font-sans text-[15px] md:text-base text-[#786366] leading-relaxed">
              Our journey began in the heart of Gujarat, where we started as a small family business dedicated to showcasing the exquisite craftsmanship of local artisans. Today, we proudly offer a diverse collection that celebrates the cultural diversity and artistic traditions of India.
            </p>
          </div>

          <div className="flex-1 w-full order-1 lg:order-2">
            <img 
              src={aboutImg} 
              alt="Our Heritage" 
              className="w-full h-auto aspect-video md:aspect-[16/9] lg:aspect-auto xl:aspect-[16/10] object-cover rounded-md shadow-md hover:shadow-xl transition-shadow duration-500"
            />
          </div>

        </div>

        {/* Values Section */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <h2 className="font-serif text-2xl md:text-[32px] font-semibold text-[#3a111a] text-center mb-10 md:mb-14">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-xl font-medium text-[#4a1c24] mb-4">
                Quality
              </h3>
              <p className="font-sans text-[15px] text-[#786366] leading-relaxed">
                We are committed to offering only the finest quality fabrics and craftsmanship in all our products.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-xl font-medium text-[#4a1c24] mb-4">
                Authenticity
              </h3>
              <p className="font-sans text-[15px] text-[#786366] leading-relaxed">
                We take pride in preserving authentic traditional designs while embracing contemporary styles.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-serif text-xl font-medium text-[#4a1c24] mb-4">
                Customer Service
              </h3>
              <p className="font-sans text-[15px] text-[#786366] leading-relaxed">
                We believe in building lasting relationships with our customers through exceptional service.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
