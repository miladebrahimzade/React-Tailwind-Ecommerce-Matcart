// This code is no included anywhere. It's just for showing how it can be use instead of Redux

import { createContext, useState } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [cardItem, setCardItem] = useState(0)

  const addToCardItem = () => {
    setCardItem(cardItem + 1)
  }
  return (
    <ShoppingCardContext.Provider
      value={{
        cardItem,
        addToCardItem,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCardContext
