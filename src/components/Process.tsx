import { process } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <h2 id="process-title" className="h-section max-w-4xl">How a deck gets made</h2>
        </Reveal>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70} className="flex min-h-64 flex-col justify-between rounded-lg border border-line bg-surface p-6 lg:aspect-[4/5] lg:min-h-0">
              <span className="text-5xl font-semibold tracking-tighter text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-mute">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
