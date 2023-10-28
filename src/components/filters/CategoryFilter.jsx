import React from 'react'
import { useSearchParams } from 'react-router-dom'

function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeFilter = (e) => {
    let categories = searchParams.get('categories')?.split(',') ?? []
    const value = e.target.value

    if (!categories.includes(value)) {
      categories.push(value)
    } else {
      categories = categories.filter((category) => category !== value)
    }

    if (categories.length === 0) {
      searchParams.delete('categories')
    } else {
      searchParams.set('categories', categories.join(','))
    }

    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div>
      <h3 className='text-xl text-gray-800 mb-3 font-medium'>CATEGORIES</h3>
      <div className='space-y-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='cat-1'
            value='bedroom'
            defaultChecked={searchParams.get('categories')?.includes('bedroom')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='cat-1' className='text-gray-600 ml-3 cursor-pointer'>
            Bedroom
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='cat-2'
            value='sofa'
            defaultChecked={searchParams.get('categories')?.includes('sofa')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='cat-2' className='text-gray-600 ml-3 cursor-pointer'>
            Sofa
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='cat-3'
            value='office'
            defaultChecked={searchParams.get('categories')?.includes('office')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='cat-3' className='text-gray-600 ml-3 cursor-pointer'>
            Office
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='cat-4'
            value='outdoor'
            defaultChecked={searchParams.get('categories')?.includes('outdoor')}
            onChange={changeFilter}
            className='accent-primary cursor-pointer'
          />
          <label htmlFor='cat-4' className='text-gray-600 ml-3 cursor-pointer'>
            Outdoor
          </label>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
