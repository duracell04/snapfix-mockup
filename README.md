# Snap'n'Fix — Frontend Mockup

> Snap, fix, done. Fixed price from a photo. Book a vetted pro in minutes - most small fixes done in one visit.

This repo contains a frontend-only demo of Snap'n'Fix, a photo-first micro-repairs marketplace for big cities.

- Users snap a few photos of a small issue (v1: door hardware).
- The system builds an AI-curated ticket from photos + a few simple questions.
- Users get 3-5 fixed-price offers from independent Pros and can either:
  - tap Book fastest, or
  - pick a specific Pro based on rating, price, first-time-fix rate, portfolio, etc.

Snap'n'Fix itself is a marketplace facilitator (matching + payments), not an employer or service provider. Work is carried out by independent professionals.

---

## 1. Vision & Product Scope

### Vision

Turn an anxious, multi-step chore ("who do I call, will they show up, what will it cost?") into a single, confident action: take a photo.

North-star experience:

1. User snaps 2-3 guided photos.
2. Sees a fixed all-in price and ETA from multiple Pros.
3. Taps Book fastest or Pick your pro from a curated set.
4. Pro arrives prepared; most jobs finish in one visit.

### Scope (MVP product)

This mockup and the future v1 product focus on:

- Category: Door hardware micro-repairs (misaligned strike plates, latch/strike issues, loose/failed handles, hinge tighten/replace, re-hang interior doors).
- Segments:
  - Time-poor professionals (B2C).
  - Capable-but-overwhelmed homeowners.
  - Property managers (B2B).

Explicitly out-of-scope for v1:

- Regulated categories (licensed electrical / plumbing).
- Hourly pricing or open auctions.
- Platform-backed workmanship warranty (Pros provide their own warranties).

### Marketplace clarity

- Repairs are performed by independent Pros.
- Snap'n'Fix:
  - facilitates matching, booking, and payments,
  - acts as agent-of-payee for payouts,
  - does not employ Pros or provide tools/uniforms.

Microcopy reflects this:

> Repairs by independent professionals. Snap'n'Fix facilitates bookings and payments.

---

## 2. What this repo is (and isn't)

This repo is:

- A Next.js (App Router, TypeScript) single-page marketing + product demo, styled with Tailwind CSS and shadcn/ui.
- A mocked flow for:
  - landing page
  - photo intake
  - "AI-curated" ticket summary
  - multi-offer list
  - checkout summary
  - (optionally) Pro profile and B2B teaser.

This repo is not:

- A production backend.
- A real payment integration.
- A real AI / ML system.

All "AI" behavior (issue detection, rationale, ranking) is simulated on the frontend using mock data and deterministic rules.

---

## 3. Tech Stack & Project Layout

### Stack

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS + shadcn/ui
- Package manager: pnpm
- Tooling: ESLint, PostCSS, TypeScript config already wired up.

### Scripts

```bash
# Install dependencies
pnpm install

# Run local dev server
pnpm dev

# Build production bundle
pnpm build

# Start production server
pnpm start
```

(Commands as per the default akalabs.io boilerplate this project was generated from.)

---

## 4. Product Model — "Uber of Home Repair, but Better"

Snap'n'Fix is intentionally framed as "Uber of home repair", but with three key upgrades:

**Multi-offer choice**  
Users see 3-5 curated fixed-price offers, instead of being locked into the next driver.

**Advanced reputation & portfolios**  
Selection is based on rating and review count, first-time-fix rate, dispute-free streaks, before/after photo galleries, and Pro specialties (e.g. "Door specialist", "Historic doors").

**AI-curated tickets**  
Photo guidance + a handful of structured questions yield a structured job brief that Pros see before responding:

- Door type and material
- Hardware type
- Symptom and severity
- Access notes and time windows

This is reflected in both the mocked UX and the future backend design.

---

## 5. How the current mockup works (flows & screens)

### 5.1 Homepage (route: /)

Conversion-first landing page with:

- Hero: "Snap, fix, done." plus subline and primary/secondary CTAs (Get price from a photo / Pick your pro).
- Proof strip (ratings, independent Pros, secure escrow, Pro-set warranties).
- Three-step "How it works" strip (Snap -> Pick or go -> Fix).
- Door-hardware wedge explaining the v1 vertical.
- City module showing "Now serving" with waitlist email capture.

Hero CTAs navigate into the photo intake flow.

### 5.2 Photo intake (simulated AI guidance)

