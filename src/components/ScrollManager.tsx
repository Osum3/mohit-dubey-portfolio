import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to hash targets or the top on navigation, and moves focus to the main content on page changes. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previous = useRef(pathname)

  useEffect(() => {
    const pageChanged = previous.current !== pathname
    previous.current = pathname

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), pageChanged ? 60 : 0)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    if (pageChanged) document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}
