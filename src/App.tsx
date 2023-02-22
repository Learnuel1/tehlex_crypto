import { Route, Routes } from "react-router-dom"
import AccountVerification from "./components/AccountVerification"
import Feedback from "./components/Feedback"
import Register from "./components/Register"
import SharedComponent from "./components/SharedComponent"
import Signup from "./components/Signup"
import VerifyEmail from "./components/VerifyEmail"
import VerifyPhone from "./components/VerifyPhone"
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
              <Route path="login" element={<Signup />} />
              <Route path="register" element={<Register />} />
              <Route path="accountverification" element={<AccountVerification />} />
              <Route path="verifyEmail" element={<VerifyEmail />} />
              <Route path="verifyPhone" element={<VerifyPhone />} />
              <Route path="feedback" element={<Feedback />} />
          </Route>
      </Routes>
   </>
  )
}

export default App
