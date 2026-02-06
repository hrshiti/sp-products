import { useEffect, useState } from 'react'

export function useCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

  useEffect(() => {
    if (!Number.isFinite(initialSeconds)) return undefined

    setSecondsLeft(initialSeconds)
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [initialSeconds])

  const isFinished = secondsLeft <= 0

  return { secondsLeft, isFinished }
}

