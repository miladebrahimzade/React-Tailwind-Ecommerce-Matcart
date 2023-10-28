import { TfiTrash } from 'react-icons/tfi'

function Item({
  product,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
}) {
  const handleDecrement = () => {
    if (product.count > 1) decrementProductQuantity(product.id)
    else removeProductFromCart(product.id)
  }
  const handleIncrement = () => {
    incrementProductQuantity(product.id)
  }

  return (
    <div className='p-6 grid grid-cols-12 items-center border rounded space-x-4'>
      <div className='col-span-6 flex items-center space-x-4'>
        <div className='w-24 h-24'>
          <img
            src={process.env.PUBLIC_URL + `/img/products/${product.image}.jpg`}
            alt='product-1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h2 className='font-medium uppercase hover:text-primary transition cursor-pointer'>
            {product.name}
          </h2>
          <div className='text-sm font-semibold text-primary '>
            $
            {product.discount
              ? product.discount.toFixed(2)
              : product.price.toFixed(2)}
          </div>
          <div className=''>{'Size: ' + product.size}</div>
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-center'>
        <button
          className='px-3 py-1 border hover:bg-gray-200'
          onClick={handleDecrement}
        >
          -
        </button>
        <div className='w-10 text-center py-1 border-y outline-none'>
          {product.count}
        </div>
        <button
          className='px-3 py-1 border hover:bg-gray-200'
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className='col-span-2 flex justify-center items-center'>
        <div className='text-primary font-bold '>
          $
          {product.discount
            ? (product.discount * product.count).toFixed(2)
            : (product.price * product.count).toFixed(2)}
        </div>
      </div>
      <div className='col-span-1 flex justify-center items-center '>
        <TfiTrash
          className='hover:text-primary transition cursor-pointer'
          onClick={() => removeProductFromCart(product.id)}
        />
      </div>
    </div>
  )
}

export default Item
