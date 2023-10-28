import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function PrivateRoute() {
  const { user } = useContext(AuthContext)

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
