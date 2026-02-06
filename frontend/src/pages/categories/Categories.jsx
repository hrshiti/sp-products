import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../utils/constants.js'
import { useBidContext } from '../../context/BidContext.jsx'

export function Categories() {
  const { products } = useBidContext()

  return (
    <div className="space-y-4 pb-24">
      <div className="sticky top-0 z-10 bg-slate-50 pb-2 pt-1 mb-2 border-b border-slate-200/50 backdrop-blur-sm bg-slate-50/90">
        <h1 className="text-2xl font-bold text-slate-900">Categories</h1>
        <p className="text-xs font-medium text-slate-500">Pick a category to explore items</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((category) => {
          const count = products.filter((p) => p.category === category).length

          return (
            <Link
              key={category}
              to={`/all-products?category=${encodeURIComponent(category)}`}
              className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition active:scale-95 flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-semibold text-slate-800 group-hover:text-[#007bff] transition-colors">{category}</div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {count} items
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

