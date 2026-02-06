import { Link } from 'react-router-dom'
import { useBidContext } from '../../context/BidContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { CountdownTimer } from '../../components/product/CountdownTimer.jsx'

export function MyBids() {
  const { myBids } = useBidContext()

  return (
    <div className="space-y-5 pb-20">
      <div className="sticky top-0 z-10 bg-slate-50 pb-2 pt-1 mb-2 border-b border-slate-200/50 backdrop-blur-sm bg-slate-50/90">
        <h1 className="text-2xl font-bold text-slate-900">My Bids</h1>
        <p className="text-xs font-medium text-slate-500">Track your active and past auctions</p>
      </div>

      {!myBids.length ? (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
          <div className="h-24 w-24 bg-slate-100 rounded-full flex items-center justify-center text-3xl">🗳️</div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">No Bids Yet</h3>
            <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
              You haven't placed any bids. Start exploring and win your favorite items!
            </p>
          </div>
          <Link to="/home" className="px-6 py-2.5 bg-[#007bff] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
            Start Bidding
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {myBids.map((product) => {
            const myLatestBid = product.bids.find((b) => b.user === 'You')

            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 ${product.imageColor}`}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-[10px] font-medium text-slate-700">
                      {product.category}
                    </span>
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="line-clamp-1 text-xs font-semibold text-slate-900">
                    {product.name}
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Your bid</span>
                    <span className="font-semibold text-slate-800">
                      {myLatestBid ? formatPrice(myLatestBid.amount) : '--'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Current highest</span>
                    <span className="font-semibold text-[#007bff]">
                      {formatPrice(product.currentBid)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 text-[11px]">
                  <CountdownTimer initialSeconds={product.timeLeftSeconds} />
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

