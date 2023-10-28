import Product from './Product'
import { useLocalStorageWishlist } from '../../helpers/useLocalStorageWishlist'
import { useLocalStorageCart } from '../../helpers/useLocalStorageCart'
import { useSelector } from 'react-redux'

function ProductWrapper({ title }) {
  const {
    cart,
    addProductToCart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
  } = useLocalStorageCart()
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useLocalStorageWishlist()

  const { filteredProducts } = useSelector((store) => store.products)
  const latestProducts = filteredProducts.slice(0, 4)

  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 mb-6 uppercase'>
        {title}
      </h2>

      <div className='grid grid-cols-4 gap-6'>
        {latestProducts.map((product) => (
          <Product
            cart={cart}
            addProductToCart={addProductToCart}
            incrementProductQuantity={incrementProductQuantity}
            decrementProductQuantity={decrementProductQuantity}
            removeProductFromCart={removeProductFromCart}
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
