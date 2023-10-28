import CategoryFilter from './CategoryFilter'
import BrandFilter from './BrandFilter'
import PriceFilter from './PriceFilter'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'

function ShopSidebar() {
  return (
    <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
      <div className='divide-y divide-gray-200 space-y-5'>
        <div className='pt-3'>
          <CategoryFilter />
        </div>
        <div className='pt-4'>
          <BrandFilter />
        </div>
        <div className='pt-4'>
          <PriceFilter />
        </div>

        <div className='pt-4'>
          <SizeFilter />
        </div>

        <div className='pt-4'>
          <ColorFilter />
        </div>
      </div>
    </div>
  )
}

export default ShopSidebar
