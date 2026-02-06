import { formatTimeFromSeconds } from '../../utils/formatTime.js'
import { useCountdown } from '../../hooks/useCountdown.js'

export function CountdownTimer({ initialSeconds }) {
  const { secondsLeft, isFinished } = useCountdown(initialSeconds)
  const label = formatTimeFromSeconds(secondsLeft)

  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
        isFinished
          ? 'bg-slate-100 text-slate-500'
          : 'bg-emerald-50 text-emerald-700',
      ].join(' ')}
    >
      ⏱ {isFinished ? 'Ended' : label}
    </span>
  )
}

