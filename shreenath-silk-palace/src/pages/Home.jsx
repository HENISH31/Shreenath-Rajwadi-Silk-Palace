import Hero             from '../components/Hero'
import FeaturesBanner   from '../components/FeaturesBanner'
import Categories       from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Gallery          from '../components/Gallery'

import Testimonials     from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesBanner />
      <Categories />
      <FeaturedProducts />
      <Gallery />
      <Testimonials />
    </main>
  )
}
