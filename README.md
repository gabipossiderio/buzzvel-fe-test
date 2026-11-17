# Luma — Buzzvel Front-End Coding Challenge

A responsive landing page for **Luma**, built from the *Buzzvel FE Test 2026* Figma design with **Next.js (App Router), TypeScript and Tailwind CSS**.

- **Live:** https://buzzvel-fe-test-omega.vercel.app
- **Video demo:** https://buzzvel-fe-test-omega.vercel.app/demo.html

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
```

## Stack

- Next.js 16 (App Router, static prerendering)
- React 19 + TypeScript
- Tailwind CSS 4 (design tokens in `src/app/globals.css` via `@theme`)
- `next/font` (Inter and Plus Jakarta Sans, self-hosted) and `next/image`

## Project structure

```
src/
  app/            layout (fonts, metadata), page, global styles, icon
  components/
    sections/     one component per page section (Header, Hero, Categories, ...)
    ui/           reusable pieces (ButtonLink, Container, SectionIntro, FormField, AvatarStack, Icons)
  data/           typed mock content used by the sections
  lib/            pure helpers (contact form validation)
public/
  images/         photos exported from Figma, resized and compressed
  decor/          decorative SVG icons used in the final call to action
```

## Interactions

- **Mobile menu:** toggle with `aria-expanded`/`aria-controls`; closes on Escape, on link click and when resizing to desktop.
- **Anchor navigation:** header, buttons and footer links scroll to the related section (smooth scrolling only when the user has not asked for reduced motion).
- **Contact form:** client-side validation with inline error messages (`aria-invalid` + `aria-describedby`), focus moves to the first invalid field, a loading state while "sending" (mocked, no backend) and a success state with the option to send another message.
- **Hover and focus states** on buttons, links and category cards. Every animation is disabled with `prefers-reduced-motion`.

## Key decisions

- **Pixel values from the Figma file.** Spacing, font sizes, line heights, letter spacing, colors and radii were read from the Figma file and turned into Tailwind tokens and utilities (`eyebrow`, `heading-1`, `heading-2`, `heading-3`, `lead`). Desktop follows the 1280px frame and mobile the 402px frame.
- **Tablet.** The design has no tablet frame. Between 640px and 1023px the page keeps the mobile structure, but buttons sit side by side and the category cards use two columns. The desktop layout starts at 1024px.
- **People gallery.** Each photo uses the exact position from both the mobile and the desktop frames, as percentages of the canvas, so the collage scales without breaking.
- **Mobile menu.** The design only shows the menu icon, so I added a simple drop-down panel that matches the visual language of the page.
- **Design inconsistencies I normalized:**
  - The desktop "How it works" steps all read "Step 01". I used 01, 02 and 03, as in the mobile frame.
  - The mobile contact form copy is in Portuguese ("Nome completo", "Enviar mensagem"). I kept the whole page in English, as in the desktop frame.
  - Navigation links have no target pages, so they point to the most related section.
- **Decorative shapes** in the final call to action only appear on desktop, as in the design. They are `aria-hidden` and positioned relative to the 1280px frame.
- **Performance.** Photos were resized to about 2x their displayed size before being added to the repo, and `next/image` serves them as AVIF/WebP. Only the hero image is preloaded. Fonts are self-hosted with `next/font`.
- **Contrast.** Two design colors were 4.45:1, just under WCAG AA. The secondary gray went from `#6d7384` to `#6a7081` and the text on blue from `#e7e7ec` to white. The difference is barely visible but passes AA (4.65:1 and 5.49:1).
- **Accessibility.** Semantic landmarks and headings, skip link, visible focus states, labelled form fields, descriptive `alt` text for content images and empty `alt` for decorative ones.

## Known gaps

- The form does not send data anywhere; submission is simulated.
- There are no automated tests. The validation logic lives in `src/lib/validateContact.ts` so it can be covered by unit tests easily.
- Font rendering differs slightly between the browser and Figma, so a few lines wrap a little differently.

## Time spent

About 2 hours, including reading the design, building, and comparing each section with the Figma frames on desktop, tablet and mobile.

## AI tools

I used **Claude (Claude Code)** as a coding assistant to:

- read the layer data from the Figma file;
- draft components;
- compare screenshots of the page with the Figma frames.

How I checked the result:

- Compared each section side by side with the design at 402px and 1280px, and checked 768px.
- Tested the menu, the anchor links, the form (errors, loading and success), keyboard navigation and reduced motion in the browser.
- Ran `npm run lint`, `npx tsc --noEmit` and a production build with no errors or warnings.
- Ran Lighthouse on the production build.

## Lighthouse (production build, local)

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | 96 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |
