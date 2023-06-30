import heroBackground from '../../assets/banner-bg.jpg'
import { TfiTrash } from 'react-icons/tfi'

function Item() {
  return (
    <div className='p-6 grid grid-cols-12 justify-between items-center border rounded space-x-4'>
      <div className='col-span-6 flex justify-center items-center space-x-4'>
        <div className='w-24 h-24'>
          <img
            src={heroBackground}
            alt='product-1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h2 className='font-medium uppercase hover:text-primary transition cursor-pointer'>
            Casual usb charging laptop backpacks
          </h2>
          <div className='text-sm font-semibold text-primary '>$45.00</div>
          <div className=''>Size: M</div>
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-center'>
        <button className='px-3 py-1 border hover:bg-gray-200 '>-</button>
        <input
          className='w-10 text-center py-1 border-y outline-none'
          placeholder='4'
        />
        <button className='px-3 py-1 border hover:bg-gray-200'>+</button>
      </div>
      <div className='col-span-2 flex justify-center items-center'>
        <div className='text-primary font-bold '>$45.00</div>
      </div>
      <div className='col-span-1 flex justify-center items-center '>
        <TfiTrash className='hover:text-primary transition cursor-pointer' />
      </div>
    </div>
  )
}

export default Item
