import { useNavigate } from 'react-router-dom'
import collectionImg from '../assets/collection-showcase-Cu7yi3lY.jpg'

export default function FeaturedProducts() {
  const navigate = useNavigate()
  const features = [
    {
      title: 'Premium Silk Fabrics',
      description: 'Finest quality silk sourced from traditional weavers'
    },
    {
      title: 'Handcrafted Embroidery',
      description: 'Intricate designs created by skilled artisans'
    },
    {
      title: 'Custom Fitting',
      description: 'Personalized alterations for the perfect fit'
    },
    {
      title: 'Heritage Designs',
      description: 'Authentic Rajwadi patterns passed down through generations'
    }
  ]

  return (
    <section id="bridal-collection" className="py-20 md:py-28 bg-[#fdfaf6]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img 
                src={collectionImg} 
                alt="Bridal and Wedding Collection Showcase" 
                className="w-full h-full object-cover transition-transform duration-100 hover:scale-105"
              />
              {/* Optional UI elements overlaying image if needed based on the screenshot, like heart/eye icons bottom right */}
              <div className="absolute bottom-6 right-6 flex gap-3">
                <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#761022] hover:text-[#5b0a18] shadow-lg transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
                <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#761022] hover:text-[#5b0a18] shadow-lg transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#68101e] mb-6 leading-tight">
              Bridal &amp; Wedding Collection
            </h2>
            <p className="font-sans text-gray-700 text-base sm:text-lg mb-10 leading-relaxed pr-0 lg:pr-8">
              Make your special day even more memorable with our exquisite bridal collection. Each piece is carefully crafted with premium silk, intricate embroidery, and traditional motifs that celebrate the beauty of Indian heritage.
            </p>

            <div className="flex flex-col gap-7 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308] mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-[17px] font-bold text-[#111] mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/sarees?filter=wedding')} className="bg-[#761022] hover:bg-[#5b0a18] text-white font-sans text-[15px] font-semibold px-8 py-3.5 rounded-md shadow-md transition-all duration-300 inline-flex justify-center items-center gap-2 hover:-translate-y-0.5">
                View Bridal Collection
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button onClick={() => navigate('/contact')} className="bg-transparent hover:bg-[#761022]/5 text-[#761022] border border-[#761022] font-sans text-[15px] font-semibold px-8 py-3.5 rounded-md transition-all duration-300 text-center hover:-translate-y-0.5">
                Book Consultation
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
