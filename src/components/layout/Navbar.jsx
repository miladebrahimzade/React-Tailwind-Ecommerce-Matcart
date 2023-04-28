import React from 'react'
import { FaBars } from 'react-icons/fa'
import bedIcon from '../../assets/icons/bed.svg'
import sofaIcon from '../../assets/icons/sofa.svg'
import officeIcon from '../../assets/icons/office.svg'
import outdoorIcon from '../../assets/icons/terrace.svg'
import mattressIcon from '../../assets/icons/bed-2.svg'
import diningIcon from '../../assets/icons/restaurant.svg'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-800'>
      <div className='container flex'>
        <div className='px-8 py-4 bg-primary text-white flex items-center cursor-pointer relative group'>
          <span className='text-white'>
            <FaBars />
          </span>
          <span className='text-white ml-2'>All Categories</span>
          <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 duration-300 invisible group-hover:visible'>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={bedIcon}
                alt='Bedroom'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Bedroom</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={sofaIcon}
                alt='Sofa'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={officeIcon}
                alt='Office'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Office</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={outdoorIcon}
                alt='Outdoor'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Outdoor</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={mattressIcon}
                alt='Mattress'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Mattress</span>
            </a>

            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <img
                src={diningIcon}
                alt='Dining'
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Dining</span>
            </a>
          </div>
        </div>

        <div className='flex items-center justify-between flex-grow pl-12'>
          <div className='flex items-center space-x-2'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `py-4 px-4 text-gray-200 hover:text-white transition  ${
                  isActive && 'bg-gray-700 '
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/shop'
              className={({ isActive }) =>
                `py-4 px-4 text-gray-200 hover:text-white transition  ${
                  isActive && 'bg-gray-700 '
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `py-4 px-4 text-gray-200 hover:text-white transition  ${
                  isActive && 'bg-gray-700 '
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `py-4 px-4 text-gray-200 hover:text-white transition  ${
                  isActive && 'bg-gray-700 '
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
          <NavLink
            to='/login'
            className='py-4 px-4 text-gray-200 hover:text-white transition'
          >
            Login / Register
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
