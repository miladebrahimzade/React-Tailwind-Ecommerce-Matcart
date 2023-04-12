import { createContext, useState } from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(0)

  const addToWishlist = () => {
    setWishlist(wishlist + 1)
  }
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContext
