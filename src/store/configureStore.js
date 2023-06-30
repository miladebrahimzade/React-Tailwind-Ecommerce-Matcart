import wishlist from './wishlistSlice'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { wishlist },
})
