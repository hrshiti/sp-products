import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice.js'

export function PlaceBidSheet({ isOpen, onClose, currentBid, onPlaceBid, disabled }) {
  const [amount, setAmount] = useState('')

  if (!isOpen) return null

  const numericAmount = Number(amount)
  const isInvalid = Number.isNaN(numericAmount) || numericAmount <= currentBid

  const handleConfirm = () => {
    if (isInvalid || disabled) return
    onPlaceBid(numericAmount)
    setAmount('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-300">
      <div className="w-full max-w-md rounded-t-3xl bg-white p-5 pb-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" />

        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-slate-900">Place a Bid</h2>
          <div className="text-xs font-medium text-slate-500 mt-1">
            Highest Bid: <span className="text-[#007bff] font-bold">{formatPrice(currentBid)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1">Your Bid Amount</label>
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-slate-200 focus-within:border-[#007bff] focus-within:ring-4 focus-within:ring-blue-500/10 transition-all bg-slate-50 focus-within:bg-white">
              <span className="text-lg font-bold text-slate-400">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-transparent text-xl font-bold text-slate-900 outline-none placeholder:text-slate-300"
                placeholder={`${currentBid + 100}`}
                min={currentBid + 1}
                autoFocus
              />
            </div>
          </div>

          <div className="flex gap-2 text-[10px] font-medium text-slate-500 justify-end px-1">
            <span>+ ₹100</span>
            <span>+ ₹500</span>
            <span>+ ₹1000</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-2xl bg-slate-100 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors active:scale-95"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={isInvalid || disabled}
            className={[
              'flex-[2] rounded-2xl py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all active:scale-95',
              isInvalid || disabled
                ? 'bg-slate-300 shadow-none cursor-not-allowed'
                : 'bg-[#007bff] hover:shadow-blue-500/40',
            ].join(' ')}
          >
            Confirm Bid
          </button>
        </div>

        {disabled && (
          <div className="mt-4 p-3 bg-red-50 rounded-xl text-center text-xs font-bold text-red-500">
            Auction has ended. Bidding is closed.
          </div>
        )}
      </div>
    </div>
  )
}

