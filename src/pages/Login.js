import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/shared/Card'
import Breadcrumb from '../components/Breadcrumb'
import AuthContext from '../context/AuthContext'

function Login() {
  const { login, loginError } = useContext(AuthContext)
  const [email, setEmail] = useState('admin@gmail.com')
  const [password, setPassword] = useState('admin')

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (login(email, password)) {
      navigate('/account')
    } else {
    }
  }

  return (
    <>
      <Breadcrumb route={{ path: 'login', title: 'Login' }} />
      <Card>
        <div className='space-y-5'>
          <div>
            <h4 className='text-2xl font-medium uppercase'>Login</h4>
            <p>Login if you are a returning customer</p>
          </div>
          <form className='space-y-5'>
            <div className='space-y-2'>
              <label htmlFor='email' className='block'>
                Email Address
              </label>
              <input
                title='use username: admin'
                className='block w-full py-2 px-4 border rounded outline-red-200'
                type='email'
                id='email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='password' className='block'>
                Password
              </label>
              <input
                title='use password: admin'
                className='block w-full py-2 px-4 border rounded outline-red-200'
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {loginError && <div className='text-primary'>{loginError}</div>}
            <div className='flex justify-between'>
              <div>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                  className='accent-primary cursor-pointer scale-125'
                />
                <label htmlFor='remember' className='ml-2 cursor-pointer'>
                  Remember Me
                </label>
              </div>
              <a href='#' className='text-primary'>
                Forget Password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className='btn btn-primary font-medium w-full'
            >
              LOGIN
            </button>
          </form>
          <div className='relative text-center'>
            <span className='bg-white px-2 uppercase '> or login with</span>

            <div className='w-full absolute left-0 top-1/2 h-[1px] bg-gray-200 -z-10'></div>
          </div>
          <div className='flex space-x-5 '>
            <button className='flex-1 font-medium btn bg-blue-800 border-blue-800 hover:text-blue-800'>
              Facebook
            </button>
            <button className=' flex-1  font-medium btn bg-orange-600 border-orange-600 hover:text-orange-600'>
              Google
            </button>
          </div>
          <div className='text-center'>
            Don't have an account?{' '}
            <a href='#' className='text-orange-600'>
              Register Now
            </a>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Login
