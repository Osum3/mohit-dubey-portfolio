import { about } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'
import PlaceholderTag from './PlaceholderTag'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <h2 id="about-title" className="h-section">{about.lead}</h2>
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={100}>
            <div className="space-y-6">
              {about.paragraphs.map((t) => (
                <p key={t} className="prose-serif">{t}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-12 border-t border-line">
              {about.principles.map((t) => (
                <li key={t} className="border-b border-line py-4 text-xl font-medium tracking-tight">{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-mute">
              <span>Industries</span>
              {about.industries.placeholder && <PlaceholderTag />}
              <span>{about.industries.text}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
