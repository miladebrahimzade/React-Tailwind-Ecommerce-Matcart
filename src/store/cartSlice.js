import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (cart, action) => {
      const product = action.payload
      if (!cart.some((item) => item.id === product.id)) {
        cart.push({ ...product, count: 1 })
      }
    },
    incrementQuantity: (cart, action) => {
      const productId = action.payload
      const product = cart.find((item) => item.id === productId)
      if (product) {
        product.count += 1
      }
    },
    decrementQuantity: (cart, action) => {
      const productId = action.payload
      const product = cart.find((item) => item.id === productId)
      if (product && product.count > 1) {
        product.count -= 1
      }
    },
    removeFromCart: (cart, action) => {
      const productId = action.payload
      return cart.filter((item) => item.id !== productId)
    },
    setCart: (cart, action) => {
      const products = action.payload

      return products
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCart,
} = cartSlice.actions
export default cartSlice.reducer
