import { NavLink } from 'react-router-dom'

function NavItem({ to, icon, activeIcon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-300 ease-out sm:flex-none sm:w-16`
      }
      end
    >
      {({ isActive }) => (
        <>
          <div
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 ${isActive
                ? 'bg-[#007bff]/10 -translate-y-2 shadow-sm'
                : 'hover:bg-slate-50'
              }`}
          >
            {isActive ? activeIcon : icon}
            {isActive && (
              <span className="absolute -bottom-2 h-1 w-1 rounded-full bg-[#007bff] ring-2 ring-white" />
            )}
          </div>
          <span
            className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'text-[#007bff] translate-y-0 opacity-100' : 'text-slate-400 opacity-0 absolute top-full'
              }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}

export function BottomNavbar() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-sm items-center justify-between rounded-3xl bg-white/95 px-3 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-slate-100 backdrop-blur-xl">
        <NavItem
          to="/home"
          label="Home"
          icon={
            <svg className="h-6 w-6 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          activeIcon={
            <svg className="h-6 w-6 text-[#007bff] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          }
        />
        <NavItem
          to="/categories"
          label="Catalog"
          icon={
            <svg className="h-6 w-6 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          }
          activeIcon={
            <svg className="h-6 w-6 text-[#007bff] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2zm-10 10a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
            </svg>
          }
        />
        <NavItem
          to="/bids"
          label="My Bids"
          icon={
            <svg className="h-6 w-6 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          }
          activeIcon={
            <svg className="h-6 w-6 text-[#007bff] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          }
        />
        <NavItem
          to="/profile"
          label="Profile"
          icon={
            <svg className="h-6 w-6 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          activeIcon={
            <svg className="h-6 w-6 text-[#007bff] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          }
        />
      </nav>
    </div>
  )
}
