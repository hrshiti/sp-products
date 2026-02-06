import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { BidProvider } from './context/BidContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BidProvider>
          <WishlistProvider>
            <CartProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <App />
            </CartProvider>
          </WishlistProvider>
        </BidProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
