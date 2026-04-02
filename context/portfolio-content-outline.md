# Portfolio Content Outline
**Ethan Segovia** — ethansegovia.dev

---

## 1. Hero

**Headline (pick one):**
- Systems built right.
- I build software that ships.
- Engineering at the edge of product, ERP, and code.

**Subheadline:**
Tech Lead & full-stack engineer based in Cebu, Philippines. I work at the intersection of software engineering, product thinking, and ERP consulting — writing code in the morning and running client workshops in the afternoon.

**CTA:** View my work → *(scrolls to Projects)*

---

## 2. About

### Paragraph 1 — The arc
I graduated Cum Laude in Computer Science from UP Cebu and spent the first years of my career at Softype Philippines, a NetSuite Alliance Partner, doing what most people would call functional consulting — mapping business processes, configuring ERP systems, and translating what clients actually needed from what they said they wanted. That work built a foundation I couldn't have gotten any other way: I learned how companies run before I learned how to build software for them.

### Paragraph 2 — The pivot
That changed when Softype decided to build its first in-house development team. I led it. We built Aquarius — a full-stack ferry booking system for Roble Shipping Lines — from scratch using Next.js, TypeScript, tRPC, and Prisma, integrated with NetSuite via SuiteQL and SFTP batch workflows. I was the Tech Lead, the architect, the client liaison, and sometimes the one fixing a Prisma migration at 11pm. It taught me what product development actually costs and what it's worth.

### Paragraph 3 — Where I'm going
I'm moving toward product-focused engineering roles — specifically in fintech and ERP-adjacent software — where the technical depth I've built maps directly onto real business problems. I actively invest in Philippine REITs, UITFs, and equities, which means the products I'd want to build are ones I'd use myself. I'm based in Cebu and building here intentionally.

---

## 3. Selected Projects

### Project 1 — Aquarius Ferry Booking System
**Client:** Roble Shipping Lines / Lite Shipping (Sea Ninja)
**Role:** Tech Lead & Principal Architect
**Timeline:** 2023–2024

**The problem:**
Roble Shipping needed a modern booking platform to replace a manual, fragmented process — one that could handle passenger bookings, freight, loyalty programs, and ticket lifecycle management (revalidation, refunds, upgrades, voids), all while syncing with their NetSuite ERP backend.

**What I built:**
End-to-end ferry booking system covering passenger and freight operations. Designed the data model, led the development team, built the NetSuite integration layer (SFTP/CSV batch uploads + SuiteQL), implemented booking confirmation emails via React Email, and coordinated UAT with the client.

**Outcome:**
System went through UAT with Roble Shipping. Handled the full ticket lifecycle and ERP sync. First in-house product shipped by Softype's development team.

**Stack:** Next.js · TypeScript · tRPC · Prisma · PostgreSQL (NeonDB) · NetSuite SuiteQL · React Email · Vercel

---

### Project 2 — Scout: AI-Powered NetSuite Health Audit
**Client:** Internal (Softype / Perago)
**Role:** Architect & Lead Developer
**Timeline:** 2024

**The problem:**
NetSuite pre-sales and consulting engagements required manual instance analysis — time-consuming, inconsistent, and dependent on consultant experience. We needed a scalable way to audit client instances and surface optimization opportunities.

**What I built:**
Scout is an AI-powered analysis tool that connects to a NetSuite instance via MCP and SuiteQL, runs a structured health audit across modules, and produces a findings report with prioritized recommendations. Built the methodology, wrote the Confluence documentation, and designed the red-teaming and evaluation framework.

**Outcome:**
Used internally for pre-sales and BAU client analysis. Reduced time-to-insight significantly on instance reviews. Architecture designed for expansion into a multi-user web app.

**Stack:** Anthropic API · SuiteQL · NetSuite MCP · Claude Code · Confluence

---

### Project 3 — Personal Finance Tracker
**Client:** Personal project
**Role:** Solo developer
**Timeline:** 2024

**The problem:**
I wanted a private, self-hosted tool for tracking personal finances — one I actually controlled — and an excuse to get real AWS production experience beyond local Docker setups.

**What I built:**
Full-stack finance tracker with Discord OAuth (Auth.js/NextAuth), deployed on AWS EC2 with Docker, HTTPS via Let's Encrypt/Nginx, CI/CD via GitHub Actions, and PostgreSQL on AWS RDS. Used Terraform for infrastructure planning.

**Outcome:**
Running in production. Gave me hands-on experience with EC2, RDS, IAM, Docker in prod, and the full deployment pipeline — none of which you get from a tutorial.

**Stack:** Next.js · TypeScript · Auth.js · PostgreSQL · AWS EC2 · AWS RDS · Docker · Nginx · GitHub Actions

---

## 4. Skills

### Frontend
Next.js · React · TypeScript · Tailwind CSS · tRPC · React Email

### Backend
Node.js · Prisma · PostgreSQL · REST · Elixir/Phoenix (learning)

### ERP & Integration
NetSuite (SuiteScript · SuiteQL · SuiteTalk · RESTlets · TBA/OAuth) · Celigo (iPaaS) · SFTP/CSV batch workflows

### Infrastructure
AWS (EC2 · RDS · IAM · Lambda) · Docker · Nginx · GitHub Actions · Vercel · NeonDB

### AI & Tooling
Anthropic API · Claude Code · MCP integrations · Prompt engineering · Evaluation frameworks

---

## 5. Writing *(optional — add when ready)*

Suggested first pieces:
- **"Why I stopped writing NetSuite SuiteScripts and started writing SuiteQL"** — practical, searchable, signals ERP depth
- **"What fit analysis actually looks like in an ERP pre-sales conversation"** — unique perspective, useful for product/consulting hiring managers
- **"Building a T3 stack app for a shipping company: what the tutorial doesn't cover"** — technical, honest, specific

---

## 6. Contact

**Email:** [your email]
**LinkedIn:** linkedin.com/in/ethansegovia
**GitHub:** github.com/[your handle]

*Open to product engineering roles in fintech and ERP-adjacent software. Based in Cebu — open to remote.*

---

## Notes & Decisions

- [ ] Confirm domain: `ethansegovia.dev` vs `.com`
- [ ] Decide primary visitor: fintech product company vs consulting/tech lead role — affects emphasis in About and Projects ordering
- [ ] Aquarius NDA check: confirm what client details can be published
- [ ] Add a 4th project if a fintech-adjacent one exists or gets built
- [ ] Writing section: start with one piece, publish before the site is "done"
- [ ] Photo: editorial context shot preferred over headshot — see branding book §6
