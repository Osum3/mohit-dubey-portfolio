import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, site } from '../data/content'
import { useAutoplay } from '../lib/useAutoplay'
import Container from './Container'
import SlideArt from './SlideArt'
import PlaceholderTag from './PlaceholderTag'

export default function Hero() {
  const [hovering, setHovering] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [index, setIndex] = useAutoplay(projects.length, 4500, hovering || userPaused)
  const current = projects[index]
  const go = (n: number) => setIndex((n + projects.length) % projects.length)

  return (
    <section aria-labelledby="hero-title" className="pb-20 pt-10 sm:pt-16 lg:pb-32 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="hero-seq text-lg text-mute" style={{ '--i': 0 } as React.CSSProperties}>
            {site.name}, {site.role.toLowerCase()} with {site.experience} of experience
          </p>
          <h1
            id="hero-title"
            className="display hero-seq mt-5 break-words text-[clamp(2.75rem,5vw,5.25rem)]"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            {site.headline}
          </h1>
          <p className="prose-serif hero-seq mt-7 text-mute" style={{ '--i': 2 } as React.CSSProperties}>
            {site.intro}
          </p>
          <div className="hero-seq mt-9 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
            <Link to="/#work" className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5">
              View selected work
            </Link>
            <Link to="/#contact" className="rounded-full border border-ink/25 px-7 py-3.5 font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              Start a project
            </Link>
          </div>
        </div>

        <div
          className="hero-stage lg:col-span-7"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Presentation slides preview"
            className="relative overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-30px_rgba(23,19,43,0.45)] ring-1 ring-line"
          >
            <div className="relative aspect-video">
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  className="slide-layer absolute inset-0"
                  data-active={i === index}
                  aria-hidden={i !== index}
                >
                  <SlideArt slide={p.slides[0]} palette={p.palette} eager={i === 0} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="flex items-center gap-3 text-mute" aria-live="off">
              <span className="font-medium text-ink">{current.type}</span>
              <span>{index + 1} of {projects.length}</span>
              {current.placeholder && <PlaceholderTag label="Placeholder slide" />}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setUserPaused((p) => !p)} className="rounded-full border border-line px-4 py-2 font-medium hover:bg-ink hover:text-paper">
                {userPaused ? 'Play' : 'Pause'}
              </button>
              <button type="button" aria-label="Previous slide" onClick={() => go(index - 1)} className="grid h-10 w-10 place-items-center rounded-full border border-line hover:bg-ink hover:text-paper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" aria-label="Next slide" onClick={() => go(index + 1)} className="grid h-10 w-10 place-items-center rounded-full border border-line hover:bg-ink hover:text-paper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
