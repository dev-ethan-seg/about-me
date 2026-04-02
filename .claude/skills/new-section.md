---
name: new-section
description: Generate a full portfolio page section by cross-referencing the branding book and content outline — Hero, About, Projects, Skills, or Contact
---

Before writing any code, read both source files:

1. `context/portfolio-content-outline.md` — canonical copy (headlines, about paragraphs, project details, skill categories, contact info)
2. `context/portfolio-branding-book.html` — visual reference (typography scale, spacing, component patterns)

Do not invent copy. Use the exact text from the content outline.

---

## Section Anatomy (applies to all sections except Hero)

```tsx
<section id="[slug]" className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 border-b border-[rgba(26,26,26,0.12)]">
  <div className="max-w-[900px] mx-auto">
    {/* Eyebrow */}
    <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
      01 — About {/* number varies per section */}
    </p>

    {/* Section title */}
    <h2 className="font-['DM_Serif_Display',serif] text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-8">
      Section Title
    </h2>

    {/* Content */}
  </div>
</section>
```

Section numbers:
- Hero — no eyebrow needed
- About — `01 — About`
- Projects — `02 — Selected Work`
- Skills — `03 — Skills`
- Contact — `04 — Contact`

---

## Section-Specific Rules

### Hero

```tsx
<section id="hero" className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 min-h-[90vh] flex flex-col justify-center">
  <div className="max-w-[900px] mx-auto">
    {/* Name — italic 'e' in accent green per branding book */}
    <h1 className="font-['DM_Serif_Display',serif] text-[clamp(52px,8vw,96px)] leading-[1.05] tracking-[-0.03em] text-[#1a1a1a]">
      <em className="italic not-italic text-[#4a5e1f]">E</em>than Segovia
    </h1>

    {/* Role label */}
    <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#7a7870] mt-4 mb-6">
      Tech Lead & Full-Stack Engineer — Cebu, Philippines
    </p>

    {/* Headline — pick from content outline */}
    <p className="font-['Instrument_Sans',sans-serif] text-[clamp(18px,2.5vw,24px)] text-[#3d3d3a] leading-[1.5] max-w-[600px] mb-10">
      {/* subheadline from content outline */}
    </p>

    {/* CTA */}
    <a
      href="#projects"
      className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] border-b border-[#4a5e1f] pb-1 hover:text-[#6b8430] hover:border-[#6b8430] transition-colors"
    >
      View my work ↓
    </a>
  </div>
</section>
```

### Projects

Each of the 3 projects from the content outline gets an `<article>`. Structure:

```tsx
<article className="border border-[rgba(26,26,26,0.12)] bg-white p-8 max-[680px]:p-5">
  {/* Client / role */}
  <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-3">
    {client} — {role}
  </p>

  {/* Project title */}
  <h3 className="font-['DM_Serif_Display',serif] text-[clamp(20px,2.5vw,28px)] text-[#1a1a1a] mb-1">
    {title}
  </h3>

  {/* Year */}
  <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#7a7870] mb-4">
    {year}
  </p>

  {/* Description */}
  <p className="font-['Instrument_Sans',sans-serif] text-[16px] text-[#3d3d3a] leading-[1.75] mb-6">
    {description}
  </p>

  {/* Stack chips */}
  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
    {stack.map((tech) => (
      <li key={tech} className="bg-[#e8efd4] text-[#4a5e1f] font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase px-2 py-1">
        {tech}
      </li>
    ))}
  </ul>
</article>
```

### Skills

Grouped by the 5 categories from the content outline. `<ul>/<li>` structure, not icon-heavy.

```tsx
<div className="grid grid-cols-2 gap-12 max-[680px]:grid-cols-1">
  {categories.map((category) => (
    <div key={category.name}>
      <h3 className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
        {category.name}
      </h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="font-['Instrument_Sans',sans-serif] text-[16px] text-[#3d3d3a]">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
```

### Contact

```tsx
<address className="not-italic">
  <p className="font-['Instrument_Sans',sans-serif] text-[18px] text-[#3d3d3a] leading-[1.75] max-w-[520px] mb-8">
    Open to product engineering roles in fintech and ERP-adjacent software.
    Based in Cebu, Philippines — remote-open.
  </p>
  <ul className="space-y-3">
    <li>
      <a href="mailto:[email]" className="font-['DM_Mono',monospace] text-[13px] tracking-[0.08em] text-[#4a5e1f] hover:text-[#6b8430] transition-colors">
        [email]
      </a>
    </li>
    {/* LinkedIn, GitHub — same pattern */}
  </ul>
</address>
```

---

## After Generating

Run the `/portfolio-review` checklist mentally on the output:
1. Are only the 11 design tokens used?
2. Are font pairings correct?
3. Is the breakpoint `max-[680px]:`?
4. Does the copy match the content outline exactly?
5. Is heading hierarchy correct?
6. Are all TypeScript types correct (if data is typed)?
