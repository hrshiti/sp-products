import { useLocation, Link } from 'react-router-dom'
import { useBidContext } from '../../context/BidContext.jsx'
import { useCartContext } from '../../context/CartContext.jsx'

const titleByPath = {
  '/home': 'Sp Product',
  '/categories': 'Categories',
  '/bids': 'My Bids',
  '/profile': 'Profile',
}

function CartIcon({ count }) {
  return (
    <div className="relative">
      <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </div>
  )
}

import { useState } from 'react'
import { FilterSheet } from '../common/FilterSheet.jsx'

function HomeHeader() {
  const { myBids, searchQuery, setSearchQuery } = useBidContext()
  const { cartItems } = useCartContext()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow-sm pb-3">
        <div className="mx-auto w-full max-w-md px-4 pt-3 pb-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500">Welcome Back</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-slate-900">uix.vikram</span>
                  <svg className="h-3 w-3 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition-colors">
                <svg className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#007bff] text-[10px] font-bold text-white border-2 border-white">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 relative hover:bg-slate-100 transition-colors">
                <svg className="h-6 w-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {myBids.length > 0 && (
                  <span className="absolute top-2 right-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 border border-white">
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="relative flex-1 group">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007bff] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border-none bg-slate-100 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none ring-1 ring-transparent focus:bg-white focus:ring-[#007bff] transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-2xl bg-[#007bff] text-white transition-transform active:scale-95 shadow-md shadow-blue-500/20"
              aria-label="Filter"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <FilterSheet isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </>
  )
}

function DefaultHeader() {
  const location = useLocation()
  const title = titleByPath[location.pathname] ?? 'Sp Product'

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-md items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Sp Product" className="h-9 w-9 rounded-xl" />
          <div>
            <div className="text-base font-semibold leading-5">{title}</div>
            <div className="text-xs text-slate-500">Bid Smart. Win Smart.</div>
          </div>
        </div>
        <div className="h-9 w-9 rounded-full bg-slate-100" aria-hidden="true" />
      </div>
    </header>
  )
}

export function Header() {
  const location = useLocation()

  // Hide header for specific routes based on user request
  // Hide header for specific routes based on user request and because they have their own PageLayout headers
  const hideHeaderRoutes = [
    '/profile',
    '/bids',
    '/profile/edit',
    '/wishlist',
    '/wallet',
    '/notifications',
    '/settings',
    '/privacy',
    '/support',
    '/terms',
    '/categories'
  ]

  if (hideHeaderRoutes.includes(location.pathname)) {
    return null
  }

  const isHome = location.pathname === '/home'

  return isHome ? <HomeHeader /> : <DefaultHeader />
}

