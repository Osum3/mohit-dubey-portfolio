import { clientLogos, roles, stats } from '../data/content'
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

        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
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

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
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

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight">Clients</h3>
              {clientLogos.every((l) => !l.src) && <PlaceholderTag />}
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-3">
              {clientLogos.map((l, i) => (
                <li key={i} className="grid aspect-[3/2] place-items-center rounded-md border border-dashed border-mute/50 p-3 text-sm text-mute">
                  {l.src ? <img src={l.src} alt={l.name} loading="lazy" className="max-h-full object-contain" /> : 'Logo'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
