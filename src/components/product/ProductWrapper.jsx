import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import ProductContext from '../../context/ProductsContext'
import { useLocalStorageProducts } from '../../helpers/useLocalStorageProducts'

function ProductWrapper({ title }) {
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useLocalStorageProducts()
  const { filteredProducts } = useContext(ProductContext)

  const latestProducts = filteredProducts.slice(0, 4)

  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 mb-6 uppercase'>
        {title}
      </h2>

      <div className='grid grid-cols-4 gap-6'>
        {latestProducts.map((product) => (
          <Product
            wishlist={wishlist}
            addProductToWishlist={addProductToWishlist}
            removeProductFromWishlist={removeProductFromWishlist}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductWrapper
