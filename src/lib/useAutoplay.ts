import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Cycles an index on an interval. Never runs when paused or when the visitor prefers reduced motion. */
export function useAutoplay(length: number, ms: number, paused: boolean) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (paused || prefersReducedMotion() || length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), ms)
    return () => window.clearInterval(id)
  }, [length, ms, paused, index])

  return [index, setIndex] as const
}
