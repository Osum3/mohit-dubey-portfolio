/**
 * All site content lives here. Anything marked `placeholder: true` (or left
 * empty) is NOT real information and shows a "Placeholder" tag on the page.
 * Replace it with real details, then set `placeholder` to false.
 */

export type SlideVariant = 'title' | 'chart' | 'split' | 'grid' | 'quote' | 'timeline'

export interface Slide {
  alt: string
  /** Path to a real slide image, e.g. "/projects/investor-deck/01.webp". Leave empty to show placeholder art. */
  src?: string
  variant: SlideVariant
}

export interface Project {
  slug: string
  title: string
  client: string
  industry: string
  year: string
  role: string
  type: string
  summary: string
  /** 0-4: colour set used by the placeholder slide art */
  palette: number
  placeholder: boolean
  slides: Slide[]
  story: {
    challenge: string
    approach: string
    process: string[]
    solution: string
    results: string[]
  }
}

export const site = {
  name: 'Mohit Dubey',
  role: 'Presentation Designer',
  experience: '9+ years',
  headline: 'Turning ideas into presentations people remember.',
  intro:
    'I design pitch decks, investor decks and corporate presentations that give a message structure, a point of view and a look worth presenting.',
  /** Fill these in. Empty values show a placeholder in the Contact section. */
  email: '',
  linkedin: '',
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

const variants: SlideVariant[] = ['title', 'chart', 'split', 'grid', 'quote', 'timeline']

const makeSlides = (label: string, offset: number): Slide[] =>
  Array.from({ length: 6 }, (_, i) => ({
    variant: variants[(i + offset) % variants.length],
    alt: `${label}, placeholder slide ${i + 1}`,
  }))

const makeStory = (type: string): Project['story'] => ({
  challenge: `Placeholder: describe the situation behind this ${type.toLowerCase()}. Who was the audience, what was at stake, and what was not working before you started?`,
  approach:
    'Placeholder: explain how you approached the brief. What did you decide about the story, the structure and the visual direction, and why?',
  process: [
    'Placeholder: what you learned in discovery',
    'Placeholder: how you shaped the narrative and hierarchy',
    'Placeholder: the visual system you built',
    'Placeholder: how you refined and delivered the final deck',
  ],
  solution:
    'Placeholder: describe the finished presentation. What makes it work, and which slides best show that?',
  results: [
    'Placeholder: add a real outcome only if you can confirm it, for example how the deck was used or the feedback you received.',
  ],
})

const stub = (
  n: number,
  title: string,
  type: string,
  palette: number,
): Project => ({
  slug: `project-${n}`,
  title,
  client: 'Client name',
  industry: 'Industry',
  year: 'Year',
  role: 'Your role',
  type,
  summary:
    'Placeholder: one or two sentences on what this presentation was for and what you did.',
  palette,
  placeholder: true,
  slides: makeSlides(title, n),
  story: makeStory(type),
})

export const projects: Project[] = [
  stub(1, 'Investor deck', 'Investor deck', 0),
  stub(2, 'Pitch deck', 'Pitch deck', 1),
  stub(3, 'Sales presentation', 'Sales presentation', 2),
  stub(4, 'Corporate presentation', 'Corporate presentation', 3),
  stub(5, 'Keynote', 'Keynote presentation', 4),
]

export const about = {
  lead: 'A good presentation is a decision the audience makes with you.',
  paragraphs: [
    'I treat every deck as an argument. Before any layout, I work out what the audience should understand, feel and do, then I cut everything that does not help.',
    'Design is how that argument gets across: a clear hierarchy, a type system that holds up on slide forty, and data shown so the point is obvious in a few seconds.',
    'I have been doing this for 4+ years, and I still start every project by asking one question: what is the one thing this room should remember?',
  ],
  principles: [
    'One idea per slide',
    'Structure before style',
    'Data that explains itself',
    'A system, not a collection of slides',
  ],
  industries: {
    placeholder: true,
    text: 'Add the industries you have worked in.',
  },
}

export const services = [
  { name: 'Pitch deck design', text: 'A sharp story and a clean visual system for the room you need to win.' },
  { name: 'Investor deck design', text: 'Numbers, market and vision arranged so investors see the case quickly.' },
  { name: 'Corporate presentations', text: 'Company, strategy and update decks that look consistent and credible.' },
  { name: 'Sales decks', text: 'Presentations that help a seller explain value and move the conversation forward.' },
  { name: 'Marketing presentations', text: 'Campaign, product and brand stories with a clear visual voice.' },
  { name: 'Keynote design', text: 'Stage-ready slides made to support a speaker, not compete with them.' },
  { name: 'Presentation redesign', text: 'Take an existing deck and make it clearer, tighter and better looking.' },
  { name: 'Presentation templates', text: 'Reusable layouts and styles so a team can build on-brand decks fast.' },
  { name: 'Storytelling and content structuring', text: 'Shape rough content into a narrative with a beginning, a point and an ask.' },
  { name: 'Data visualization', text: 'Charts and diagrams that make complex information easy to read.' },
]

export const process = [
  { title: 'Discover', text: 'Understand the objective, audience and message.' },
  { title: 'Structure', text: 'Create the narrative and information hierarchy.' },
  { title: 'Design', text: 'Translate the story into a strong visual system.' },
  { title: 'Refine', text: 'Polish every detail and prepare the final deck.' },
  { title: 'Deliver', text: 'Provide a presentation that is ready to present.' },
]

/** Only real numbers belong here. Placeholders are flagged and clearly shown. */
export const stats = [
  { label: 'Years designing presentations', value: '9+', placeholder: false },
  { label: 'Presentations designed', value: '', placeholder: true },
  { label: 'Clients worked with', value: '', placeholder: true },
  { label: 'Industries served', value: '', placeholder: true },
]

export const testimonials = [
  { quote: 'Placeholder: paste a real client testimonial here.', name: 'Client name', role: 'Role, Company', placeholder: true },
  { quote: 'Placeholder: a second real testimonial, with the client\u2019s permission.', name: 'Client name', role: 'Role, Company', placeholder: true },
]

/** Work history. Replace the placeholders with real roles and dates. */
export const roles = [
  { title: 'Role title', company: 'Company or "Freelance"', period: 'Years', placeholder: true },
  { title: 'Role title', company: 'Company or "Freelance"', period: 'Years', placeholder: true },
]

/** Client logos: add real image paths (with permission) to replace the empty slots. */
export const clientLogos: { name: string; src?: string }[] = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }]
