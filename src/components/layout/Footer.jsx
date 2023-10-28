import React from 'react'
import logo from '../../assets/logo.svg'
import methods from '../../assets/methods.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className='bg-gray-100 pt-16 pb-12'>
        <div className='container grid grid-cols-3 '>
          {/* <!-- footer text --> */}
          <div className='col-span-1 space-y-8'>
            <img src={logo} alt='' className='w-32' />
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              iste?
            </p>
            <div className='flex space-x-6'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <FaFacebookF />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <FaTwitter />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <FaInstagram />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* <!-- footer text end --> */}

          {/* <!-- footer Links --> */}
          <div className='grid col-span-2 grid-cols-2 gap-8'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col items-center'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 tracking-wider'>
                    SOLUTION
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Analytics
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Insights
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 tracking-wider'>
                    SOLUTION
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Analytics
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Insights
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col items-center'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 tracking-wider'>
                    SOLUTION
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Analytics
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Insights
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 tracking-wider'>
                    SOLUTION
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Analytics
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-600 hover:text-gray-900 block'
                    >
                      Insights
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer Links end --> */}
        </div>
      </div>
      <div className='bg-gray-800 py-4'>
        <div className='container flex items-center justify-between'>
          <p className='text-white'>© MATCART - All Rights Reserved</p>
          <img src={methods} alt='' className='h-5' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
