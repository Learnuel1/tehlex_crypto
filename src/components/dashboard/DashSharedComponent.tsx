import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import DashFooter from './DashFooter'
import DashNav from './DashNav'


const DashSharedComponent = () => {
  const location = useLocation();
  const [hideDashNav, setHideDashNav] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 678 && (location.pathname === "/dashboard/tradepoint" || location.pathname === "/dashboard/setup" || window.innerWidth < 678 && location.pathname === "/dashboard/setup/setuppin" || location.pathname === "/dashboard/setup/confirmpin" || location.pathname === "/dashboard/setup/addbank" || location.pathname === "/dashboard/setup/addusdwallet" || location.pathname === "/dashboard/withdrawal")) {
        setHideDashNav(true);
      } else {
        setHideDashNav(false);
      }
    };
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state based on the viewport width and location
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);


  return (
    <>
      <Navigation />

      {!hideDashNav && <DashNav />}

      <Outlet />
      {!hideDashNav && <DashFooter />}
    </>
  )
}

export default DashSharedComponent
