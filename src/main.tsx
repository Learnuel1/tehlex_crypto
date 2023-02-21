import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
