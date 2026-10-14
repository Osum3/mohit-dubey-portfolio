import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'
import SlideArt from './SlideArt'
import PlaceholderTag from './PlaceholderTag'

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <h2 id="work-title" className="h-section max-w-4xl">Selected work</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 lg:mt-24 lg:gap-36">
          {projects.map((p, i) => (
            <Reveal key={p.slug} as="article" className="group relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={`deck relative lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="relative mx-[3%] aspect-video">
                  {p.slides.slice(0, 3).map((s, n) => (
                    <div
                      key={n}
                      data-n={n}
                      className="deck-card absolute inset-0 overflow-hidden rounded-lg shadow-[0_24px_60px_-28px_rgba(23,19,43,0.55)] ring-1 ring-line"
                    >
                      <SlideArt slide={s} palette={p.palette} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap items-center gap-3 text-mute">
                  <span>{p.type}</span>
                  {p.placeholder && <PlaceholderTag />}
                </div>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <Link to={`/work/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {p.title}
                  </Link>
                </h3>
                <p className="prose-serif mt-5 text-mute">{p.summary}</p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-[0.95rem]">
                  {[
                    ['Client', p.client],
                    ['Industry', p.industry],
                    ['Year', p.year],
                    ['Role', p.role],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-mute">{k}</dt>
                      <dd className="mt-0.5 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-8 font-semibold text-accent transition-transform group-hover:translate-x-1">Read the case study</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
