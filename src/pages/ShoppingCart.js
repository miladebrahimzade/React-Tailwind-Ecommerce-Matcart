import Breadcrumb from '../components/Breadcrumb'

import Button from '../components/shared/Button'
import Item from '../components/shopping-cart/Item'
import { useLocalStorageCart } from '../helpers/useLocalStorageCart'

function ShoppingCart() {
  const {
    cart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
  } = useLocalStorageCart()

  const subtotal = cart.reduce((add, item) => {
    const totalProductPrice =
      item.count * (item.discount ? item.discount : item.price)
    return add + totalProductPrice
  }, 0)

  // If I needed to add delivery and tax cost
  const delivery = 0
  const tax = 0

  const total = subtotal + delivery + tax

  return (
    <>
      <Breadcrumb route={{ path: 'shopping-cart', title: 'Shopping Cart' }} />

      <div className='container grid grid-cols-4 gap-6  mb-12'>
        {/* left Section */}
        <div className='col-span-3 space-y-4'>
          <div className='grid grid-cols-12 py-2 text-center bg-gray-200 font-medium'>
            <div className='col-span-6'>Product</div>
            <div className='col-span-3'>Quantity</div>
            <div className='col-span-2'>Total Price</div>
            <div className='col-span-1'></div>
          </div>
          {cart.map((product) => (
            <Item
              key={product.id}
              product={product}
              incrementProductQuantity={incrementProductQuantity}
              decrementProductQuantity={decrementProductQuantity}
              removeProductFromCart={removeProductFromCart}
            />
          ))}
        </div>
        {/* Right section */}
        <div className='col-span-1 p-4 border rounded'>
          <div className='mb-4'>
            <div className='font-semibold uppercase mb-2'>Order Summary</div>
            <div className='w-full divide-y divide-gray-200'>
              <div className='space-y-2 mb-2'>
                <div className='flex justify-between font-medium'>
                  <span>Subtotal</span>
                  <span>$ {subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Delivery</span>
                  <span>{delivery ? '$' + delivery.toFixed(2) : 'Free'}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Tax</span>
                  <span>{tax ? '$' + tax.toFixed(2) : 'Free'}</span>
                </div>
              </div>
              <div className='flex justify-between pt-2 font-semibold'>
                <span className='uppercase'>Total:</span>
                <span>$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className='w-full max-w-xl flex mb-6'>
            <input
              type='text'
              placeholder='Enter coupon'
              className='w-full text-sm border  border-r-0 pl-2 py-2 rounded-l-md focus:outline-none'
            />
            <button className='border text-white  hover:bg-white transition bg-primary border-primary  hover:text-primary  px-4 py-2 rounded text-sm rounded-l-none uppercase'>
              Apply
            </button>
          </div>
          <Button classes='w-full'>Process to checkout</Button>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
