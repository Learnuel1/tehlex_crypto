import { Route, Routes } from "react-router-dom"
import SharedComponent from "./components/SharedComponent"
import AboutUs from "./pages/AboutUs"
import Faqs from "./pages/Faqs"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Waitlist from "./pages/Waitlist"



function App() {

  return (
   <>
      <Routes>
          <Route path="/" element={<SharedComponent />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faqs" element={<Faqs />} /> 
              <Route path="/waitlist" element={<Waitlist />} />
          </Route>
      </Routes>
   </>
  )
}

export default App
