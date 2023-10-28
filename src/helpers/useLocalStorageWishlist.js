import {
  addToWishlist,
  removeFromWishlist,
  setWishlist,
} from '../store/wishlistSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const useLocalStorageWishlist = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist)

  useEffect(() => {
    const storageProducts = JSON.parse(localStorage.getItem('wishlist')) || []
    if (storageProducts.length > 0) dispatch(setWishlist(storageProducts))
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product))
  }

  const removeProductFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId))
  }

  return { wishlist, addProductToWishlist, removeProductFromWishlist }
}
