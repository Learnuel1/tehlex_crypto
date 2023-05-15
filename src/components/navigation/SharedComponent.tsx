
import { Outlet } from 'react-router-dom'
import Footer from '../../components/navigation/Footer'
import Navigation from '../../components/navigation/Navigation'

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
