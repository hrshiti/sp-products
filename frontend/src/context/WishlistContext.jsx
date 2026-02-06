import { createContext, useContext, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([])

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id)
            if (exists) {
                toast.success('Removed from Wishlist', { icon: '💔', duration: 2000 })
                return prev.filter((item) => item.id !== product.id)
            }
            toast.success('Added to Wishlist', { icon: '❤️', duration: 2000 })
            return [...prev, product]
        })
    }

    const isInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId)
    }

    const value = useMemo(
        () => ({
            wishlist,
            toggleWishlist,
            isInWishlist,
        }),
        [wishlist],
    )

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlistContext() {
    const ctx = useContext(WishlistContext)
    if (!ctx) {
        throw new Error('useWishlistContext must be used within a WishlistProvider')
    }
    return ctx
}
