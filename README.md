# Mohit Dubey: Presentation Designer Portfolio

React + TypeScript + Tailwind CSS v4 + Vite.

## Run it
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Add your real content (everything is in `src/data/content.ts`)
- `site.email` and `site.linkedin`: your contact links (the Contact section shows a setup note until filled).
- `projects`: replace each placeholder project (client, industry, year, role, summary, story). Set `placeholder: false` when real.
- Real slides: put images in `public/projects/<slug>/` (WebP, 16:9, about 1600x900) and set each slide's `src`, e.g. `"/projects/project-1/01.webp"`. The abstract placeholder art is used only when `src` is empty.
- `stats`, `roles`, `clientLogos`, `testimonials`: add only real information. Placeholders are tagged on the page.
- `about` and `services` text is draft copy. Edit it so it sounds like you.

## Deploy
Vercel (`vercel.json`) and Netlify (`public/_redirects`) rewrites for client-side routing are included.
Update the `<title>` and meta tags in `index.html` and add your domain and an OG image when you have them.
