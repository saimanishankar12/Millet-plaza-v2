# Millet Plaza Franchise Landing Page

A single page marketing site built to promote Millet Plaza's franchise investment opportunity, built with plain HTML, CSS, and JavaScript (no framework/build step required).

## Screenshot

<img width="1920" height="5485" alt="image" src="https://github.com/user-attachments/assets/3afca094-77cb-4e11-8534-67b4a6988bd5" />


*Full-page view of the franchise landing page — hero, opportunity section, investment formats, royalty structure, stats, operating model, and franchise enquiry form.*


## Overview

The page walks a prospective franchise investor through the pitch in order:

1. **Hero** : headline, value proposition, and primary CTAs ("Request Franchise Details", "Explore Formats") over a restaurant interior background image.
2. **The Opportunity** : positions the brand against the market gap ("stuck between guilt and monotony"), with three quick value pillars (familiar comfort food, upgraded with millets, accessible price points).
3. **Investment Formats** : two-column comparison of the "Restaurant" (₹1 Cr onwards) and "Flagship Restaurant" (₹1.5 Cr onwards) formats, each with a feature checklist.
4. **Royalty Banner** : highlights commission (2%) and marketing ROI (10%) figures in a dark contrast band with a CTA.
5. **Category Stats** : three key numbers (repeat visit rate, addressable market size, addressable cities) in a full-width dark section.
6. **Operating Model** :six-item grid explaining what the company handles end-to-end (outlet setup, staffing, tech, revenue management, QA, reporting).
7. **Franchise Enquiry Form** : lead capture form (name, email, phone, city, investment capacity, format preference, message) alongside a supporting benefits list.
8. **Footer** : brand recap and legal links.

## Tech Stack

- **HTML5** : semantic sectioned markup
- **CSS3** : custom styling (no framework); responsive layout via Flexbox/Grid
- **Vanilla JavaScript** : form handling/validation and any interactive behavior (e.g. scroll-triggered animations, format toggle, smooth scroll to sections)

No build tools, package manager, or server-side code are required — this is a static site that can be opened directly or hosted on any static file host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Project Structure

```
millet-plaza/
├── index.html          # Main landing page markup
├── css/
│   └── style.css        # All page styling
├── js/
│   └── script.js         # Form handling, interactions, animations
├── assets/
│   ├── images/           # Hero background, food photography, icons
│   └── logo/             # Millet Plaza logo (header + footer variants)
└── README.md
```

> Adjust the tree above to match your actual folder/file names if they differ.

## Running Locally

Since this is a static site, you can either:

**Option 1 — Open directly**
```bash
open index.html
```

**Option 2 — Serve locally** (recommended, avoids relative-path/CORS quirks)
```bash
npx serve .
```
or, with Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Key Sections to Customize

| Section | What to update |
|---|---|
| Hero | Background image, headline copy, CTA button links |
| Investment Formats | Pricing (`₹1 Cr`, `₹1.5 Cr`), feature checklist items |
| Royalty Banner | Commission % and marketing ROI % figures |
| Category Stats | Repeat visit rate, market size, city count |
| Franchise Form | Form action endpoint / email service integration, required field validation |

## Form Handling

The "Request Franchise Details" form currently collects:
- First Name, Last Name
- Email Address
- Phone Number
- Preferred City
- Investment Capacity (dropdown)
- Preferred Format (dropdown)
- Additional Info (textarea)

If this form isn't yet wired to a backend, you'll need to either:
- Point the `<form action="...">` at a form-handling service (e.g. Formspree, Netlify Forms, Google Forms), or
- Add a small serverless function / backend endpoint to receive and store/email submissions.

## Responsive Behavior

The layout should be tested at minimum across:
- Desktop (1280px+)
- Tablet (768px–1024px)
- Mobile (< 480px)

Pay particular attention to the two-column investment format cards and the franchise form layout, since both use side-by-side layouts on desktop that likely need to stack on smaller screens.

## License

Internal marketing site — not licensed for external distribution.
