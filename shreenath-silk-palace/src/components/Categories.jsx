import { useNavigate } from 'react-router-dom'
import sareesImg from '../assets/sarees-category-BCy88Wdv.jpg'
import chaniyaImg from '../assets/chaniya-choli-category-DXnyMcxN.jpg'
import kidsImg from '../assets/kids-category-BGfRWwRE.jpg'
import rajputiImg from '../assets/rajputi-category-DVp4yhn2.jpg'

export default function Categories() {
  const navigate = useNavigate()
  const categories = [
    {
      id: 1,
      name: 'Designer Sarees',
      description: 'Exquisite designer and silk sarees for every occasion',
      image: sareesImg,
      href: '/sarees',
    },
    {
      id: 2,
      name: 'Chaniya Choli',
      description: 'Traditional and contemporary chaniya choli sets',
      image: chaniyaImg,
      href: '/chaniya-choli',
    },
    {
      id: 3,
      name: 'Kids Collection',
      description: 'Adorable traditional wear for little ones',
      image: kidsImg,
      href: '/kids-wear',
    },
    {
      id: 4,
      name: 'Rajputi Poshak',
      description: 'Royal Rajputi dresses with authentic heritage designs',
      image: rajputiImg,
      href: '/rajputi-poshak',
    },
  ]

  return (
    <section id="categories" className="py-20 md:py-28 bg-[#fdfaf6]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-[#68101e] mb-5">
            Shop by Category
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#68101e]/80 max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated collections of traditional Indian wear, each piece reflecting the rich heritage of Rajwadi craftsmanship.
          </p>
        </div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              onClick={() => navigate(cat.href)}
              className="reveal relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] group shadow-md cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-serif text-2xl font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                  {cat.name}
                </h3>
                <p className="text-white/90 font-sans text-sm mb-6 leading-snug lg:line-clamp-2">
                  {cat.description}
                </p>
                <button className="cta self-start mt-3">
                  <span className="cta-underline font-sans">Explore Now</span>
                  <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16 reveal">
          <button
            onClick={() => navigate('/sarees')}
            className="group bg-[#761022] hover:bg-[#5b0a18] text-white font-sans text-lg sm:text-xl font-bold px-10 py-5 rounded-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(118,16,34,0.4)]"
          >
            View All Collections
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </section>
  )
}
