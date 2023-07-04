import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useLocalStorageCart } from '../../../helpers/useLocalStorageCart'

function CartIcon() {
  const { cart } = useLocalStorageCart()

  return (
    <Link
      to='/shopping-cart'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl cursor-pointer'>
        <AiOutlineShoppingCart />
      </div>
      <div className='text-xs leading-3 cursor-pointer'>Cart</div>
      {cart.length > 0 && (
        <span className='absolute -right-2 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
          {cart.length}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
