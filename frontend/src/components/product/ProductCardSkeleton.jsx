import { Skeleton } from '../common/Skeleton.jsx'

export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <Skeleton className="mb-3 h-36 w-full rounded-t-2xl" />
      <Skeleton className="mb-2 h-3 w-3/4" />
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-14" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <Skeleton className="h-3 w-14" />
        <Skeleton className="h-4 w-16 rounded-full" />
      </div>
      <Skeleton className="mt-3 h-7 w-full rounded-full" />
    </div>
  )
}

