import { site } from '../data/content'
import Container from './Container'

function Action({ label, href, hint }: { label: string; href: string; hint: string }) {
  const base = 'inline-flex items-center gap-3 rounded-full px-7 py-4 text-lg font-semibold'
  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${base} bg-paper text-ink transition-transform hover:-translate-y-0.5`}
    >
      {label}
    </a>
  ) : (
    <span className={`${base} border border-dashed border-accent-ink/60`}>
      {label}
      <span className="rounded-full border border-dashed border-accent-ink/60 px-2.5 py-0.5 text-xs font-medium">{hint}</span>
    </span>
  )
}

export default function Contact() {
  const mail = site.email ? `mailto:${site.email}` : ''
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-accent py-24 text-accent-ink lg:py-40">
      <Container>
        <h2 id="contact-title" className="display max-w-5xl text-[clamp(2.75rem,7.5vw,7rem)]">
          Have a story worth presenting?
        </h2>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug sm:text-3xl">
          Let&rsquo;s turn it into a presentation people remember.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Action label={site.email || 'Email me'} href={mail} hint="Add email" />
          <Action label="LinkedIn" href={site.linkedin} hint="Add link" />
        </div>
        {(!site.email || !site.linkedin) && (
          <p className="mt-6 flex items-center gap-2 text-sm">
            <span className="rounded-full border border-dashed border-accent-ink/60 px-2.5 py-0.5 text-xs font-medium">Setup</span>
            Add your email and LinkedIn URL in src/data/content.ts.
          </p>
        )}
      </Container>
    </section>
  )
}
