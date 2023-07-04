import products from './productsSlice'
import wishlist from './wishlistSlice'
import cart from './cartSlice'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { products, wishlist, cart },
})
