import React from 'react'
import { useSearchParams } from 'react-router-dom'

function ColorFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeFilter = (e) => {
    let colors = searchParams.get('colors')?.split(',') ?? []
    const value = e.target.value

    if (!colors.includes(value)) {
      colors.push(value)
    } else {
      colors = colors.filter((color) => color !== value)
    }

    if (colors.length === 0) {
      searchParams.delete('colors')
    } else {
      searchParams.set('colors', colors.join(','))
    }

    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div>
      <h3 className='text-xl text-gray-800 my-3 font-medium'>COLOR</h3>
      <div className='flex items-center gap-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='color-red'
            value='red'
            defaultChecked={searchParams.get('colors')?.includes('red')}
            onChange={changeFilter}
            className=' hidden '
          />
          <div
            className={`p-0.5 border  rounded ${
              searchParams
                .get('colors')
                ?.split(',')
                .find((color) => color === 'red')
                ? '  border-primary'
                : 'border-white'
            }`}
          >
            <label
              htmlFor='color-red'
              className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-primary'
            ></label>
          </div>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='color-white'
            value='white'
            defaultChecked={searchParams.get('colors')?.includes('white')}
            onChange={changeFilter}
            className=' hidden '
          />
          <div
            className={`p-0.5 border rounded ${
              searchParams
                .get('colors')
                ?.split(',')
                .find((color) => color === 'white')
                ? '  border-primary'
                : 'border-white'
            }`}
          >
            <label
              htmlFor='color-white'
              className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-white'
            ></label>
          </div>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='color-black'
            value='black'
            defaultChecked={searchParams.get('colors')?.includes('black')}
            onChange={changeFilter}
            className=' hidden '
          />
          <div
            className={`p-0.5 border rounded ${
              searchParams
                .get('colors')
                ?.split(',')
                .find((color) => color === 'black')
                ? '  border-primary'
                : 'border-white'
            }`}
          >
            <label
              htmlFor='color-black'
              className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-black'
            ></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorFilter
