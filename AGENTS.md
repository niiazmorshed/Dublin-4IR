<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Next.js Project Rules

### 1. Core Project Philosophy

This Next.js project must behave like a real production SaaS product, not a demo or template.

**Hard Rules:**

- No AI-generated visual aesthetic patterns
- No template-based landing pages
- No unnecessary UI decoration
- Every UI element must serve a product purpose
- Prioritize clarity, usability, and scalability

### 2. Folder Structure (Strict)

Use this structure for all Next.js (App Router) projects:

```
/app
  /(auth)
    /login
    /register
  /(dashboard)
    /layout.tsx
    /page.tsx
  /(marketing)
    /page.tsx
    /pricing
    /about
  /api
  /layout.tsx
  /page.tsx

/components
  /ui
  /shared
  /layout
  /forms
  /charts
  /navigation

/features
  /auth
  /user
  /billing
  /analytics

/lib
  /utils
  /hooks
  /constants
  /api

/services
  /http
  /auth
  /db

/styles
  globals.css
  tokens.css

/types
  index.ts

/public
  /images
  /icons
```

**Folder Rules:**

| Path | Purpose |
|------|---------|
| `/app` | ONLY routing logic. No heavy UI logic inside pages. Pages should call feature components. |
| `/components` | Must be fully reusable. No business logic inside `/ui`. `/ui` = pure design system components only. |
| `/features` | Business logic lives here. Each feature is self-contained (auth, billing, etc.). Feature components can use `/components/ui`. |
| `/lib` | Shared helpers only. No UI code allowed. |
| `/services` | API calls and external integrations only. No UI or state logic. |

### 3. UI Architecture Rules (CRITICAL)

**Component Hierarchy:**

```
Page (App Router)
  → Feature Component
    → Shared Component
      → UI Primitive
```

**Example:**

```
/app/dashboard/page.tsx
  → <DashboardView />
    → <AnalyticsPanel />
      → <Card /> (ui)
        → <Button /> (ui)
```

**UI Design Enforcement**

Never generate:

- AI-style glowing dashboards
- Random gradient blobs
- Fake analytics with meaningless charts
- Over-animated landing pages

Always generate:

- Real SaaS layouts (Stripe, Linear, Vercel style)
- Functional dashboards
- Data-driven UI
- Clean spacing systems

### 4. State & Data Rules

- Prefer server components (App Router default)
- Use client components ONLY when needed
- Keep state local unless global state is required
- Avoid overusing Redux or heavy state libs

**Recommended:** React hooks, Context (minimal use), Server Actions / API routes

### 5. API & Service Rules

- All API logic must live in `/services`
- No `fetch` calls directly inside UI components
- Use a central HTTP wrapper: `/services/http/client.ts`
- Centralize error handling
- Standardize response formats
- Avoid duplicate API logic

### 6. Performance Rules

- Use Next.js Image optimization always
- Avoid unnecessary re-renders
- Prefer Server Components
- Lazy load heavy components
- Keep bundle minimal

### 7. Styling Rules (Strict Anti-AI UI Policy)

**Allowed:** Tailwind CSS (preferred), CSS variables for design tokens, minimal shadows, subtle borders

**Forbidden:** Neon gradients everywhere, glassmorphism obsession, over-animated UI, decorative-only elements

### 8. Component Rules

UI Components (`/components/ui`) must be:

- Stateless
- Reusable
- Design-system aligned

Examples: Button, Input, Modal, Card

### 9. Code Quality Rules

- No duplicate components
- No inline styling chaos
- No deeply nested JSX (>4 levels discouraged)
- Always prefer readability over clever code
- Type everything properly (no `any`)
<!-- END:nextjs-agent-rules -->
