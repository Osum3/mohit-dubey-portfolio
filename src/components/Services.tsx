import { services } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <h2 id="services-title" className="h-section max-w-4xl">What you can hire me for</h2>
        </Reveal>
        <ul className="mt-14 border-t border-ink/80 lg:mt-20">
          {services.map((s) => (
            <li key={s.name} className="group grid gap-2 border-b border-line py-6 transition-colors hover:border-accent sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-8">
              <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:col-span-6 sm:text-3xl lg:text-4xl">
                {s.name}
              </h3>
              <p className="prose-serif text-mute sm:col-span-6 lg:col-span-5 lg:col-start-8">{s.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
