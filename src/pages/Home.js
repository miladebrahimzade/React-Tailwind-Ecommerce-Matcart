import React, { useState } from 'react'
import Hero from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import FeatureSection from '../components/FeatureSection'
import ProductWrapper from '../components/product/ProductWrapper'
import Modal from '../components/Modal'

function Home() {
  const [modalPopup, setModalPopup] = useState(true)
  const onClose = () => {
    setModalPopup(false)
  }

  return (
    <>
      <Hero />
      <FeatureSection />
      <CategorySection />
      <ProductWrapper title='Top new arrival' />
      {/* <ProductWrapper title='Latest products' /> */}
      <Modal modalPopup={modalPopup} onClose={() => onClose()} />
    </>
  )
}

export default Home
