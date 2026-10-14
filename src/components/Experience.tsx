import { clients, roles, stats } from '../data/content'
import Container from './Container'
import Reveal from './Reveal'
import PlaceholderTag from './PlaceholderTag'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <h2 id="exp-title" className="h-section max-w-4xl">Experience</h2>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:mt-20">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end bg-paper p-6 sm:p-8">
              <dt className="mt-4 flex flex-wrap items-center gap-2 text-mute">
                {s.label}
                {s.placeholder && <PlaceholderTag />}
              </dt>
              <dd className="text-6xl font-semibold tracking-tighter sm:text-7xl">
                {s.placeholder ? <span className="text-mute/50" aria-label="Not provided yet">&ndash;</span> : s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold tracking-tight">Clients I have worked with</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {clients.map((c) => (
              <li key={c.name} className="flex min-h-36 flex-col justify-between rounded-lg border border-line bg-surface p-6">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} loading="lazy" className="max-h-10 w-auto self-start object-contain" />
                ) : (
                  <span className="text-3xl font-semibold tracking-tight">{c.name}</span>
                )}
                {c.full && <span className="mt-6 text-mute">{c.full}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-3xl">
          <h3 className="text-2xl font-semibold tracking-tight">Where I have worked</h3>
          <ul className="mt-6 border-t border-line">
            {roles.map((r, i) => (
              <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5">
                <div>
                  <p className="text-xl font-medium">{r.title}</p>
                  <p className="text-mute">{r.company}</p>
                </div>
                <div className="flex items-center gap-3 text-mute">
                  {r.period}
                  {r.placeholder && <PlaceholderTag />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}