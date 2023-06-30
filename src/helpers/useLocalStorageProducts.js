import {
  addToWishlist,
  removeFromWishlist,
  setWishlist,
} from '../store/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

export const useLocalStorageProducts = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist)
  const isInitialized = useRef(false)

  useEffect(() => {
    const storageProducts = JSON.parse(localStorage.getItem('wishlist')) || []

    if (
      !isInitialized.current &&
      (wishlist.length === 0 || storageProducts.length > 0)
    ) {
      dispatch(setWishlist(storageProducts))
      isInitialized.current = true
    }
  }, [wishlist, dispatch])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product))
  }

  const removeProductFromWishlist = (id) => {
    dispatch(removeFromWishlist(id))
  }

  return { wishlist, addProductToWishlist, removeProductFromWishlist }
}
