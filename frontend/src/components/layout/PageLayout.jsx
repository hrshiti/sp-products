import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function PageLayout({ title, children, showBack = true }) {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-50 space-y-4 pb-24">
            <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100/80 px-4 py-3 flex items-center gap-3 shadow-sm">
                {showBack && (
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 active:scale-95"
                    >
                        <ArrowLeft size={20} />
                    </button>
                )}
                <h1 className="text-lg font-bold text-slate-900 leading-none">{title}</h1>
            </div>
            <div className="px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {children}
            </div>
        </div>
    )
}
