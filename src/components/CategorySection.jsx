import React from 'react'
import bedroomCategoryImage from '../assets/category/category-1.jpg'
import mattressesCategoryImage from '../assets/category/category-2.jpg'
import officeCategoryImage from '../assets/category/category-3.jpg'
import outdoorCategoryImage from '../assets/category/category-4.jpg'
import sofasCategoryImage from '../assets/category/category-5.jpg'
import livingCategoryImage from '../assets/category/category-6.jpg'
import { Link } from 'react-router-dom'
function CategorySection() {
  return (
    <div className='container py-16'>
      <h2 className='text-3xl font-medium text-gray-800 mb-6'>
        SHOP BY CATEGORY
      </h2>

      <div className='grid grid-cols-3 gap-3'>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={bedroomCategoryImage} alt='' className='w-full' />
          <Link
            to='/shop?categories=bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Bedroom
          </Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={mattressesCategoryImage} alt='' className='w-full' />
          <a
            href='#'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Mattresses
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={officeCategoryImage} alt='' className='w-full' />
          <Link
            to='/shop?categories=office'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Office
          </Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={outdoorCategoryImage} alt='' className='w-full' />
          <Link
            to='/shop?categories=outdoor'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Outdoor
          </Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={sofasCategoryImage} alt='' className='w-full' />
          <Link
            to='/shop?categories=sofa'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Lounges &amp; Sofas
          </Link>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <img src={livingCategoryImage} alt='' className='w-full' />
          <a
            href='#'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Living &amp; Dining
          </a>
        </div>
      </div>
    </div>
  )
}

export default CategorySection
