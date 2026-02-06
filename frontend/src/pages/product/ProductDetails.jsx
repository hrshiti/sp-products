import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../utils/formatPrice.js'
import { CountdownTimer } from '../../components/product/CountdownTimer.jsx'
import { BidHistory } from '../../components/product/BidHistory.jsx'
import { PlaceBidSheet } from '../../components/product/PlaceBidSheet.jsx'
import { useBidContext } from '../../context/BidContext.jsx'
import { useCartContext } from '../../context/CartContext.jsx'
import { useWishlistContext } from '../../context/WishlistContext.jsx'
import { SafeArea } from '../../components/layout/SafeArea.jsx'

export function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, placeBidOnProduct } = useBidContext()
  const { addToCart } = useCartContext()
  const { toggleWishlist, isInWishlist } = useWishlistContext()

  const product = useMemo(
    () => products.find((p) => p.id === Number(id)),
    [products, id],
  )
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const isFav = product ? isInWishlist(product.id) : false

  if (!product) {
    return (
      <div className="space-y-3">
        <div className="text-sm font-semibold text-red-500">
          Product not found
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700"
        >
          Go back
        </button>
      </div>
    )
  }

  const handlePlaceBid = (amount) => {
    if (amount <= product.currentBid) {
      toast.error('Bid amount must be higher than current bid!')
      return
    }
    placeBidOnProduct(product.id, amount)
    setIsSheetOpen(false)
    toast.success(
      <div className="flex flex-col">
        <span className="font-bold">Bid Placed Successfully!</span>
        <span className="text-xs">You are now the highest bidder.</span>
      </div>,
      { icon: '🎉', duration: 4000 }
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(
      <div className="flex flex-col">
        <span className="font-bold">Added to Cart</span>
        <span className="text-xs">{product.name} is in your bag.</span>
      </div>,
      { icon: '🛍️', duration: 2000 }
    )
  }

  const isAuctionFinished = product.timeLeftSeconds <= 0

  return (
    <SafeArea>
      <div className="mx-auto w-full max-w-md bg-white min-h-dvh shadow-2xl relative space-y-0 pb-24">
        {/* ... (keep existing image gallery and main details structure) ... */}
        {/* I will use a view_file call if I get lost, but for now assuming lines match based on context */}

        {/* Image Gallery */}
        <section className="relative bg-slate-100">
          <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
            {product.images && product.images.length > 0 ? (
              product.images.map((img, idx) => (
                <div key={idx} className="h-96 w-full shrink-0 snap-center bg-slate-100">
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="flex h-96 w-full items-center justify-center bg-slate-100">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 rounded-full bg-white/80 p-2.5 text-slate-900 backdrop-blur-md shadow-sm hover:bg-white transition-colors z-10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19 l-7-7 7-7" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
            {product.images && product.images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-6 bg-white' : 'w-1.5 bg-white/60'}`} />
            ))}
          </div>
        </section>

        {/* Main Details */}
        <div className="relative -mt-6 rounded-t-3xl bg-white px-5 pt-8 space-y-8">
          <section className="space-y-4">
            {/* ... header ... */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">{product.name}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                    <svg className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-sm font-bold text-slate-900">{product.rating || '4.5'}</span>
                    <span className="text-xs text-slate-500 font-medium">({product.reviewsCount || 100})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                    <span>{product.seller || 'Verified Seller'}</span>
                    <svg className="h-4 w-4 text-[#007bff]" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="shrink-0 rounded-full bg-slate-50 p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <svg
                  className={`h-6 w-6 ${isFav ? 'text-red-500 fill-red-500' : 'text-slate-400'}`}
                  fill={isFav ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <div className="rounded-2xl bg-[#007bff]/5 p-5 border border-[#007bff]/10">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#007bff]">Current Bid</p>
                  <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{formatPrice(product.currentBid)}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Auction Ends In</p>
                  <div className="text-sm font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block shadow-sm">
                    <CountdownTimer initialSeconds={product.timeLeftSeconds} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="prose pro-sm max-w-none">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Description</h3>
            <div className="text-sm text-slate-600 leading-7 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p>{product.description || 'No description available for this product. It is a high quality item maintained in excellent condition.'}</p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Specifications</h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-slate-100">
                  {product.specifications ? Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-slate-500 font-medium w-2/5 bg-slate-50/50">{key}</td>
                      <td className="px-5 py-4 text-slate-900 font-semibold">{value}</td>
                    </tr>
                  )) : (
                    <tr><td className="px-5 py-4 text-slate-500">No specifications found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Bid History</h3>
            <BidHistory bids={product.bids} />
          </section>
        </div>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-t border-slate-200 px-5 py-3 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="mx-auto w-full max-w-md flex items-center gap-3">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Add to cart"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              type="button"
              disabled={isAuctionFinished}
              onClick={() => setIsSheetOpen(true)}
              className={[
                'flex-1 rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all active:scale-95',
                isAuctionFinished
                  ? 'bg-slate-300 shadow-none cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#007bff] to-[#0056b3] hover:shadow-blue-500/50',
              ].join(' ')}
            >
              {isAuctionFinished ? 'Auction Ended' : 'Place a Bid'}
            </button>
          </div>
        </div>

        <PlaceBidSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          currentBid={product.currentBid}
          onPlaceBid={handlePlaceBid}
          disabled={isAuctionFinished}
        />
      </div>
    </SafeArea>
  )
}

