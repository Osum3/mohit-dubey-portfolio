import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-5 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top" className="w-fit hover:text-ink">Back to top</a>
      </div>
    </footer>
  )
}
