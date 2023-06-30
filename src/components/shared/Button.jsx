import React from 'react'

function Button({ children, classes }) {
  console.log(classes)
  return (
    <button
      className={`uppercase bg-primary text-white border border-primary px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-primary transition ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
