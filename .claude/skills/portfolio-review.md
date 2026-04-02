---
name: portfolio-review
description: Four-axis pre-commit review for portfolio components — branding correctness, TypeScript strictness, accessibility, and code hygiene
---

Run this structured review on any portfolio component or page file before committing. Check all four axes and report findings per category, then issue a final verdict.

---

## Axis 1: Branding

- [ ] **Tokens only** — no stray Tailwind grays (`gray-*`, `slate-*`, `zinc-*`), blues, or indigos. Only the 11 design tokens are permitted:
  - Backgrounds: `#f7f5f0` (paper), `#ffffff` (card), `#ede9e0` (paper-warm)
  - Text: `#1a1a1a`, `#3d3d3a`, `#7a7870`, `#b5b3aa`
  - Accent: `#4a5e1f`, `#e8efd4`, `#6b8430`
  - Gold: `#c8960c`, `#f5e8c0`
  - Teal: `#1a6b5a`, `#d0ebe5`
  - Border: `rgba(26,26,26,0.12)`, `rgba(26,26,26,0.25)`

- [ ] **Font pairing correct**
  - `h1` / `h2` use `font-['DM_Serif_Display',serif]` exclusively
  - Labels, metadata, tags, eyebrows use `font-['DM_Mono',monospace]` with `tracking-[0.12em] uppercase`
  - Body, paragraphs, UI text use `font-['Instrument_Sans',sans-serif]`
  - No Geist font references (the default T3 setup used Geist — verify it's been replaced)

- [ ] **Breakpoint is `max-[680px]:`** — not `sm:` (640px) or `md:` (768px)

- [ ] **Section padding** matches `py-20 px-15 max-[680px]:py-12 max-[680px]:px-7`

- [ ] **Section structure** — sections have: DM Mono eyebrow label, DM Serif Display h2, `border-b border-[rgba(26,26,26,0.12)]` separator

---

## Axis 2: TypeScript

- [ ] **No `any`** — flag every occurrence; replace with `unknown` + narrowing or discriminated union

- [ ] **Index access narrowed** — with `noUncheckedIndexedAccess` on, `arr[0]` is `T | undefined`; every array/object index access must be null-checked

- [ ] **Import style** — type-only imports use inline `{ type X }`, never a standalone `import type` statement

- [ ] **No `React.FC`** — remove it; use explicit `JSX.Element` return type or none

- [ ] **Array props are `readonly`** — `readonly string[]` not `string[]` on component prop interfaces

- [ ] **No `const enum`** — use plain `enum` or `as const` (isolatedModules is on)

- [ ] **Next.js 15 params** — if this is a page component, `params` must be `Promise<{...}>` and awaited

---

## Axis 3: Accessibility

- [ ] **One `<h1>` per page** — only the hero section's name. All section titles are `<h2>`. Card titles are `<h3>`.

- [ ] **Meaningful `alt` text** — no empty `alt=""` on informative images, no `alt="image"` or `alt="photo"`

- [ ] **Interactive elements have names** — icon-only buttons and links need `aria-label`

- [ ] **`--ink-muted` (#7a7870) only at 16px+** — contrast ratio ~3.8:1 fails WCAG AA for small text. Use `#3d3d3a` for body text under 16px.

- [ ] **`--ink-faint` (#b5b3aa) is decorative only** — never used for readable text (contrast ~1.9:1)

- [ ] **44px minimum touch targets** on mobile for all interactive elements

- [ ] **Visible focus styles** — no bare `outline-none` without a visible replacement (use `focus-visible:ring-2 focus-visible:ring-[#4a5e1f]`)

- [ ] **Semantic HTML** — skills are `<ul>/<li>`, contact links in `<address>`, nav links in `<nav aria-label="...">`

- [ ] **No nested interactive elements** — if a card is a link, don't nest `<a>` or `<button>` inside it

---

## Axis 4: Code Hygiene

- [ ] **No unnecessary `"use client"`** — component should be RSC unless it provably needs state, effects, or event handlers. If `"use client"` is present, there should be a comment explaining why.

- [ ] **`~/` path alias used** — no relative `../../` imports

- [ ] **Tailwind class order** — classes should follow the `prettier-plugin-tailwindcss` sort order (layout → box model → typography → visual). Run `npm run format` if unsure.

- [ ] **No hardcoded portfolio copy** — project titles, About text, skill lists should come from `~/src/data/` or be passed as props, not embedded as string literals in JSX (prevents scattered edits)

- [ ] **No unused imports** — clean up anything not referenced

---

## Verdict

After checking all four axes:

- **APPROVE** — no issues found; safe to commit
- **REVISE MINOR** — small issues (1-3 items) that don't affect correctness or appearance significantly
- **REVISE MAJOR** — multiple issues or any issue that affects type safety, accessibility, or visual correctness

List all findings with axis label, e.g.:
```
[BRANDING] h2 uses text-gray-900 instead of text-[#1a1a1a]
[TS] items[0] accessed without null check (noUncheckedIndexedAccess)
[A11Y] ProjectCard <img> has empty alt=""
Verdict: REVISE MAJOR
```
