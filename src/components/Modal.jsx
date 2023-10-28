import React from 'react'
import offerImage from '../assets/popup-bg.jpg'
import { RxCross2 } from 'react-icons/rx'

function Modal({ modalPopup, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === 'offer-modal') {
      onClose()
    }
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    const email = e.target.email.value

    onClose()
  }

  if (!modalPopup) return null
  return (
    <div
      id='offer-modal'
      onClick={handleOnClose}
      className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='relative bg-white rounded-md px-6 py-4 space-x-5 grid grid-cols-5 max-w-2xl'>
        <div className='col-span-3 flex flex-col  justify-center  items-center space-y-4'>
          <div className='text-4xl uppercase font-medium'>
            Get <span className='text-primary'>30%</span> off
          </div>
          <div className='text-center text-gray-800'>
            Subscribe to the newsletter to receive updates about new products.
          </div>
          <form className='flex w-full' onSubmit={handleSubscribe}>
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              className='pl-5 text-sm border border-primary rounded-l w-full outline-none'
            />
            <button
              type='submit'
              className='py-3 px-5 text-md text-white bg-primary uppercase font-medium rounded-r'
            >
              Subscribe
            </button>
          </form>
          <div className='flex space-x-3'>
            <input
              type='checkbox'
              id='show-again'
              className=' rounded-sm accent-primary'
            />
            <label htmlFor='show-again'>Do not show this again</label>
          </div>
        </div>
        <div className='col-span-2'>
          <img className='w-full' src={offerImage} />
        </div>
        <RxCross2
          className='absolute top-3 right-3 text-xl cursor-pointer text-gray-700'
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default Modal
