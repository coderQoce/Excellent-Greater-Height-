# Excellent Greater Height Standard Academy

React and Vite website for Excellent Greater Height Standard Academy in Ibadan.

## Run the site

From the project folder:

```bash
npm install
npm run dev
```

Vite prints the local address to open in a browser. To create the production build, run `npm run build`.

## Project structure

`src/App.jsx` selects the page for the current URL and wraps it with the shared navigation and footer. The page layouts and reusable sections live in separate files so they are easier to find and edit.

```text
src/
  App.jsx
  main.jsx
  components/
  data/
  pages/
  styles.css
```

### Pages

| Page | HTML entry point | Main React component or section |
| --- | --- | --- |
| Homepage | [`index.html`](index.html) | [`HomePage.jsx`](src/pages/HomePage.jsx) |
| About the school | [`about.html`](about.html) | [`AboutPage.jsx`](src/pages/AboutPage.jsx) |
| Classes and programmes / Academics | [`programs.html`](programs.html) | [`ProgramsPage.jsx`](src/pages/ProgramsPage.jsx) |
| News and events | [`news-events.html`](news-events.html) | [`NewsPage.jsx`](src/pages/NewsPage.jsx) |

All pages share [`Navbar.jsx`](src/components/Navbar.jsx), [`TopBar.jsx`](src/components/TopBar.jsx), and [`Footer.jsx`](src/components/Footer.jsx). The contact section and form are in [`ContactSection.jsx`](src/components/ContactSection.jsx). `Brand.jsx` and `InnerHero.jsx` are also shared components.

## Homepage sections

The homepage is assembled in `src/pages/HomePage.jsx` from these component files, in this order:

1. [`Hero.jsx`](src/components/Hero.jsx) — opening banner, school introduction, and link to About.
2. [`FeatureStrip.jsx`](src/components/FeatureStrip.jsx) — school highlights directly below the hero.
3. [`AboutSection.jsx`](src/components/AboutSection.jsx) — short introduction and campus image.
4. [`Programs.jsx`](src/components/Programs.jsx) — class cards and link to the full Academics page. Homepage cards do not show expandable details.
5. [`StatisticsBar.jsx`](src/components/StatisticsBar.jsx) — school overview strip.
6. [`UpdatesSection.jsx`](src/components/UpdatesSection.jsx) — News & Events preview and link to the blog page.
7. [`AdmissionsSection.jsx`](src/components/AdmissionsSection.jsx) — admissions call to action.
8. [`ContactSection.jsx`](src/components/ContactSection.jsx) — contact details and enquiry form.

## Where to update school content

Shared content and page data are collected in [`src/data/siteData.js`](src/data/siteData.js):

- `school` — phone, email, and address.
- `photos` — image URLs used across the pages.
- `programs` — class names, summaries, learning overviews, and benefits. The expandable `Class details` dropdowns are displayed on the Academics page only.
- `facilities` — About page facility cards, descriptions, and images.
- `teachers` — the five teacher profile names, class assignments, and portrait URLs.
- `announcements` — News & Events blog cards, dates, times, summaries, and article text.

The teacher names, class assignments, announcements, dates, and event details currently shown are sample content and should be replaced with school-approved information.

## Styling and assets

- [`src/styles.css`](src/styles.css) — global design, page layouts, responsive rules, and component styles.
- [`src/main.jsx`](src/main.jsx) — React entry point and Bootstrap CSS import.
- [`public/crest.svg`](public/crest.svg) — school crest placeholder used as the browser favicon.
- `public/images/` — location for locally hosted school photos and other image assets.
- [`vite.config.js`](vite.config.js) — React plugin and multi-page build entries.

