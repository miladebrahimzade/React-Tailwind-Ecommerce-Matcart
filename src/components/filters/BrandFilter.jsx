import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function BrandFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeFilter = (e) => {
    let brands = searchParams.get('brands')?.split(',') ?? []
    const value = e.target.value

    if (!brands.includes(value)) {
      brands.push(value)
    } else {
      brands = brands.filter((brand) => brand !== value)
    }

    if (brands.length === 0) {
      searchParams.delete('brands')
    } else {
      searchParams.set('brands', brands.join(','))
    }

    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div>
      <h3 className='text-xl text-gray-800 mb-3 font-medium'>BRANDS</h3>
      <div className='space-y-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='bra-1'
            value='dominik'
            defaultChecked={searchParams.get('brands')?.includes('dominik')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='bra-1' className='text-gray-600 ml-3 cursor-pointer'>
            Dominik
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='bra-2'
            value='karl'
            defaultChecked={searchParams.get('brands')?.includes('karl')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='bra-2' className='text-gray-600 ml-3 cursor-pointer'>
            Karl
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='bra-3'
            value='maxing'
            defaultChecked={searchParams.get('brands')?.includes('maxing')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='bra-3' className='text-gray-600 ml-3 cursor-pointer'>
            Maxing
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='bra-4'
            value='ernest'
            defaultChecked={searchParams.get('brands')?.includes('ernest')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='bra-4' className='text-gray-600 ml-3 cursor-pointer'>
            Ernest
          </label>
        </div>
      </div>
    </div>
  )
}

export default BrandFilter
