import React from 'react'
import logo from '../../assets/logo.svg'
import Search from './Search'
import WishlistIcon from './WishlistIcon'
import CardIcon from './CardIcon'
import AccountIcon from './AccountIcon'

function Header() {
  return (
    <header className='py-4 shadow-sm bg-white'>
      <div className='container flex items-center justify-between'>
        <a>
          <img className='w-32' src={logo} alt='matcart-logo' />
        </a>

        <Search />
        <div className='flex items-center space-x-4'>
          <WishlistIcon />
          <CardIcon />
          <AccountIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
