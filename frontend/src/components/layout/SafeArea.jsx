export function SafeArea({ children }) {
  return (
    <div className="min-h-dvh bg-slate-50 [padding-top:env(safe-area-inset-top)] [padding-bottom:env(safe-area-inset-bottom)]">
      {children}
    </div>
  )
}

