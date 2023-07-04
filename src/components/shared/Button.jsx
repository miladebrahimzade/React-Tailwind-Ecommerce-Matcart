function Button({ children, classes, onClick, icon }) {
  return (
    <button
      className={`uppercase bg-primary text-white border border-primary px-6 py-2 text-center text-sm rounded-md hover:bg-transparent hover:text-primary transition ${classes}`}
      onClick={onClick}
    >
      {icon ? (
        <div className='flex items-center space-x-2'>
          {icon}
          <span>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
}
export default Button
