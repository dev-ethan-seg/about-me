---
name: a11y-check
description: Deep accessibility audit for the portfolio — palette-specific contrast ratios, single-page nav patterns, semantic HTML, and motion preferences
---

Run this audit on any component or on the full page before deploying. This is tuned to the specific patterns and color palette of Ethan Segovia's portfolio.

---

## Skip Link

The first element inside `<body>` must be a visually hidden skip link that becomes visible on focus:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4a5e1f] focus:text-white focus:font-['DM_Mono',monospace] focus:text-[11px] focus:tracking-[0.12em] focus:uppercase"
>
  Skip to main content
</a>
```

The main content section needs `id="main-content"`.

---

## Navigation

```tsx
<nav aria-label="Main navigation">
  {/* Anchor links must have descriptive text — not just "#" or icons */}
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</nav>
```

- Each `href="#section-id"` must match a `<section id="...">` in the DOM
- The section must contain an `<h2>` so screen readers land in a meaningful place

---

## Color Contrast — This Palette

These are the critical findings for the exact hex values in this project's design system:

| Foreground | Background | Ratio | WCAG AA (normal) | WCAG AA (large) | Safe use |
|---|---|---|---|---|---|
| `#1a1a1a` (ink) | `#f7f5f0` (paper) | ~17:1 | ✅ | ✅ | Any size |
| `#3d3d3a` (ink-soft) | `#f7f5f0` | ~11:1 | ✅ | ✅ | Any size |
| `#7a7870` (ink-muted) | `#f7f5f0` | ~3.8:1 | ❌ <16px | ✅ large | **16px+ only** |
| `#b5b3aa` (ink-faint) | `#f7f5f0` | ~1.9:1 | ❌ | ❌ | **Decorative only** |
| `#ffffff` | `#4a5e1f` (accent) | ~5.5:1 | ✅ | ✅ | Safe |
| `#4a5e1f` | `#e8efd4` (accent-light) | ~4.2:1 | ✅ | ✅ | Normal+ |
| `#c8960c` (gold) | `#f7f5f0` | ~3.5:1 | ❌ small | ✅ large | **Large text only** |

**Flag in review:**
- `#7a7870` used on text smaller than 16px → suggest `#3d3d3a` instead
- `#b5b3aa` used on any readable text → remove, use muted or soft
- `#c8960c` on small text → use for decorative/large only

---

## Heading Hierarchy

Exactly one `<h1>` per page — the hero name. Verify:

```
<h1> — Ethan Segovia (hero)
  <h2> — About (section)
  <h2> — Selected Work (section)
    <h3> — Aquarius Ferry Booking System (project card)
    <h3> — Scout (project card)
    <h3> — Personal Finance Tracker (project card)
  <h2> — Skills (section)
  <h2> — Contact (section)
```

No skipping levels (no `<h1>` → `<h3>`).

---

## Images

- Editorial photo: `alt="Ethan Segovia"` or a brief contextual description (e.g. `alt="Ethan Segovia at his desk"`)
- Never `alt=""` on informative images; never `alt="photo"` or `alt="image"`
- Decorative images (background texture, etc.): `alt=""` is correct — confirms intentional

---

## Interactive Elements

**Project cards as links:**
```tsx
// Single <a> wrapping the card — no nested interactive elements
<a
  href={project.url}
  className="block ..."
  aria-label={`Project: ${project.title}`}
>
  {/* card content — no nested <a> or <button> */}
</a>
```

**Stack chips:**
- Decorative `<span>` if not interactive — no role needed
- `<button aria-pressed="true/false">` if filterable

**Icon-only buttons** (if any mobile nav toggle):
```tsx
<button aria-label="Open navigation menu" aria-expanded={isOpen}>
  <MenuIcon aria-hidden="true" />
</button>
```

---

## Touch Targets

All interactive elements on mobile must be at least 44×44px. Common pitfall:
- DM Mono link text at `text-[11px]` — ensure padding brings the hit area to 44px minimum
- Contact links: add `py-3` at minimum on mobile

---

## Focus Styles

Never `outline-none` without a visible replacement:

```tsx
// Wrong
className="outline-none"

// Correct — use focus-visible to avoid showing ring on mouse click
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a5e1f] focus-visible:ring-offset-2"
```

---

## Motion / Animation

Any scroll-triggered animation or transition must respect reduced motion:

```tsx
// In Tailwind CSS 4
className="transition-opacity duration-300 motion-reduce:transition-none"

// For keyframe animations
className="animate-fadeIn motion-reduce:animate-none"
```

---

## Semantic HTML Checklist

- [ ] Skills lists use `<ul>/<li>` — not `<div>` with text children
- [ ] Contact links wrapped in `<address>` (marks content as contact info)
- [ ] Main page sections use `<section>` with `id` attributes
- [ ] Navigation in `<nav aria-label="Main navigation">`
- [ ] No `<div>` used as a button (must be `<button>` or `<a>`)
- [ ] `<main>` wraps the primary content with `id="main-content"` for skip link target

---

## Final Output

Report findings as:

```
[CONTRAST] #7a7870 used at 12px in ProjectCard tag label — below 16px minimum
[FOCUS] CTA link has outline-none with no visible replacement
[SEMANTIC] Skills list uses <div> instead of <ul>/<li>
[HEADING] Two <h1> elements found — hero name and site title in <head> <title> (fine), but check JSX
```

End with: `PASS` (no issues) or `FAIL` with count of issues by severity.
