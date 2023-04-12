import { createContext, useState } from 'react'
import ProductsData from '../data/ProductsData'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsData)

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
