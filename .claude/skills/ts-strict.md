---
name: ts-strict
description: Enforce TypeScript conventions for this project's strict tsconfig — noUncheckedIndexedAccess, verbatimModuleSyntax, isolatedModules, and Next.js 15 async params
---

This project has strict TypeScript flags active. Apply all rules below when writing or reviewing any `.ts` / `.tsx` file.

## Active tsconfig Flags

### `noUncheckedIndexedAccess: true`
Array index access returns `T | undefined`. Always narrow before use.

```ts
// Wrong — TypeScript error
const first = items[0].name;

// Correct
const first = items[0];
if (first) {
  console.log(first.name);
}

// Or with nullish coalescing
const name = items[0]?.name ?? "Unknown";
```

### `verbatimModuleSyntax: true`
Type-only imports MUST use the inline `{ type X }` form.

```ts
// Wrong — will error at build
import type { Foo } from "./foo";
import { Foo } from "./foo"; // when Foo is only a type

// Correct
import { type Foo } from "./foo";
import { type FC, useState } from "react"; // mix of type and value imports
```

### `isolatedModules: true`
- No `const enum` — use plain `enum` or `as const` objects
- No cross-file namespace merging

### `strict: true` (implies)
- No implicit `any`
- Strict null checks
- Strict function types

## Import Rules (enforced by eslint `consistent-type-imports`)

Always use inline `{ type X }` — never a standalone `import type` statement:

```ts
// Wrong
import type { User } from "~/types";

// Correct
import { type User } from "~/types";
```

## No `any`

Use `unknown` with type narrowing, or discriminated unions:

```ts
// Wrong
function parse(input: any) { ... }

// Correct
function parse(input: unknown) {
  if (typeof input === "string") { ... }
}
```

## Static Data Patterns

```ts
// as const for lookup objects and arrays
const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
] as const;

// satisfies for config objects — type-checks without widening
const projectData = {
  title: "Aquarius",
  stack: ["Next.js", "TypeScript"],
} satisfies ProjectData;
```

## Next.js 15 — Async Params

In Next.js 15, `params` and `searchParams` are Promises. Always await them:

```ts
// Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
```

## Component Props Conventions

```ts
// interface (not type alias) for component props
interface HeroProps {
  headline: string;
  subheadline: string;
}

// readonly on array props
interface SkillsProps {
  categories: readonly SkillCategory[];
}

// Never React.FC — omit or use JSX.Element
export function Hero({ headline }: HeroProps) { ... }
// or
export function Hero({ headline }: HeroProps): JSX.Element { ... }
```

## Unused Variables

Prefix intentionally unused function args with `_`:

```ts
array.map((_item, index) => index);
```

## Zod for Runtime Validation

Zod (`^3.24.2`) is installed. Use it at system boundaries:

```ts
import { z } from "zod";

const ContactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

type ContactInput = z.infer<typeof ContactSchema>;
```
