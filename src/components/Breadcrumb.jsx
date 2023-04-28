import React from 'react'
import { TfiHome } from 'react-icons/tfi'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <div className='container py-4 flex items-center gap-2'>
      <a href='index.html' className='text-primary text-base'>
        <TfiHome />
      </a>
      <span className='text-base text-gray-500'>
        <FiChevronRight />
      </span>
      <p className='text-gray-600 font-medium'>Shop</p>
    </div>
  )
}

export default Breadcrumb
