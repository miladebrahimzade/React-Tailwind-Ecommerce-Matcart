import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <div className='w-full max-w-xl relative flex'>
      <span className='absolute left-4 top-4 text-lg text-gray-400'>
        <FaSearch />
      </span>
      <input
        type='text'
        placeholder='Serach'
        className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none'
      />
      <button className='btn btn-primary rounded-l-none '>Search</button>
    </div>
  )
}

export default Search
