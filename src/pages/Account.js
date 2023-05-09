import React from 'react'

function Account() {
  return (
    <div className='container space-y-4 my-12 '>
      <h4 className='text-3xl font-medium'>Account</h4>
      <p className='text-gray-700 text-justify'>
        This is a private route. So you can only see this page when you are
        logged in. Log out and check what happens when you come to this path
        without authentication.
      </p>
      <p className='text-gray-700 text-justify'>
        You can type it in or use the "Account" icon from the header.
      </p>
    </div>
  )
}

export default Account
