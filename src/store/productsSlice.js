import { createSlice } from '@reduxjs/toolkit'
import products from '../data/ProductsData'

const initialState = {
  products: products,
  filteredProducts: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { categories, brands, minPrice, maxPrice, sizes, colors, sort } =
        action.payload
      let items = []
      // console.log(state)
      for (const product of state.products) {
        if (categories && !categories.split(',').includes(product.category)) {
          continue
        }
        if (brands && !brands.split(',').includes(product.brand)) {
          continue
        }
        if (sizes && !sizes.split(',').includes(product.size)) {
          continue
        }
        if (colors && !colors.split(',').includes(product.color)) {
          continue
        }
        if (
          minPrice &&
          ((product.discount && product.discount < minPrice) ||
            (!product.discount && product.price < minPrice))
        ) {
          continue
        }
        if (
          maxPrice &&
          ((product.discount && product.discount > maxPrice) ||
            (!product.discount && product.price > maxPrice))
        ) {
          continue
        }

        items.push(product)
      }

      items.sort((a, b) => {
        const { name, price } = a
        const { name: nameB, price: priceB } = b

        switch (sort) {
          case 'priceAsc':
            return price - priceB

          case 'priceDes':
            return priceB - price

          default:
            return name.localeCompare(nameB)
        }
      })
      state.filteredProducts = items
    },
    // needs adjustment for search
    // searchProducts:(state,action) =>{state.products.filter((product) =>
    //     product.name.toLowerCase().includes(search.toLowerCase())
    //   )}
  },
})

export const { filterProducts } = productsSlice.actions

export default productsSlice.reducer