Goal: let a user feel how "take a photo" becomes a structured job brief.

- Dropzone / file input for uploading 2-3 images:
  - Front view of the door
  - Close-up of the latch/handle
  - A shot with scale (coin/card)
- Stepper prompts like:
  - "Front view - done?"
  - "Close-up of the latch area - done?"
  - "Add scale: place a coin or card in the shot - done?"
- Optional/simulated low-quality hint: "We noticed blur/low light; want to retake?"
- Structured questions:
  - Door type: interior / exterior
  - Handle type: lever / knob
  - Symptom: won't latch / loose handle / scraping / off-alignment
  - Access notes: free text

All captured in local state and used to build the ticket summary.

### 5.3 Ticket summary ("AI-curated ticket")

After intake, the mockup shows a summary card with category, suggested SKU ("Fix misaligned strike plate"), AI rationale line, location (mocked city/ZIP), priority (Standard vs Priority 60-120 mins), and access notes.

In a real app, this would reflect:

- Model predictions (likely issue)
- Mapped SKU (for pricing)
- Risk flags (e.g. multi-family, non-standard hardware)

In the mockup, everything is deterministic from mock JSON.

### 5.4 Offers list (curated multi-offer view)

The heart of "Uber but better":

- 3-5 offer cards with Pro name, rating, job count, all-in fixed price, ETA window, badges (Door specialist, Punctual, Great value), first-time-fix %, dispute rate, warranty length, mini portfolio, and "Why this pro?" rationale (e.g. "Closer - 93% first-time-fix - Door specialist").
- Controls: sort tabs (Best, Lowest price, Top rated), primary "Book fastest" CTA, per-card Select button to checkout.
- All data is static/mock; tweak as needed.

### 5.5 Checkout (frontend only)

- Selected Pro details (name, rating, warranty).
- Job line items (e.g. "Fix misaligned strike plate").
- Fee line example: "Speed & Trust Fee (10%) - matching, secure escrow, mediation."
- Total price calculation.
- Legal microcopy:
  - "Work is performed by [Pro Name], an independent professional. Warranty: [X days], provided by [Pro Name]."
- Confirm & pay button advances to a "Booked!" state (no real payment).

### 5.6 Post-job & Pro profile

Optional additions:

- Post-job review prompt (star rating, short review, add to portfolio toggle).
- Pro profile modal/page with stats (rating, jobs done, first-time-fix %, dispute-free streak), warranty standard, license/insurance flags, review list, before/after gallery.

All static; no persistence.

---

## 6. How the real app will work (high-level design)

The mockup is close to a viable v1.

### 6.1 Frontend

- Web app (this repo) for consumers, Pros, and property managers.
- Future: native/hybrid mobile clients on the same API.

### 6.2 Backend (future, not implemented here)

- Auth & identity (OAuth + email magic links; roles: Customer / Pro / PM / Admin).
- Ticketing & intake (structured schema for door hardware tickets; photo storage; AI service for quality, classification, SKU mapping, risk flags).
- Offers & matching (find candidate Pros by radius/availability; ranking by ETA, first-time-fix, dispute rate, portfolio strength, price vs band; support Book fastest).
- Payments & escrow (PSP with agent-of-payee, customer fees, Pro platform fee, escrow until closeout, refunds/partial splits).
- Reviews & portfolios (one review per completed job; portfolio entries from job photos + metadata).
- B2B / PM features (batch tickets, dashboards, centralized billing).
- Compliance & marketplace controls (per-city licensing toggles; clear IC status; FTC-compliant review handling).

The current repo is a thin frontend layer you can later hook to these services via REST/gRPC/GraphQL without changing the core UX.

---

## 7. Roadmap (mockup -> MVP)

Short term (this repo):

- Refine layout and copy.
- Flesh out missing screens (/pro, /business, /support, /legal/marketplace, city landers).
- Add simple analytics stubs (console logs for key events).
- Add more realistic mock data for multiple cities and Pros.

Next steps (backend-ready):

- Define canonical ticket and offer JSON schemas.
- Swap mock data for API calls behind a thin data layer.
- Integrate a PSP sandbox.
- Log real analytics events (feature use, drop-offs, etc.).

---

## 8. License / Contributing

License: TODO (e.g. MIT or "All rights reserved" if private).

This is primarily a product/design demo; contributions are welcome via PRs or issues if you share it. Questions or product model proposals: open an issue or start a discussion.
