import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'

import { AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/layout'
import Account from './pages/Account'
import PrivateRoute from './components/PrivateRoute'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account/*' element={<PrivateRoute />}>
            <Route path='/account/*' element={<Account />} />
          </Route>
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
