import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'
import DashFooter from './DashFooter'
import DashNav from './DashNav'

const DashSharedComponent = () => {
  return (
    <>
        <Navigation />
        <DashNav />
        <Outlet />
        <DashFooter />        
    </>
  )
}

export default DashSharedComponent
