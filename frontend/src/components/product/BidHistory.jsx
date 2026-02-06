import { formatPrice } from '../../utils/formatPrice.js'

export function BidHistory({ bids }) {
  if (!bids?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
        No bids yet. Be the first to bid on this Sp Product.
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-sm font-semibold mb-2">Bid history</div>
      <div className="max-h-48 space-y-2 overflow-y-auto text-xs">
        {bids.map((bid, index) => (
          <div
            key={`${bid.user}-${bid.amount}-${index.toString()}`}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
          >
            <span className="font-medium text-slate-700">
              {bid.user === 'You' ? 'You' : bid.user}
            </span>
            <span className="font-semibold text-emerald-600">
              {formatPrice(bid.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

