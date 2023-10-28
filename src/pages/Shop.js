import { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ShopSidebar from '../components/filters/ShopSidebar'
import { TiThLarge, TiThList } from 'react-icons/ti'
import Product from '../components/product/Product'
import { useSearchParams } from 'react-router-dom'
import { useLocalStorageWishlist } from '../helpers/useLocalStorageWishlist'
import { useLocalStorageCart } from '../helpers/useLocalStorageCart'
import { filterProducts } from '../store/productsSlice'
import { useDispatch, useSelector } from 'react-redux'

function Shop() {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { filteredProducts } = useSelector((store) => store.products)

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams])
    dispatch(filterProducts(currentParams))
  }, [searchParams, dispatch])

  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useLocalStorageWishlist()

  const {
    cart,
    addProductToCart,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProductFromCart,
  } = useLocalStorageCart()

  const handleSorting = (e) => {
    const sort = e.target.value
    if (sort === '') {
      searchParams.delete('sort')
    } else {
      searchParams.set('sort', sort)
    }
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <>
      <Breadcrumb route={{ path: 'shop', title: 'Shop' }} />
      <div className='container grid grid-cols-4 gap-6  pb-14'>
        <ShopSidebar />
        <div className='col-span-3'>
          <div className='flex items-center mb-4'>
            <select
              className='w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 shadow-sm rounded focus:outline-none focus:border-primary'
              defaultValue=''
              onChange={handleSorting}
            >
              <option value=''>Default sorting</option>
              <option value='priceAsc'>Price low-high</option>
              <option value='priceDes'>Price high-low</option>
            </select>

            <div className='flex gap-2 ml-auto'>
              <div className='border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
                <TiThLarge />
              </div>
              <div className='border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer'>
                <TiThList />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {filteredProducts.map((product) => (
              <Product
                cart={cart}
                addProductToCart={addProductToCart}
                incrementProductQuantity={incrementProductQuantity}
                decrementProductQuantity={decrementProductQuantity}
                removeProductFromCart={removeProductFromCart}
                wishlist={wishlist}
                addProductToWishlist={addProductToWishlist}
                removeProductFromWishlist={removeProductFromWishlist}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
