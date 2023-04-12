import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/header/Header'
import Home from './pages/Home'
import { WishlistProvider } from './context/WishlistContext'
import { ShoppingCardProvider } from './context/ShoppingCardContext'
import { ProductsProvider } from './context/ProductsContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ProductsProvider>
      <WishlistProvider>
        <ShoppingCardProvider>
          <Router>
            <Header />
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
            </Routes>
            <Footer />
          </Router>
        </ShoppingCardProvider>
      </WishlistProvider>
    </ProductsProvider>
  )
}

export default App
