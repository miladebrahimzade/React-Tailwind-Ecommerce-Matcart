import { useSearchParams } from 'react-router-dom'

function SizeFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeFilter = (e) => {
    let sizes = searchParams.get('sizes')?.split(',') ?? []
    const value = e.target.value

    if (!sizes.includes(value)) {
      sizes.push(value)
    } else {
      sizes = sizes.filter((size) => size !== value)
    }

    if (sizes.length === 0) {
      searchParams.delete('sizes')
    } else {
      searchParams.set('sizes', sizes.join(','))
    }

    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div>
      <h3 className='text-xl text-gray-800 mb-3 font-medium'>SIZE</h3>
      <div className='flex items-center gap-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='size-xs'
            value='xs'
            defaultChecked={searchParams.get('sizes')?.includes('xs')}
            onChange={changeFilter}
            className=' hidden '
          />
          <label
            htmlFor='size-xs'
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
              searchParams
                .get('sizes')
                ?.split(',')
                .find((size) => size === 'xs')
                ? 'bg-primary text-white border-none'
                : 'text-gray-600'
            }`}
          >
            XS
          </label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='size-s'
            value='s'
            defaultChecked={searchParams.get('sizes')?.includes('s')}
            onChange={changeFilter}
            className=' hidden '
          />
          <label
            htmlFor='size-s'
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
              searchParams
                .get('sizes')
                ?.split(',')
                .find((size) => size === 's')
                ? 'bg-primary text-white border-none'
                : 'text-gray-600'
            }`}
          >
            S
          </label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='size-m'
            value='m'
            defaultChecked={searchParams.get('sizes')?.includes('m')}
            onChange={changeFilter}
            className=' hidden '
          />
          <label
            htmlFor='size-m'
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
              searchParams
                .get('sizes')
                ?.split(',')
                .find((size) => size === 'm')
                ? 'bg-primary text-white border-none'
                : 'text-gray-600'
            }`}
          >
            M
          </label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='size-l'
            value='l'
            defaultChecked={searchParams.get('sizes')?.includes('l')}
            onChange={changeFilter}
            className=' hidden '
          />
          <label
            htmlFor='size-l'
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
              searchParams
                .get('sizes')
                ?.split(',')
                .find((size) => size === 'l')
                ? 'bg-primary text-white border-none'
                : 'text-gray-600'
            }`}
          >
            L
          </label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='size-xl'
            value='xl'
            defaultChecked={searchParams.get('sizes')?.includes('xl')}
            onChange={changeFilter}
            className=' hidden '
          />
          <label
            htmlFor='size-xl'
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
              searchParams
                .get('sizes')
                ?.split(',')
                .find((size) => size === 'xl')
                ? 'bg-primary text-white border-none'
                : 'text-gray-600'
            }`}
          >
            XL
          </label>
        </div>
      </div>
    </div>
  )
}

export default SizeFilter
