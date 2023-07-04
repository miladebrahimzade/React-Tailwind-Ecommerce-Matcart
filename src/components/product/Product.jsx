import { TfiHeart, TfiSearch } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Product({
  cart,
  addProductToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
  product,
  wishlist,
  addProductToWishlist,
  removeProductFromWishlist,
}) {
  const wishedProduct = wishlist.some((item) => item.id === product.id)
  const cartProduct = cart.find((item) => item.id === product.id)

  const handleAddToWishlist = () => {
    if (wishedProduct) {
      removeProductFromWishlist(product.id)
    } else {
      addProductToWishlist(product)
    }
  }
  const handleAddToCart = () => {
    if (cartProduct) {
      removeProductFromCart(product.id)
    } else {
      addProductToCart(product)
    }
  }

  const handleDecrement = () => {
    if (cartProduct.count > 1) decrementProductQuantity(product.id)
    else removeProductFromCart(product.id)
  }
  const handleIncrement = () => {
    incrementProductQuantity(product.id)
  }

  return (
    <div className='bg-white shadow rounded overflow-hidden group'>
      <div className='relative'>
        <img
          src={process.env.PUBLIC_URL + `/img/products/${product.image}.jpg`}
          alt=''
          className='w-full'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
          <Link
            to='/product-detail'
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
          >
            <TfiSearch />
          </Link>
          <button
            onClick={handleAddToWishlist}
            className={`text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ${
              wishedProduct ? ' bg-gray-600' : ' bg-primary'
            }`}
          >
            <TfiHeart />
          </button>
        </div>
      </div>

      <div className='pt-4 pb-3 px-4'>
        <Link to='/product-detail'>
          <h4 className='font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
            {product.name}
          </h4>
        </Link>
        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
          {product.discount !== 0 ? (
            <>
              <p className='text-xl text-primary font-semibold'>
                ${product.discount.toFixed(2)}
              </p>
              <p className='text-sm text-gray-400 line-through'>
                ${product.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className='text-xl text-primary font-semibold'>
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>
        <div className='flex items-center'>
          <div className='flex gap-1 text-sm text-yellow-400'>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div className='text-xs text-gray-500 ml-3'>({product.reviews})</div>
        </div>
      </div>
      {cartProduct ? (
        <div className='col-span-3 flex justify-center items-center'>
          <button
            className='px-3 py-1 border hover:bg-gray-200'
            onClick={handleDecrement}
          >
            -
          </button>
          <div className='w-full text-center py-1 border-y outline-none'>
            {cartProduct.count}
          </div>
          <button
            className='px-3 py-1 border hover:bg-gray-200'
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
        >
          Add to cart
        </button>
      )}
    </div>
  )
}

export default Product
