import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId))
    }

    const decreaseQuantity = (productId) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === productId)
            if (existing && existing.quantity > 1) {
                return prev.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
                )
            } else if (existing && existing.quantity === 1) {
                // If quantity is 1, remove the item
                return prev.filter((item) => item.id !== productId)
            }
            return prev // Item not found or quantity is already 0 (shouldn't happen with current logic)
        })
    }

    const value = useMemo(
        () => ({
            cartItems,
            addToCart,
            removeFromCart,
            decreaseQuantity,
        }),
        [cartItems],
    )

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCartContext() {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error('useCartContext must be used within a CartProvider')
    }
    return ctx
}
