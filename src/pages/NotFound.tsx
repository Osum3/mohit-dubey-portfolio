import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container className="py-32 lg:py-48">
      <h1 className="display text-[clamp(2.5rem,7vw,6rem)]">This page does not exist.</h1>
      <p className="prose-serif mt-6 text-mute">The link may be old or mistyped. Head back to the work.</p>
      <Link to="/" className="mt-10 inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink">Back to home</Link>
    </Container>
  )
}
