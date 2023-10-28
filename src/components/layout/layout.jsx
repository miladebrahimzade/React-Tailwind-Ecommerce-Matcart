import Header from './header/Header'
import Footer from './Footer'
import Navbar from './Navbar'
function layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
