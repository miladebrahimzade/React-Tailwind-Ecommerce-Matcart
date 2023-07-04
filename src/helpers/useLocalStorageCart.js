import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCart,
} from '../store/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const useLocalStorageCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    const storageProducts = JSON.parse(localStorage.getItem('cart')) || []

    if (storageProducts.length > 0) dispatch(setCart(storageProducts))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addProductToCart = (product) => {
    dispatch(addToCart(product))
  }
  const incrementProductQuantity = (productId) => {
    dispatch(incrementQuantity(productId))
  }
  const decrementProductQuantity = (productId) => {
    dispatch(decrementQuantity(productId))
  }

  const removeProductFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  return {
    cart,
    addProductToCart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
  }
}
