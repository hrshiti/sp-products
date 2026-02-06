import { useNavigate } from 'react-router-dom'
import { PageLayout } from '../../components/layout/PageLayout.jsx'
import { ProductCard } from '../../components/product/ProductCard.jsx'
import { useWishlistContext } from '../../context/WishlistContext.jsx'
import { Heart } from 'lucide-react'

export function Wishlist() {
    const navigate = useNavigate()
    const { wishlist } = useWishlistContext()

    return (
        <PageLayout title="My Wishlist">
            <div className="space-y-4">
                {/* Clean Grid Layout */}
                {wishlist.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                        {wishlist.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
                        <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                            <Heart size={40} className="fill-slate-200" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-slate-900">Your wishlist is empty</h3>
                            <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                                Save items you love by tapping the heart icon.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/home')}
                            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl shadow-lg shadow-slate-200 active:scale-95 transition-transform"
                        >
                            Explore Products
                        </button>
                    </div>
                )}
            </div>
        </PageLayout>
    )
}
