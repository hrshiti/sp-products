import { useState } from 'react'
import { X, Filter, RefreshCw, Check } from 'lucide-react'
import { useBidContext } from '../../context/BidContext.jsx'

export function FilterSheet({ isOpen, onClose }) {
    const { filters, setFilters } = useBidContext()
    const [localFilters, setLocalFilters] = useState(filters)

    const handleApply = () => {
        setFilters(localFilters)
        onClose()
    }

    const handleReset = () => {
        const resetState = {
            minPrice: '',
            maxPrice: '',
            sort: 'newest',
            rating: null,
        }
        setLocalFilters(resetState)
        setFilters(resetState)
    }

    if (!isOpen) return null

    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full">
                            <Filter size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-6 max-h-[70vh] overflow-y-auto pb-20">
                    {/* Price Range */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Price Range</h3>
                        <div className="flex gap-4">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={localFilters.minPrice}
                                    onChange={(e) => setLocalFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                                    className="w-full rounded-xl bg-slate-50 border-slate-200 py-3 pl-8 pr-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                />
                            </div>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={localFilters.maxPrice}
                                    onChange={(e) => setLocalFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                                    className="w-full rounded-xl bg-slate-50 border-slate-200 py-3 pl-8 pr-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Sort By */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Sort By</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: 'newest', label: 'Newest Arrivals' },
                                { id: 'price_low', label: 'Price: Low to High' },
                                { id: 'price_high', label: 'Price: High to Low' },
                                { id: 'ending_soon', label: 'Ending Soon' },
                            ].map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setLocalFilters(prev => ({ ...prev, sort: opt.id }))}
                                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all border ${localFilters.sort === opt.id
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Rating */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Minimum Rating</h3>
                        <div className="flex gap-2">
                            {[4, 3, 2, 1].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => setLocalFilters(prev => ({ ...prev, rating: prev.rating === rating ? null : rating }))}
                                    className={`flex-1 rounded-xl py-2.5 text-sm font-bold border transition-all flex items-center justify-center gap-1 ${localFilters.rating === rating
                                            ? 'bg-amber-50 border-amber-500 text-amber-700'
                                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <span>{rating}+</span>
                                    <span className="text-amber-500">★</span>
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-slate-100 flex gap-4">
                    <button
                        onClick={handleReset}
                        className="flex-1 rounded-xl bg-slate-100 py-3.5 text-slate-700 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                        <RefreshCw size={18} />
                        Reset
                    </button>
                    <button
                        onClick={handleApply}
                        className="flex-[2] rounded-xl bg-indigo-600 py-3.5 text-white font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <Check size={18} />
                        Apply Filters
                    </button>
                </div>
            </div>
        </>
    )
}
