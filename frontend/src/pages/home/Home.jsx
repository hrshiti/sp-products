import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../utils/constants.js'
import { ProductCard } from '../../components/product/ProductCard.jsx'
import { useBidContext } from '../../context/BidContext.jsx'
import { ProductCardSkeleton } from '../../components/product/ProductCardSkeleton.jsx'

export function Home() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const { products, searchQuery, filters } = useBidContext()
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl && CATEGORIES.includes(categoryFromUrl) ? categoryFromUrl : 'All Products',
  )

  useEffect(() => {
    if (categoryFromUrl && CATEGORIES.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [categoryFromUrl])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  const filteredProducts = useMemo(() => {
    let list = selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory)

    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
    }

    // Advanced Filters
    if (filters.minPrice) {
      list = list.filter((p) => p.currentBid >= Number(filters.minPrice))
    }
    if (filters.maxPrice) {
      list = list.filter((p) => p.currentBid <= Number(filters.maxPrice))
    }
    if (filters.rating) {
      // Mock rating since dummy data might not have it all, assume 4.5 if missing
      list = list.filter((p) => (p.rating || 4.5) >= filters.rating)
    }

    // Sort
    if (filters.sort === 'price_low') {
      list.sort((a, b) => a.currentBid - b.currentBid)
    } else if (filters.sort === 'price_high') {
      list.sort((a, b) => b.currentBid - a.currentBid)
    } else if (filters.sort === 'ending_soon') {
      list.sort((a, b) => a.timeLeftSeconds - b.timeLeftSeconds)
    } else {
      // newest (default - using id as proxy for time added)
      list.sort((a, b) => b.id - a.id)
    }

    return list
  }, [products, selectedCategory, searchQuery, filters])

  const endingSoon = useMemo(
    () =>
      [...products].sort(
        (a, b) => a.timeLeftSeconds - b.timeLeftSeconds,
      ).slice(0, 3),
    [products],
  )

  const categoryOptions = ['All Products', ...CATEGORIES]

  return (
    <div className="space-y-4 pb-24">


      {/* Category pills */}
      <section className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-none">
        {categoryOptions.map((c) => {
          const isActive = c === selectedCategory
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={[
                'shrink-0 rounded-full px-4 py-2 text-sm font-medium',
                isActive
                  ? 'bg-[#007bff] text-white'
                  : 'bg-slate-100 text-slate-600',
              ].join(' ')}
            >
              {c}
            </button>
          )
        })}
      </section>

      {/* Promotional banner - Auto Carousel */}
      <section className="relative mx-0 overflow-hidden rounded-none shadow-lg shadow-indigo-200">
        <BannerCarousel />
      </section>

      {/* Shop by Category */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-slate-900">Shop by Category</h3>
          <a href="#" className="text-xs font-semibold text-[#007bff]">See All</a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: 'Fashion', icon: '👕', color: 'bg-blue-50 text-blue-600' },
            { name: 'Mobile', icon: '📱', color: 'bg-green-50 text-green-600' },
            { name: 'Laptop', icon: '💻', color: 'bg-purple-50 text-purple-600' },
            { name: 'Camera', icon: '📷', color: 'bg-orange-50 text-orange-600' },
            { name: 'Shoes', icon: '👟', color: 'bg-red-50 text-red-600' },
            { name: 'Watch', icon: '⌚', color: 'bg-teal-50 text-teal-600' },
            { name: 'Gaming', icon: '🎮', color: 'bg-indigo-50 text-indigo-600' },
            { name: 'Books', icon: '📚', color: 'bg-yellow-50 text-yellow-600' },
          ].map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl ${cat.color} transition-transform group-hover:scale-110 group-active:scale-95 shadow-sm`}>
                {cat.icon}
              </div>
              <span className={`text-xs font-medium transition-colors ${selectedCategory === cat.name ? 'text-[#007bff] font-bold' : 'text-slate-700'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-3 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Featured Products
          </h3>
          <button onClick={() => navigate('/all-products')} className="text-xs font-semibold text-[#007bff]">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {isLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
              <ProductCardSkeleton key={idx.toString()} />
            ))
            : filteredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Ending soon */}
      <section className="space-y-3 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Ending soon</h3>
          <span className="text-xs text-slate-500">Top 3 auctions</span>
        </div>
        {!isLoading && (
          <div className="grid grid-cols-2 gap-3">
            {endingSoon.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Trending Electronics - Horizontal Scroll */}
      <section className="space-y-3">
        <div className="px-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Trending Electronics</h3>
          <button onClick={() => setSelectedCategory('Electronics')} className="text-xs font-semibold text-[#007bff]">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 snap-x scrollbar-none">
          {products.filter(p => ['Mobile', 'Laptop', 'Camera', 'Gaming', 'Watch', 'Electronics'].includes(p.category)).slice(0, 5).map(product => (
            <div key={product.id} className="w-40 shrink-0 snap-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Fashion & Lifestyle */}
      <section className="space-y-3 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Fashion & Lifestyle</h3>
          <button onClick={() => setSelectedCategory('Fashion')} className="text-xs font-semibold text-[#007bff]">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.filter(p => ['Fashion', 'Shoes', 'Watch', 'Clothes'].includes(p.category)).slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Recommended for You */}
      <section className="space-y-3">
        <div className="px-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Recommended for You</h3>
          <span className="text-xs text-slate-500">Based on your activity</span>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 snap-x scrollbar-none">
          {[...products].sort(() => 0.5 - Math.random()).slice(0, 5).map(product => (
            <div key={product.id} className="w-40 shrink-0 snap-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const banners = [
    {
      id: 1,
      tag: 'New Arrival',
      title: 'Summer Collection\n30% OFF',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200',
      bgClass: 'bg-linear-to-r from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      tag: 'Limited Offer',
      title: 'Premium Gadgets\nFlat 50% OFF',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200',
      bgClass: 'bg-linear-to-r from-purple-500 to-pink-600',
    },
    {
      id: 3,
      tag: 'Flash Sale',
      title: 'Sneaker Fest\nStarts @ $99',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
      bgClass: 'bg-linear-to-r from-orange-500 to-red-600',
    },
    {
      id: 4,
      tag: 'Trending',
      title: 'Smart Watches\nBuy 1 Get 1',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
      bgClass: 'bg-linear-to-r from-emerald-500 to-teal-600',
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <div className="relative w-full h-40"> {/* Fixed Reduced Height */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out px-5 py-4 ${banner.bgClass} flex items-center justify-between gap-4`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            zIndex: index === currentIndex ? 10 : 0
          }}
        >
          {/* Background Shape */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="flex-1 text-white relative z-10">
            <span className="inline-block rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-bold backdrop-blur-sm uppercase tracking-wider">
              {banner.tag}
            </span>
            <h2 className="mt-1 text-lg font-bold leading-tight whitespace-pre-line">
              {banner.title}
            </h2>
            <button
              type="button"
              className="mt-3 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-sm transition-transform active:scale-95 hover:bg-slate-50"
            >
              Shop Now
            </button>
          </div>

          <div className="h-28 w-28 shrink-0 relative z-10">
            <img
              src={banner.image}
              alt="Offer"
              className="h-full w-full object-cover rounded-xl shadow-lg rotate-3 border-2 border-white/20"
            />
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-3 left-5 z-20 flex gap-1.5">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}
