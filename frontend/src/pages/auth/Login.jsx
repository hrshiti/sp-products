import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LogIn, ArrowRight } from 'lucide-react'

export function Login() {
  const [identifier, setIdentifier] = useState('')
  const navigate = useNavigate()

  const handleContinue = (event) => {
    event.preventDefault()
    if (!identifier.trim()) return
    navigate('/auth/verify', { state: { identifier } })
  }

  return (
    <div className="min-h-dvh bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="relative h-40 bg-linear-to-br from-indigo-600 to-purple-700 p-8 flex flex-col justify-end">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
            <LogIn size={120} />
          </div>
          <h1 className="text-3xl font-bold text-white relative z-10">Welcome Back</h1>
          <p className="text-indigo-100 text-sm relative z-10 opacity-90">Sign in to continue</p>
        </div>

        {/* Form Body */}
        <div className="p-8 pt-10">
          <form onSubmit={handleContinue} className="space-y-6">

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile Number or Email</label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={!identifier.trim()}
              className={[
                'w-full py-3.5 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2',
                identifier.trim()
                  ? 'bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-200'
                  : 'bg-slate-300 cursor-not-allowed shadow-none',
              ].join(' ')}
            >
              <span>Continue</span>
              {identifier.trim() && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline">
                Sign Up
              </Link>
            </p>
            <div className="text-[10px] text-slate-400 px-4 leading-relaxed">
              By continuing, you agree to our Terms of Service & Privacy Policy. This is a demo.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

