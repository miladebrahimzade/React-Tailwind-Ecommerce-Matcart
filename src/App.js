import Home from './pages/Home'
import Shop from './pages/Shop'
import { WishlistProvider } from './context/WishlistContext'
import { ShoppingCardProvider } from './context/ShoppingCardContext'
import { ProductsProvider } from './context/ProductsContext'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout'
function App() {
  return (
    <ProductsProvider>
      <WishlistProvider>
        <ShoppingCardProvider>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/shop' element={<Shop />}></Route>
            </Routes>
          </Layout>
        </ShoppingCardProvider>
      </WishlistProvider>
    </ProductsProvider>
  )
}

export default App
