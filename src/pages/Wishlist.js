import Breadcrumb from '../components/Breadcrumb'
import Avatar from '../assets/banner-bg.jpg'
import { AiOutlineIdcard, AiOutlineGift } from 'react-icons/ai'
import { SlCreditCard } from 'react-icons/sl'
import { TfiHeart } from 'react-icons/tfi'
import { RiShutDownLine } from 'react-icons/ri'
import { useLocalStorageWishlist } from '../helpers/useLocalStorageWishlist'
import { useLocalStorageCart } from '../helpers/useLocalStorageCart'

import Item from '../components/wishlist/Item'

function Wishlist() {
  const { wishlist, removeProductFromWishlist } = useLocalStorageWishlist()

  const {
    cart,
    addProductToCart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
  } = useLocalStorageCart()

  return (
    <>
      <Breadcrumb route={{ path: 'wishlist', title: 'Wishlist' }} />

      <div className='container grid grid-cols-4 gap-6  mb-12'>
        {/* Left Section */}
        <div className='col-span-1 space-y-5 bg-white'>
          <div className='px-4 py-2 shadow-md rounded flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full border b border-gray-300 '>
              <img
                className='p-1 w-full h-full rounded-full object-cover'
                src={Avatar}
                alt='user-avatar'
              />
            </div>
            <div>
              <div className='text-sm'>Hello,</div>
              <div className='text-sm font-semibold'>UserName</div>
            </div>
          </div>
          <div className='px-4 py-4 shadow-md rounded items-center bg-white space-y-4 divide-y divide-gray-200 '>
            <div>
              <div className='flex space-x-2 mb-1 hover:text-primary transition cursor-pointer'>
                <AiOutlineIdcard className='text-2xl ' />
                <div className='font-medium  cursor-pointer'>
                  Manage My Account
                </div>
              </div>
              <div className='ml-8'>
                <ul className='space-y-2 text-sm cursor-pointer'>
                  <li className='text-gray-600 hover:text-primary transition'>
                    Profile Information
                  </li>
                  <li className='text-gray-600 hover:text-primary transition'>
                    Manage Address
                  </li>
                  <li className='text-gray-600 hover:text-primary transition'>
                    Change Password
                  </li>
                </ul>
              </div>
            </div>
            <div className='pt-4'>
              <div className='flex space-x-2 mb-1 hover:text-primary transition cursor-pointer'>
                <AiOutlineGift className='text-2xl ' />
                <div className='font-medium  cursor-pointer'>
                  My Order history
                </div>
              </div>
              <div className='ml-8'>
                <ul className='space-y-2 text-sm cursor-pointer'>
                  <li className='text-gray-600 hover:text-primary transition'>
                    My Returns
                  </li>
                  <li className='text-gray-600 hover:text-primary transition'>
                    My Cancellations
                  </li>
                  <li className='text-gray-600 hover:text-primary transition'>
                    My Reviews
                  </li>
                </ul>
              </div>
            </div>
            <div className='pt-4'>
              <div className='flex space-x-2 mb-1 hover:text-primary transition cursor-pointer'>
                <SlCreditCard className='text-2xl ' />
                <div className='font-medium  cursor-pointer'>
                  Payment Methods
                </div>
              </div>
              <div className='ml-8'>
                <ul className='space-y-2 text-sm cursor-pointer'>
                  <li className='text-gray-600 hover:text-primary transition'>
                    Voucher
                  </li>
                </ul>
              </div>
            </div>
            <div className='pt-4'>
              <div className='flex space-x-2 mb-1 hover:text-primary transition cursor-pointer'>
                <TfiHeart className='text-2xl ' />
                <div className='font-medium  cursor-pointer'>My Wishlist</div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='flex space-x-2 mb-1 hover:text-primary transition cursor-pointer'>
                <RiShutDownLine className='text-2xl ' />
                <div className='font-medium  cursor-pointer'>Log Out</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        {wishlist.length > 0 && (
          <div className='col-span-3 space-y-4'>
            {wishlist.map((product) => (
              <Item
                key={product.id}
                product={product}
                cart={cart}
                addProductToCart={addProductToCart}
                incrementProductQuantity={incrementProductQuantity}
                decrementProductQuantity={decrementProductQuantity}
                removeProductFromCart={removeProductFromCart}
                removeProductFromWishlist={removeProductFromWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist
