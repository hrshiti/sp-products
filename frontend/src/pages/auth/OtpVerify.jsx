import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react'

export function OtpVerify() {
  const [otp, setOtp] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { login } = useAuth()

  const identifier = location.state?.identifier ?? 'Guest'

  const handleVerify = (event) => {
    event.preventDefault()
    if (!otp.trim()) return
    // Frontend-only: accept any OTP and "log in"
    login(identifier)
    navigate('/home', { replace: true })
  }

  return (
    <div className="min-h-dvh bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="relative h-40 bg-linear-to-br from-indigo-600 to-purple-700 p-8 flex flex-col justify-end">
          <button
            onClick={() => navigate('/auth/login')}
            className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
            <ShieldCheck size={120} />
          </div>
          <h1 className="text-3xl font-bold text-white relative z-10">Verify OTP</h1>
          <p className="text-indigo-100 text-sm relative z-10 opacity-90">Secure your account</p>
        </div>

        {/* Form Body */}
        <div className="p-8 pt-10">
          <form onSubmit={handleVerify} className="space-y-6">

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                Enter Code sent to <span className="text-indigo-600">{identifier}</span>
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="1 2 3 4"
                className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl text-center text-2xl tracking-widest font-mono font-bold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all placeholder:text-slate-300 placeholder:tracking-normal"
              />
            </div>

            <button
              type="submit"
              disabled={!otp.trim()}
              className={[
                'w-full py-3.5 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2',
                otp.trim()
                  ? 'bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-200'
                  : 'bg-slate-300 cursor-not-allowed shadow-none',
              ].join(' ')}
            >
              <span>Verify & Continue</span>
              {otp.trim() && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Didn't receive code?{' '}
              <button className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

