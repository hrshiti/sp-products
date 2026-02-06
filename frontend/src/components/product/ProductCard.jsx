import { Link } from 'react-router-dom'
import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice.js'
import { CountdownTimer } from './CountdownTimer.jsx'
import { useWishlistContext } from '../../context/WishlistContext.jsx'

export function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false)
  const { toggleWishlist, isInWishlist } = useWishlistContext()
  const isFav = isInWishlist(product.id)
  const bidCount = product.bids?.length ?? 0

  return (
    <Link
      to={`/product/${product.id}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div
        className={`relative flex h-28 items-center justify-center overflow-hidden rounded-t-2xl bg-slate-100 ${product.imageColor}`}
      >
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-xs font-medium text-slate-700">
            {product.category}
          </span>
        )}
        {/* Price tag overlay - bottom left */}
        <div className="absolute bottom-1.5 left-1.5 rounded-md bg-black/60 backdrop-blur-md px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm border border-white/10">
          {formatPrice(product.currentBid)}
        </div>
        {/* Heart / favorite - top right */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleWishlist(product)
          }}
          className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm"
        >
          <svg
            className={`h-3.5 w-3.5 ${isFav ? 'text-red-500 fill-red-500' : 'text-slate-400'}`}
            fill={isFav ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-1 p-2.5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md">
            {bidCount} bid{bidCount !== 1 ? 's' : ''}
          </div>
          <div className="flex items-center gap-0.5 text-[10px]">
            <span className="text-amber-500">★</span>
            <span className="font-bold text-slate-700">4.5</span>
          </div>
        </div>

        <div className="line-clamp-1 text-xs font-bold text-slate-900 leading-tight">
          {product.name}
        </div>

        <div className="flex items-center justify-between py-0.5">
          <span className="text-[10px] text-slate-400">Ends in</span>
          <div className="scale-90 origin-right">
            <CountdownTimer initialSeconds={product.timeLeftSeconds} />
          </div>
        </div>

        <button
          type="button"
          className="mt-1 w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all py-1.5 text-center text-[10px] uppercase tracking-wide font-bold text-white shadow-indigo-200 shadow-md"
        >
          Bid Now
        </button>
      </div>
    </Link>
  )
}
