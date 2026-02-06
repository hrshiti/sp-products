import { createContext, useContext, useMemo, useState } from 'react'
import { DUMMY_PRODUCTS } from '../utils/constants.js'

const BidContext = createContext(null)

export function BidProvider({ children }) {
  const [products, setProducts] = useState(DUMMY_PRODUCTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    sort: 'newest',
    rating: null,
  })

  const placeBidOnProduct = (productId, amount) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p
        return {
          ...p,
          currentBid: amount,
          bids: [{ user: 'You', amount }, ...(p.bids ?? [])],
        }
      }),
    )
  }

  const myBids = useMemo(
    () => products.filter((p) => p.bids?.some((b) => b.user === 'You')),
    [products],
  )

  const value = useMemo(
    () => ({
      products,
      placeBidOnProduct,
      myBids,
      searchQuery,
      setSearchQuery,
      filters,
      setFilters,
    }),
    [products, myBids, searchQuery, filters],
  )

  return <BidContext.Provider value={value}>{children}</BidContext.Provider>
}

export function useBidContext() {
  const ctx = useContext(BidContext)
  if (!ctx) {
    throw new Error('useBidContext must be used within a BidProvider')
  }
  return ctx
}

