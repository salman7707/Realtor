import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { CheckingAuthUser } from '../hooks/CheckingAuthUser'
import Spinner from './spinner'

export default function PrivateRoute() {
  const {loggedIn, checkingStatus} = CheckingAuthUser()
  if(checkingStatus){
     return <Spinner />
  }
    return loggedIn ? <Outlet/> : <Navigate to="/SignIn" /> 
}
