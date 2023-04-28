import React from 'react'
import { TfiHeart, TfiSearch } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
import { useContext } from 'react'
import WishlistContext from '../../context/WishlistContext'
import ShoppingCardContext from '../../context/ShoppingCardContext'
import { Link } from 'react-router-dom'

function Product({ item }) {
  const { addToWishlist } = useContext(WishlistContext)

  const { addToCardItem } = useContext(ShoppingCardContext)

  return (
    <div className='bg-white shadow rounded overflow-hidden group'>
      <div className='relative'>
        <img
          src={process.env.PUBLIC_URL + `/img/products/${item.image}.jpg`}
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
            onClick={addToWishlist}
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
          >
            <TfiHeart />
          </button>
        </div>
      </div>

      <div className='pt-4 pb-3 px-4'>
        <Link to='/product-detail'>
          <h4 className='font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
            {item.name}
          </h4>
        </Link>
        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
          {item.discount !== 0 ? (
            <>
              <p className='text-xl text-primary font-semibold'>
                ${item.discount.toFixed(2)}
              </p>
              <p className='text-sm text-gray-400 line-through'>
                ${item.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className='text-xl text-primary font-semibold'>
              ${item.price.toFixed(2)}
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
          <div className='text-xs text-gray-500 ml-3'>({item.reviews})</div>
        </div>
      </div>
      <button
        onClick={addToCardItem}
        className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
      >
        Add to cart
      </button>
    </div>
  )
}

export default Product
