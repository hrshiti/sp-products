import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCartContext } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { SafeArea } from '../../components/layout/SafeArea.jsx'

export function Cart() {
    const navigate = useNavigate()
    const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCartContext()

    const subtotal = cartItems.reduce((acc, item) => acc + item.currentBid * item.quantity, 0)
    const tax = subtotal * 0.05 // 5% tax example
    const total = subtotal + tax

    return (
        <SafeArea>
            <div className="mx-auto w-full max-w-md bg-slate-50 min-h-dvh flex flex-col">
                {/* Header */}
                <div className="bg-white px-4 py-3 shadow-sm flex items-center gap-4 sticky top-0 z-30">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                    >
                        <ArrowLeft size={20} className="text-slate-700" />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-lg font-bold text-slate-900">My Cart</h1>
                        <p className="text-xs text-slate-500">{cartItems.length} items</p>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4"
                            >
                                <div className="h-20 w-20 shrink-0 rounded-xl bg-slate-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div className="flex items-end justify-between mt-2">
                                        <span className="text-base font-bold text-slate-900">
                                            {formatPrice(item.currentBid)}
                                        </span>
                                        <div className="flex items-center gap-3 bg-slate-50 rounded-lg px-2 py-1 border border-slate-200">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="p-1 rounded-md hover:bg-white hover:shadow-xs text-slate-600 transition-all disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="p-1 rounded-md hover:bg-white hover:shadow-xs text-slate-600 transition-all"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                            <div className="h-24 w-24 bg-indigo-50 rounded-full flex items-center justify-center mb-2">
                                <ShoppingBag size={40} className="text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Your Cart is Empty</h3>
                            <p className="text-slate-500 text-sm max-w-[200px]">
                                Looks like you haven't added anything to your cart yet.
                            </p>
                            <button
                                onClick={() => navigate('/home')}
                                className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                            >
                                Start Shopping
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Summary */}
                {cartItems.length > 0 && (
                    <div className="bg-white p-5 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-slate-100 z-20">
                        <div className="space-y-3 mb-5">
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-medium">{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Tax (5%)</span>
                                <span className="font-medium">{formatPrice(tax)}</span>
                            </div>
                            <div className="h-px bg-slate-100 my-2" />
                            <div className="flex justify-between text-base font-bold text-slate-900">
                                <span>Total</span>
                                <span className="text-xl">{formatPrice(total)}</span>
                            </div>
                        </div>
                        <button
                            // In a real app, this would route to checkout
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            Checkout Now
                        </button>
                    </div>
                )}
            </div>
        </SafeArea>
    )
}
