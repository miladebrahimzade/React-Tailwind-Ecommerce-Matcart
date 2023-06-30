import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TfiTrash } from 'react-icons/tfi'
import Button from '../shared/Button'
import heroBackground from '../../assets/banner-bg.jpg'

function Item() {
  return (
    <div className='p-6 flex justify-between items-center border rounded space-x-4'>
      <div className='flex items-center space-x-4'>
        <div className='w-24 h-24'>
          <img
            src={heroBackground}
            alt='product-1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <div className='font-medium uppercase hover:text-primary transition cursor-pointer'>
            Casual usb charging laptop backpacks
          </div>
          <div className='text-sm'>
            Availability: <span className='text-green-600'>In Stock</span>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='text-primary font-bold'>$45.00</div>
        <Button>
          <div className='flex items-center space-x-2'>
            <AiOutlineShoppingCart />
            <span>Add to Card</span>
          </div>
        </Button>
        <TfiTrash className='hover:text-primary transition cursor-pointer' />
      </div>
    </div>
  )
}

export default Item
