import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import { WishlistProvider } from './context/WishlistContext'
import { ShoppingCardProvider } from './context/ShoppingCardContext'
import { ProductsProvider } from './context/ProductsContext'
import { AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/layout'
import Account from './pages/Account'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <WishlistProvider>
          <ShoppingCardProvider>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/shop/*' element={<Shop />} />
                <Route path='/login' element={<Login />} />
                <Route path='/account/*' element={<PrivateRoute />}>
                  <Route path='/account/*' element={<Account />} />
                </Route>
                <Route path='/*' element={<Navigate to='/' replace />} />
              </Routes>
            </Layout>
          </ShoppingCardProvider>
        </WishlistProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App
