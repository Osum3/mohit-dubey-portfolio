import { testimonials } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'
import PlaceholderTag from './PlaceholderTag'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <h2 id="testimonials-title" className="h-section max-w-4xl">What clients say</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-8 sm:p-10">
                <blockquote className="font-serif text-2xl leading-snug sm:text-[1.75rem]">{t.quote}</blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center gap-3">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-mute">{t.role}</span>
                  {t.placeholder && <PlaceholderTag />}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
