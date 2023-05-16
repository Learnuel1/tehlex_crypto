import { Route, Routes } from "react-router-dom"
import AccountVerification from "./components/AccountVerification"
import AccountSetup from "./components/dashboard/AccountSetup"
import Addbank from "./components/dashboard/Addbank"
import AddUsdWallet from "./components/dashboard/AddUsdWallet"
import ConfirmTransactionPin from "./components/dashboard/ConfirmTransactionPin"
import DashHome from "./components/dashboard/DashHome"
import DashSharedComponent from "./components/dashboard/DashSharedComponent"
import Notification from "./components/dashboard/Notification"
import TradePoint from "./components/dashboard/TradePoint"
import TransactionPin from "./components/dashboard/TransactionPin"
import Feedback from "./components/Feedback"

import NotFound from "./components/NotFound"
import Register from "./components/Register"
import ResetEmailPin from "./components/ResetEmailPin"
import ResetPassword from "./components/ResetPassword"
import ResetViaEmail from "./components/ResetViaEmail"
import ResetViaPhone from "./components/ResetViaPhone"
import SharedComponent from './components/navigation/SharedComponent'
import Signin from "./components/Signin"
import VerifyEmail from "./components/VerifyEmail"
import VerifyPhone from "./components/VerifyPhone"
import NairaConfrimPayment from "./components/withdrawal/naira/NairaConfrimPayment"
import NairaPaymentMethod from "./components/withdrawal/naira/NairaPaymentMethod"
import NairaWithdrawFunds from "./components/withdrawal/naira/NairaWithdrawFunds"
import ConfrimPayment from "./components/withdrawal/usdt/ConfrimPayment"
import WithdrawFunds from "./components/withdrawal/usdt/WithdrawFunds"
import Withdrawal from "./components/withdrawal/Withdrawal"
import AboutUs from "./pages/AboutUs"
import Faqs from "./pages/Faqs"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Waitlist from "./pages/Waitlist"
import WithdrawTransactionPin from "./components/withdrawal/WithdrawTransactionPin"
import Wallet from "./components/wallet/Wallet"
import BankAccount from "./components/wallet/BankAccount"
import WalletAddress from "./components/wallet/WalletAddress"
import TransactHistory from "./components/transaction/TransactHistory"
import ProfileHome from "./components/profile/ProfileHome"
import ProfileInfo from "./components/profile/ProfileInfo"
import Security from "./components/profile/Security"
import Refer_N_earn from "./components/profile/Refer_N_earn"
import ProfileFaqs from "./components/profile/ProfileFaqs"
import ProfileSupport from "./components/profile/Support"
import ProfileAbout from "./components/profile/ProfileAbout"
import ProfileTerms from "./components/profile/ProfileTerms"
import NewPassword from "./components/NewPassword"
import VerifyLogin from "./components/VerifyLogin"




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
              <Route path="login" element={<Signin />} />
              <Route path="verifylogin" element={<VerifyLogin />} />
              <Route path="register" element={<Register />} />
              <Route path="accountverification" element={<AccountVerification />} />
              <Route path="verifyEmail" element={<VerifyEmail />} />
              <Route path="verifyPhone" element={<VerifyPhone />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="resetviaemail" element={<ResetViaEmail />} />
              <Route path="resetemailpin" element={<ResetEmailPin />} />
              <Route path="newpassword" element={<NewPassword />} />
              <Route path="resetviaphone" element={<ResetViaPhone />} />              
          </Route>

              {/* shared component for dashboard */}
              <Route path="/" element={<DashSharedComponent />}>
                {/* dashboard components */}
                  <Route path="dashboard" element={<DashHome /> } />
                  <Route path="/dashboard/notification" element={<Notification /> } />
                  <Route path="/dashboard/tradepoint" element={<TradePoint /> } />
                  <Route path="/dashboard/setup" element={<AccountSetup /> } />
                  <Route path="/dashboard/setup/setuppin" element={<TransactionPin /> } />
                  <Route path="/dashboard/setup/confirmpin" element={<ConfirmTransactionPin /> } />
                  <Route path="/dashboard/setup/addbank" element={<Addbank /> } />
                  <Route path="/dashboard/setup/addusdwallet" element={<AddUsdWallet /> } />
                  <Route path="/dashboard/withdrawal" element={<Withdrawal /> } />

                      {/* withdraw in usdt */}
                  <Route path="/dashboard/withdrawfunds" element={<WithdrawFunds/> } />
                  <Route path="/dashboard/confirmpayment" element={<ConfrimPayment /> } />
                  <Route path="/dashboard/confirmpin" element={<WithdrawTransactionPin /> } />

                    {/* withdraw in naira  */}
                    <Route path="/dashboard/nairawithdrawfunds" element={<NairaWithdrawFunds />} />
                    <Route path="/dashboard/nairaconfrimPayment" element={<NairaConfrimPayment />} />
                    <Route path="/dashboard/nairapaymentmethod" element={<NairaPaymentMethod />} />

                    {/* wallet */}

                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/wallet/bank" element={<BankAccount />} />
                    <Route path="/wallet/usdt" element={<WalletAddress />} />
                    <Route path="/transaction" element={<TransactHistory />} />

                    {/* Profile home */}
                    <Route path="/profile" element={<ProfileHome />} />
                    <Route path="/profile/info" element={<ProfileInfo />} />
                    <Route path="/profile/security" element={<Security />} />
                    <Route path="/profile/referal" element={<Refer_N_earn />} />
                    <Route path="/profile/faqs" element={<ProfileFaqs />} />
                    <Route path="/profile/support" element={<ProfileSupport />} />
                    <Route path="/profile/about" element={<ProfileAbout />} />
                    <Route path="/profile/terms" element={<ProfileTerms />} />
              </Route>

              {/* error route */}
              <Route path="*" element={<NotFound />} />

      </Routes>
   </>
  )
}

export default App
