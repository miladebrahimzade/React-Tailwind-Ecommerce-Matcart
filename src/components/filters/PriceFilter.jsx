import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeFilter = (e) => {
    let price = searchParams.get('price')?.split(',') ?? []
    const value = e.target.value

    if (!price.includes(value)) {
      price.push(value)
    } else {
      price = price.filter((item) => item !== value)
    }

    if (price.length === 0) {
      searchParams.delete('price')
    } else {
      searchParams.set('price', price.join(','))
    }

    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div>
      <h3 className='text-xl text-gray-800 my-3 font-medium'>PRICE</h3>
      <div className='mt-4 flex items-center'>
        <input
          type='text'
          defaultValue={searchParams.get('sizes')?.includes('min')}
          onKeyPress={console.log('hi')}
          className='w-full border border-gray-300 focus:border-primary outline-none px-3 py-1 text-gray-600 text-sm rounded'
          placeholder='min'
        />
        <span className='mx-3 text-gray-500'>-</span>
        <input
          type='text'
          className='w-full border border-gray-300 focus:border-primary outline-none px-3 py-1 text-gray-600 text-sm rounded'
          placeholder='max'
        />
      </div>
    </div>
  )
}

export default PriceFilter
