import React from 'react'
import logo from '../../../assets/logo.svg'
import Search from './Search'
import WishlistIcon from './WishlistIcon'
import CartIcon from './CartIcon'
import AccountIcon from './AccountIcon'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-4 shadow-sm bg-white'>
      <div className='container flex items-center justify-between'>
        <Link to='/'>
          <img className='w-32' src={logo} alt='matcart-logo' />
        </Link>

        <Search />
        <div className='flex items-center space-x-4'>
          <WishlistIcon />
          <CartIcon />
          <AccountIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
