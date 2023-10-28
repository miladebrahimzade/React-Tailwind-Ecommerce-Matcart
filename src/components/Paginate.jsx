import React from 'react'

function Paginate({ productsPerPage, totalProducts, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='flex justify-center space-x-2 mt-8'>
      {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => paginate(number)}
          className='w-8 h-8 leading-8 text-base text-center transition border border-gray-300 cursor-pointer hover:bg-primary hover:text-white hover:border-primary'
        >
          {number}
        </div>
      ))}
    </div>
  )
}

export default Paginate
