import React from 'react'
import Hero from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import FeatureSection from '../components/FeatureSection'
import ProductWrapper from '../components/product/ProductWrapper'

function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <CategorySection />
      <ProductWrapper title='Top new arrival' />
      <ProductWrapper title='Latest products' />
    </>
  )
}

export default Home
