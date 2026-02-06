import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout.jsx'
import { Splash } from '../pages/splash/Splash.jsx'
import { Home } from '../pages/home/Home.jsx'
import { Categories } from '../pages/categories/Categories.jsx'
import { AllProducts } from '../pages/product/AllProducts.jsx'
import { MyBids } from '../pages/bids/MyBids.jsx'
import { Profile } from '../pages/profile/Profile.jsx'
import { ProductDetails } from '../pages/product/ProductDetails.jsx'
import { Login } from '../pages/auth/Login.jsx'
import { Signup } from '../pages/auth/Signup.jsx'
import { OtpVerify } from '../pages/auth/OtpVerify.jsx'
import { Cart } from '../pages/cart/Cart.jsx'
import { EditProfile } from '../pages/profile/EditProfile.jsx'
import { Wallet } from '../pages/profile/Wallet.jsx'
import { Notifications } from '../pages/profile/Notifications.jsx'
import { Settings } from '../pages/profile/Settings.jsx'
import { Privacy } from '../pages/profile/Privacy.jsx'
import { Support } from '../pages/profile/Support.jsx'
import { Terms } from '../pages/profile/Terms.jsx'
import { Wishlist } from '../pages/profile/Wishlist.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />

      {/* Auth Routes - No Bottom Navbar/Header */}
      <Route path="/auth/verify" element={<OtpVerify />} />

      {/* Product Details & Cart - No Main Layout */}
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />

      {/* Main App Routes with Layout */}
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/bids" element={<MyBids />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

