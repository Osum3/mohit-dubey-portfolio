import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects, site } from '../data/content'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import PlaceholderTag from '../components/PlaceholderTag'
import SlideViewer from '../components/SlideViewer'
import SlideArt from '../components/SlideArt'
import NotFound from './NotFound'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-6 border-t border-line py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
      <h2 className="text-2xl font-semibold tracking-tight lg:col-span-4 lg:text-3xl">{title}</h2>
      <div className="lg:col-span-7 lg:col-start-6">{children}</div>
    </Reveal>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    if (project) document.title = `${project.title} | ${site.name}`
  }, [project])

  if (!project) return <NotFound />
  const next = projects[(index + 1) % projects.length]
  const { story } = project

  return (
    <article>
      <Container className="pb-16 pt-10 lg:pb-24 lg:pt-16">
        <Link to="/#work" className="inline-flex items-center gap-2 text-mute hover:text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          All work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-mute">
          <span>{project.type}</span>
          {project.placeholder && <PlaceholderTag />}
        </div>
        <h1 className="display mt-4 max-w-5xl text-[clamp(3rem,8vw,7.5rem)]">{project.title}</h1>
        <p className="prose-serif mt-8 text-mute">{project.summary}</p>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ['Client', project.client],
            ['Industry', project.industry],
            ['Year', project.year],
            ['Role', project.role],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-mute">{k}</dt>
              <dd className="mt-1 text-lg font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 overflow-hidden rounded-xl shadow-[0_30px_80px_-30px_rgba(23,19,43,0.45)] ring-1 ring-line">
          <SlideArt slide={project.slides[0]} palette={project.palette} eager />
        </div>
      </Container>

      <Container>
        <Block title="Challenge"><p className="prose-serif">{story.challenge}</p></Block>
        <Block title="Approach"><p className="prose-serif">{story.approach}</p></Block>
        <Block title="Design process">
          <ol className="space-y-5">
            {story.process.map((step, i) => (
              <li key={i} className="flex gap-5">
                <span className="w-8 shrink-0 text-xl font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                <p className="prose-serif">{step}</p>
              </li>
            ))}
          </ol>
        </Block>
        <Block title="Solution"><p className="prose-serif">{story.solution}</p></Block>

        <section aria-labelledby="final-title" className="border-t border-line py-14 lg:py-20">
          <h2 id="final-title" className="mb-10 text-2xl font-semibold tracking-tight lg:text-3xl">Final presentation</h2>
          <SlideViewer project={project} />
        </section>

        <Block title="Results">
          <ul className="space-y-4">
            {story.results.map((r, i) => (
              <li key={i} className="prose-serif">{r}</li>
            ))}
          </ul>
        </Block>
      </Container>

      <section aria-label="Next project" className="border-t border-line">
        <Container>
          <Link to={`/work/${next.slug}`} className="group flex flex-col gap-3 py-16 lg:py-24">
            <span className="text-mute">Next project</span>
            <span className="display text-[clamp(2.5rem,6vw,5.5rem)] transition-colors group-hover:text-accent">{next.title}</span>
          </Link>
        </Container>
      </section>
    </article>
  )
}
