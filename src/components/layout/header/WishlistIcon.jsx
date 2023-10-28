import { TfiHeart } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { useLocalStorageWishlist } from '../../../helpers/useLocalStorageWishlist'

function WishlistIcon() {
  const { wishlist } = useLocalStorageWishlist()
  return (
    <Link
      to='/wishlist'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl cursor-pointer'>
        <TfiHeart />
      </div>
      <div className='text-xs leading-3 cursor-pointer'>Wish List</div>
      {wishlist.length > 0 && (
        <span className='absolute right-0 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
          {wishlist.length}
        </span>
      )}
    </Link>
  )
}

export default WishlistIcon
