import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'

const SharedComponent = () => {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedComponent
