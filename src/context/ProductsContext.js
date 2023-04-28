import { createContext, useEffect, useState } from 'react'
import ProductsData from '../data/ProductsData'
import { useSearchParams } from 'react-router-dom'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products] = useState(ProductsData)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchParams] = useSearchParams()

  const getProducts = ({ categories, brands, price, sizes, colors, sort }) => {
    let items = []
    for (const product of products) {
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

      items.push(product)
    }

    // general solution - incomplete
    // if (filters && Object.keys(filters).length !== 0) {
    //   Object.entries(filters).forEach((item) => {
    //     const [key, value] = item
    //     const array = value.split(',')
    //     console.log(key, array)
    //     filteredProducts.push(products.filter())
    //   })
    // }

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
  }

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams])
    getProducts(currentParams)
  }, [searchParams])

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
