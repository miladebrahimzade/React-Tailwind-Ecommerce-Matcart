// This code is no included anywhere. It's just for showing how it can be use instead of Redux

import { createContext, useCallback, useEffect, useState } from 'react'
import ProductsData from '../data/ProductsData'
import { useSearchParams } from 'react-router-dom'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchParams] = useSearchParams()

  const getProducts = useCallback(
    ({ categories, brands, minPrice, maxPrice, sizes, colors, sort }) => {
      let items = []
      for (const product of ProductsData) {
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
      setFilteredProducts(items)
    },
    [ProductsData]
  )

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams])
    getProducts(currentParams)
  }, [searchParams, getProducts])

  return (
    <ProductsContext.Provider
      value={{
        filteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
