---
name: portfolio-component
description: Scaffold a new portfolio component with correct branding tokens, TypeScript conventions, responsive breakpoints, and React Server Component defaults
---

You are scaffolding a component for Ethan Segovia's Next.js 15 portfolio. Apply all rules below without being asked.

## File Location & Naming

- Page sections → `~/src/components/sections/PascalCase.tsx`
- Reusable primitives → `~/src/components/ui/PascalCase.tsx`
- Always use the `~/` path alias. Never use relative `../../` imports.

## TypeScript Conventions

```ts
// Correct — inline type keyword (verbatimModuleSyntax is ON)
import { type FC } from "react";

interface ProjectCardProps {
  title: string;
  stack: readonly string[];   // readonly on array props
  description: string;
}
```

- Use `interface` for component props, not `type` alias
- Inline `{ type X }` imports — never a separate `import type` statement
- Never use `React.FC` — omit return type or use `JSX.Element` explicitly
- Mark array props `readonly string[]`
- No `any` — use `unknown` with narrowing

## Design Tokens (Tailwind CSS 4 — use arbitrary values)

| Role | Class |
|------|-------|
| Page background | `bg-[#f7f5f0]` |
| Card background | `bg-white` |
| Primary text | `text-[#1a1a1a]` |
| Secondary text | `text-[#3d3d3a]` |
| Muted text | `text-[#7a7870]` (16px+ only — see a11y-check) |
| Faint text | `text-[#b5b3aa]` (decorative only) |
| Accent (sage green) | `text-[#4a5e1f]` / `bg-[#e8efd4]` / `border-[#4a5e1f]` |
| Accent mid | `text-[#6b8430]` |
| Gold | `text-[#c8960c]` / `bg-[#f5e8c0]` |
| Teal | `text-[#1a6b5a]` / `bg-[#d0ebe5]` |
| Border/rule | `border-[rgba(26,26,26,0.12)]` |
| Rule strong | `border-[rgba(26,26,26,0.25)]` |

Never use Tailwind's default grays (`gray-*`, `slate-*`, `zinc-*`), blues, or indigos. Use only these 11 tokens.

## Typography

| Use | Font class |
|-----|-----------|
| Page name / h1 | `font-['DM_Serif_Display',serif]` at `text-[clamp(52px,8vw,96px)]` |
| Section title / h2 | `font-['DM_Serif_Display',serif]` at `text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em]` |
| Card title / h3 | `font-['DM_Serif_Display',serif]` |
| Body / UI | `font-['Instrument_Sans',sans-serif]` |
| Labels / metadata / tags | `font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase` |
| Eyebrow / section number | `font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f]` |

Italic `<em>` inside DM Serif Display renders as the accent green italic — use for name accent in hero.

## Layout & Spacing

- Section padding: `py-20 px-15 max-[680px]:py-12 max-[680px]:px-7`
- Max content width: `max-w-[900px] mx-auto`
- Mobile breakpoint: `max-[680px]:` — **not** `sm:` (which is 640px, not 680px)
- Section border separator: `border-b border-[rgba(26,26,26,0.12)]`

## React Server Components

Default to RSC. Only add `"use client"` when the component requires:
- `useState` / `useReducer`
- `useEffect` / browser APIs
- Event handlers (`onClick`, `onChange`, etc.)

Always add a comment explaining why client rendering is needed:
```tsx
"use client"; // needs useState for mobile nav toggle
```

## Example Scaffold

```tsx
interface ProjectCardProps {
  title: string;
  client: string;
  role: string;
  description: string;
  stack: readonly string[];
}

export function ProjectCard({
  title,
  client,
  role,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <article className="border border-[rgba(26,26,26,0.12)] bg-white p-8 max-[680px]:p-5">
      <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-3">
        {client} — {role}
      </p>
      <h3 className="font-['DM_Serif_Display',serif] text-[24px] text-[#1a1a1a] mb-4">
        {title}
      </h3>
      <p className="font-['Instrument_Sans',sans-serif] text-[16px] text-[#3d3d3a] leading-[1.75] mb-6">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="bg-[#e8efd4] text-[#4a5e1f] font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase px-2 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
```
