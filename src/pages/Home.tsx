import { useEffect } from 'react'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Mohit Dubey | Presentation Designer'
  }, [])
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Services />
      <Process />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}
