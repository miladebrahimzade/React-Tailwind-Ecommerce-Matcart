import React from 'react'
import deliveryVanIcon from '../assets/icons/delivery-van.svg'
import moneyBackIcon from '../assets/icons/money-back.svg'
import serviceHoursIcon from '../assets/icons/service-hours.svg'

function FeatureSection() {
  return (
    <div className='container py-16'>
      <div className='w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center'>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img
            src={deliveryVanIcon}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className='font-medium text-lg cursor-default'>
              Free Shopping
            </h4>
            <p className='text-gray-500 text-sm cursor-default'>
              Order over $200
            </p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img
            src={moneyBackIcon}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className='font-medium text-lg cursor-default'>
              Money Returns
            </h4>
            <p className='text-gray-500 text-sm cursor-default'>
              30 Days money return
            </p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <img
            src={serviceHoursIcon}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className='font-medium text-lg cursor-default'>24/7 Support</h4>
            <p className='text-gray-500 text-sm cursor-default'>
              Customer support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
