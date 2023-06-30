import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (wishlist, action) => {
      const product = action.payload
      if (!wishlist.some((item) => item.id === product.id)) {
        wishlist.push(product)
      }
    },
    removeFromWishlist: (wishlist, action) => {
      const productId = action.payload
      return wishlist.filter((item) => item.id !== productId)
    },
    setWishlist: (wishlist, action) => {
      const products = action.payload
      // console.log(products)
      return products
    },
  },
})

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions
export default wishlistSlice.reducer
