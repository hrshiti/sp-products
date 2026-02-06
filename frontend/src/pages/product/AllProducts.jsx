import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import { useBidContext } from '../../context/BidContext.jsx'
import { CATEGORIES } from '../../utils/constants.js'
import { ProductCard } from '../../components/product/ProductCard.jsx'

import { useSearchParams } from 'react-router-dom'

export function AllProducts() {
    const navigate = useNavigate()
    const { products } = useBidContext()
    const [searchParams] = useSearchParams()
    const initialCategory = searchParams.get('category') || 'All'
    const [selectedCategory, setSelectedCategory] = useState(initialCategory)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('newest') // newest, price-low, price-high
    const [showFilters, setShowFilters] = useState(false)

    const filteredProducts = useMemo(() => {
        let list = [...products]

        // 1. Filter by Category
        if (selectedCategory !== 'All') {
            list = list.filter((p) => p.category === selectedCategory)
        }

        // 2. Filter by Search
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            )
        }

        // 3. Sort
        if (sortBy === 'price-low') {
            list.sort((a, b) => a.currentBid - b.currentBid)
        } else if (sortBy === 'price-high') {
            list.sort((a, b) => b.currentBid - a.currentBid)
        } else if (sortBy === 'ending-soon') {
            list.sort((a, b) => a.timeLeftSeconds - b.timeLeftSeconds)
        } else {
            // Default newest (by ID desc for now as proxy)
            list.sort((a, b) => b.id - a.id)
        }

        return list
    }, [products, selectedCategory, searchQuery, sortBy])

    return (
        <div className="space-y-4 pb-24 min-h-screen">
            {/* Page Header with Search */}
            <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md -mx-4 px-4 py-3 border-b border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19 l-7-7 7-7" /></svg>
                    </button>
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-100 border-none rounded-xl py-2 pl-9 pr-4 text-sm focus:ring-1 focus:ring-[#007bff] focus:bg-white transition-all"
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`p-2.5 rounded-xl transition-colors ${showFilters ? 'bg-[#007bff] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        <SlidersHorizontal size={18} />
                    </button>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Category</label>
                                {selectedCategory !== 'All' && <button onClick={() => setSelectedCategory('All')} className="text-xs text-[#007bff] font-medium">Reset</button>}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['All', ...CATEGORIES].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${selectedCategory === cat
                                            ? 'bg-blue-50 border-blue-200 text-blue-600'
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Sort By</label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'newest', label: 'Newest Arrivals' },
                                    { id: 'ending-soon', label: 'Ending Soon' },
                                    { id: 'price-low', label: 'Price: Low to High' },
                                    { id: 'price-high', label: 'Price: High to Low' },
                                ].map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setSortBy(opt.id)}
                                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors flex items-center justify-between ${sortBy === opt.id
                                            ? 'bg-slate-800 text-white'
                                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                            }`}
                                    >
                                        {opt.label}
                                        {sortBy === opt.id && <div className="h-1.5 w-1.5 rounded-full bg-green-400" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between px-1">
                <h1 className="text-lg font-bold text-slate-900">
                    {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h1>
                <span className="text-xs text-slate-500 font-medium">
                    {filteredProducts.length} results
                </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-2 py-12 text-center text-slate-500">
                        <div className="mx-auto h-12 w-12 text-slate-300 mb-3">
                            <Search className="h-full w-full" />
                        </div>
                        <p>No products found matching your filters.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
