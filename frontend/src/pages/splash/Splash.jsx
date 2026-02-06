import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/auth/login', { replace: true }), 800)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 text-center">
        <img
          src="/logo.svg"
          alt="Sp Product"
          className="mb-4 h-20 w-20 rounded-2xl shadow-lg shadow-indigo-500/30 animate-pulse"
        />
        <h1 className="text-2xl font-semibold tracking-tight">Sp Product</h1>
        <p className="mt-2 text-sm text-white/70">Bid Smart. Win Smart.</p>
      </div>
    </div>
  )
}

