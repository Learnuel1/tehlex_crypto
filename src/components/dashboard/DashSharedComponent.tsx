import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import DashFooter from './DashFooter'
import DashNav from './DashNav'
import { Stack } from '@chakra-ui/react'

const DashSharedComponent = () => {
  return (
    <>
      <Navigation />
      <Stack display={{ base: 'none', md: 'block' }}>
        <DashNav />
      </Stack>
      <Outlet />
      <DashFooter />
    </>
  )
}

export default DashSharedComponent
