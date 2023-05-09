import React from 'react'

function Card({ children }) {
  return (
    <div className='mx-4'>
      <div className='max-w-full w-[32rem] mx-auto my-20 px-6 py-8 rounded shadow-lg'>
        {children}
      </div>
    </div>
  )
}

export default Card
