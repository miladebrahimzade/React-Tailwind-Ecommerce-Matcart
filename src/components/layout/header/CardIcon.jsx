import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react'
import ShoppingCardContext from '../../../context/ShoppingCardContext'
import { Link } from 'react-router-dom'

function CardIcon() {
  const { cardItem } = useContext(ShoppingCardContext)

  return (
    <Link
      to='/card'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <AiOutlineShoppingCart />
      </div>
      <div className='text-xs leading-3'>Card</div>
      <span className='absolute -right-2 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
        {cardItem}
      </span>
    </Link>
  )
}

export default CardIcon
