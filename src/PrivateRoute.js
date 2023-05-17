import React from 'react'
import AuthService from './services/auth.service'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children })=> {

  // Add your own authentication on the below line.
	// Handle this
  const isLoggedIn = AuthService.islogged();

  if (isLoggedIn) {
		return <Navigate to="/login" />; 
	}
	return children;
}

export default PrivateRoute