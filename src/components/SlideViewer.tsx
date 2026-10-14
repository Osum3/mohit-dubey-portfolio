import { useRef, useState } from 'react'
import type { Project } from '../data/content'
import SlideArt from './SlideArt'
import PlaceholderTag from './PlaceholderTag'

export default function SlideViewer({ project }: { project: Project }) {
  const [index, setIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const total = project.slides.length
  const go = (n: number) => setIndex((n + total) % total)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1) }
  }

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${project.title} slides`}
      onKeyDown={onKeyDown}
    >
      <div className="relative overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-30px_rgba(23,19,43,0.45)] ring-1 ring-line">
        <div className="relative aspect-video">
          {project.slides.map((s, i) => (
            <div key={i} className="slide-layer absolute inset-0" data-active={i === index} aria-hidden={i !== index}>
              <SlideArt slide={s} palette={project.palette} eager={i === 0} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-3 text-mute">
          <span aria-live="polite">Slide {index + 1} of {total}</span>
          {project.placeholder && <PlaceholderTag label="Placeholder slides" />}
        </p>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous slide" onClick={() => go(index - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:bg-ink hover:text-paper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next slide" onClick={() => go(index + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:bg-ink hover:text-paper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {project.slides.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`block w-full overflow-hidden rounded-md ring-2 transition-opacity ${i === index ? 'ring-accent' : 'opacity-60 ring-transparent hover:opacity-100'}`}
            >
              <SlideArt slide={{ ...s, alt: '' }} palette={project.palette} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
