import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import ProductContext from '../../context/ProductsContext'

function ProductWrapper({ title }) {
  const { products } = useContext(ProductContext)

  const latestProducts = products.slice(0, 4)

  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 mb-6 uppercase'>
        {title}
      </h2>

      <div className='grid grid-cols-4 gap-6'>
        {latestProducts.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductWrapper
