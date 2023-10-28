import React from 'react'
import { TfiHome } from 'react-icons/tfi'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Breadcrumb({ route }) {
  return (
    <div className='container py-4 flex items-center gap-2'>
      <Link to='/' className='text-gray-600 hover:text-primary text-base'>
        <TfiHome />
      </Link>
      <span className='text-base text-gray-500'>
        <FiChevronRight />
      </span>
      <Link to={`/${route.path}`} className='text-primary text-base'>
        <span className='text-gray-600 hover:text-primary transition'>
          {route.title}
        </span>
      </Link>
    </div>
  )
}

export default Breadcrumb
