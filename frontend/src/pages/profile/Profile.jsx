import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { useBidContext } from '../../context/BidContext.jsx'
import {
  User, Settings, ShoppingBag, CreditCard, HelpCircle,
  FileText, LogOut, ChevronRight, Bell, Shield, Heart
} from 'lucide-react'

export function Profile() {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuth()
  const { myBids } = useBidContext()

  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const menuItems = [
    { icon: User, label: 'Edit Profile', path: '/profile/edit' }, // Placeholder route
    { icon: ShoppingBag, label: 'My Bids', path: '/bids', badge: myBids.length > 0 ? `${myBids.length}` : null },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: CreditCard, label: 'Wallet & Payments', path: '/wallet' }, // Placeholder
    { icon: Bell, label: 'Notifications', path: '/notifications' }, // Placeholder
    { icon: Settings, label: 'Settings', path: '/settings' }, // Placeholder
    { icon: Shield, label: 'Privacy & Security', path: '/privacy' }, // Placeholder
    { icon: HelpCircle, label: 'Help & Support', path: '/support' }, // Placeholder
    { icon: FileText, label: 'Terms & Conditions', path: '/terms' }, // Placeholder
  ]

  return (
    <div className="pb-20 space-y-6"> {/* Added padding bottom for navbar space */}
      <h1 className="text-2xl font-bold text-slate-900 pt-2 px-1">Profile</h1>

      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
        <div className="h-16 w-16 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          {isAuthenticated ? user.identifier[0].toUpperCase() : <User />}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-slate-900 truncate">
            {isAuthenticated ? 'User' : 'Guest User'}
          </h2>
          <p className="text-sm text-slate-500 truncate">
            {isAuthenticated ? user.identifier : 'Sign in to access all features'}
          </p>
        </div>
        {!isAuthenticated && (
          <button
            onClick={() => navigate('/auth/login')}
            className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        )}
      </div>

      {/* Stats Cards (Optional but nice) */}
      {isAuthenticated && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-bold text-indigo-600">{myBids.length}</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Bids</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Orders Won</div>
          </div>
        </div>
      )}

      {/* Menu Options */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.path && navigate(item.path)} // Check if path exists or handle logic
            className={`w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-slate-50' : ''
              }`}
          >
            <div className="p-2 rounded-xl bg-slate-50 text-slate-600">
              <item.icon size={20} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </button>
        ))}
      </div>

      {/* Logout Button */}
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="w-full bg-slate-100 text-slate-600 font-bold py-3.5 rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      )}

      <div className="text-center text-xs text-slate-400 pt-4">
        App Version 1.0.0
      </div>
    </div>
  )
}

