import { Outlet } from 'react-router-dom'
import { BottomNavbar } from './BottomNavbar.jsx'
import { Header } from './Header.jsx'
import { SafeArea } from './SafeArea.jsx'

export function AppLayout() {
  return (
    <SafeArea>
      <div className="min-h-dvh bg-slate-50 text-slate-900">
        <Header />

        <main className="mx-auto w-full max-w-md px-4 pb-24 pt-4">
          <Outlet />
        </main>

        <BottomNavbar />
      </div>
    </SafeArea>
  )
}

