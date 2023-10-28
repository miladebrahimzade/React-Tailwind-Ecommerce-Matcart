import { useState, useEffect } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

function PriceFilter() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  const [minPrice, setMinPrice] = useState(+searchParams.get('minPrice') || '')
  const [maxPrice, setMaxPrice] = useState(+searchParams.get('maxPrice') || '')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (minPrice && minPrice !== 0) {
      searchParams.set('minPrice', minPrice)
    } else {
      searchParams.delete('minPrice')
    }
    if (maxPrice && maxPrice !== 0) {
      searchParams.set('maxPrice', maxPrice)
    } else {
      searchParams.delete('maxPrice')
    }

    setSearchParams(searchParams, { replace: true })
  }, [minPrice, maxPrice, setSearchParams, location.search])

  return (
    <div>
      <h3 className='text-xl text-gray-800 my-3 font-medium'>PRICE</h3>
      <div className='mt-4 flex items-center'>
        <input
          type='number'
          defaultValue={+searchParams.get('minPrice') || ''}
          onBlur={(e) => {
            setMinPrice(+e.target.value)
          }}
          className='w-full border border-gray-300 focus:border-primary outline-none px-3 py-1 text-gray-600 text-sm rounded'
          placeholder='min'
        />
        <span className='mx-3 text-gray-500'>-</span>
        <input
          type='number'
          defaultValue={+searchParams.get('maxPrice') || ''}
          onBlur={(e) => {
            setMaxPrice(+e.target.value)
          }}
          className='w-full border border-gray-300 focus:border-primary outline-none px-3 py-1 text-gray-600 text-sm rounded'
          placeholder='max'
        />
      </div>
    </div>
  )
}

export default PriceFilter
