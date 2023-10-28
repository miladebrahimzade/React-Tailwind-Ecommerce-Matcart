import { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState(null)

  const login = (email, password) => {
    if (email.trim() === '' || password.trim() === '') {
      setLoginError('Please enter email and password.')
      return false
    }

    // Hard coded for demonstration
    if (email !== 'admin@gmail.com' || password !== 'admin') {
      setLoginError('Invalid credentials. please try again.')
      return false
    }

    setUser({ email })
    setLoginError(null)
    return true
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loginError, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
