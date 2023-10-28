import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TfiTrash } from 'react-icons/tfi'
import Button from '../shared/Button'

function Item({
  cart,
  product,
  addProductToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
  removeProductFromWishlist,
}) {
  const cartProduct = cart.find((item) => item.id === product.id)

  const handleAddToCart = () => {
    addProductToCart(product)
  }

  const handleDecrement = () => {
    if (cartProduct.count > 1) decrementProductQuantity(product.id)
    else removeProductFromCart(product.id)
  }
  const handleIncrement = () => {
    incrementProductQuantity(product.id)
  }

  return (
    <div className='grid grid-cols-8 items-center p-6 border rounded space-x-4'>
      <div className='col-span-4 flex items-center space-x-4'>
        <div className='w-24 h-24'>
          <img
            src={process.env.PUBLIC_URL + `/img/products/${product.image}.jpg`}
            alt='product-1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <div className='font-medium uppercase hover:text-primary transition cursor-pointer'>
            {product.name}
          </div>
          <div className='text-sm'>
            Availability: <span className='text-green-600'>In Stock</span>
          </div>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='text-primary font-bold'>
          $
          {product.discount
            ? (
                product.discount * (cartProduct ? cartProduct.count : 1)
              ).toFixed(2)
            : (product.price * (cartProduct ? cartProduct.count : 1)).toFixed(
                2
              )}
        </div>
      </div>
      {cartProduct ? (
        <div className='col-span-2 flex justify-center items-center'>
          <button
            className='px-3 py-1 border hover:bg-gray-200'
            onClick={handleDecrement}
          >
            -
          </button>
          <div className='w-10 text-center py-1 border-y outline-none'>
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
        <div className='col-span-2'>
          <Button icon={<AiOutlineShoppingCart />} onClick={handleAddToCart}>
            Add to Card
          </Button>
        </div>
      )}
      <div className='col-span-1 flex justify-center items-center '>
        <TfiTrash
          className='text-lg hover:text-primary transition cursor-pointer'
          onClick={() => removeProductFromWishlist(product.id)}
        />
      </div>
    </div>
  )
}

export default Item
