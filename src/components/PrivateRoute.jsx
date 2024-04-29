import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { CheckingAuthUser } from '../hooks/CheckingAuthUser'

export default function PrivateRoute() {
  const {loggedIn, checkingStatus} = CheckingAuthUser()
  if(checkingStatus){
     return <p>Loading...</p>
  }
    return loggedIn ? <Outlet/> : <Navigate to="/SignIn" /> 
}
