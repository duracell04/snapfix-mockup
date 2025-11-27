# Snap'n'Fix Architecture

> Snap, fix, done. Fixed price from a photo. Book a vetted pro in minutes - most small fixes done in one visit.

This document explains how the Snap'n'Fix frontend mockup is structured today, and how it is intended to evolve into a real marketplace app.

It is written for:

- Engineers wiring up the mock to a real backend.
- Designers who need to understand the flows and constraints.
- Product / ops thinking about where business rules live.

---

## 1. Scope of this document

This document covers:

- The current mockup in this repository (frontend-only).
- The target architecture for a v1 product:
  - key domain models (Ticket, Offer, Pro, Job, etc.),
  - data flows (B2C, Pro, B2B),
  - where "AI" fits,
  - integration points (PSP, KYC, etc.).

It does not define:

- Final provider choices (PSP, auth provider, storage).
- All legal/compliance details (jurisdiction-specific).
- All non-door categories (v1 is door hardware only).

---

## 2. High-Level System Overview

### 2.1 Product model

Snap'n'Fix is a photo-first micro-repairs marketplace:

1. Customer has a minor issue (v1: door hardware).
2. They snap 2-3 guided photos and answer simple questions.
3. The system builds an AI-curated ticket (likely issue, SKU, risk flags).
4. Nearby independent Pros send fixed-price offers.
5. Customer either:
   - taps Book fastest (platform picks the best overall offer), or
   - picks a specific Pro (based on rating, price, FTF%, reviews, portfolio).
6. Job is done; escrow is released; customer leaves a review; Pro portfolio grows.

Snap'n'Fix is a marketplace facilitator (matching + payments), not a contractor or employer. Work is performed by independent professionals.

### 2.2 Architecture phases

- Phase 0 (this repo):  
  Pure frontend mockup:
  - Next.js (App Router, TypeScript)  
  - Tailwind CSS + shadcn/ui  
  - Local mock data for tickets/offers/Pros  
  - No real backend or payments

- Phase 1 (MVP app):
  - Real API for tickets/offers/Pros/auth/payments.
  - Deployed web app + PSP sandbox.
  - Limited geography, door hardware only.

- Phase 2+ (full product):
  - Multi-category, multi-city.
  - B2B dashboards, SLAs, PM APIs.
  - Model-backed "AI" for issue classification and risk.

This document describes how the mock should be structured to make Phase 1 easy.

---

## 3. Frontend Architecture (this repo)

### 3.1 Stack

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS for layout + shadcn/ui for base components.
- Language: TypeScript.
- Package manager: pnpm.

### 3.2 Structure (intended)

Typical structure (using App Router):

```txt
src/
  app/
    layout.tsx           # Root layout, theming, font, header/footer
    page.tsx             # Homepage (/)
    how-it-works/page.tsx
    prices/page.tsx
    pro/page.tsx
    business/page.tsx
    cities/
      [city]/
        page.tsx
    legal/
      marketplace/page.tsx
      terms/page.tsx
      privacy/page.tsx
    support/page.tsx

  components/
    layout/
      header.tsx
      footer.tsx
      shell.tsx
    marketing/
      hero.tsx
      proof-strip.tsx
      value-props.tsx
      city-module.tsx
    flow/
      photo-intake/
        photo-stepper.tsx
        photo-dropzone.tsx
        intake-form.tsx
      ticket-summary.tsx
      offers/
        offers-list.tsx
        offer-card.tsx
        sort-tabs.tsx
      checkout/
        checkout-summary.tsx
        legal-lines.tsx
      pro/
        pro-profile-card.tsx
        pro-portfolio-gallery.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      tooltip.tsx
      modal.tsx
      input.tsx
      select.tsx
      textarea.tsx
      ...
  lib/
    mock-data/
      offers.ts
      ticket.ts
      pros.ts
    analytics.ts
    matching.ts          # future: local ranking logic
    pricing.ts           # future: fee calculations
    types.ts             # shared TS interfaces
```

If the repo differs, the intent is: app/ for routes, components/ for reusable UI, lib/ for logic and mocks. That layering is what matters for future wiring.

### 3.3 State management

Local component state (React useState/useReducer) for:

- photo intake
- form fields
- sort/filter selection
- selected Pro, checkout state

Context or simple store (optional) for:

- current Ticket
- selected Offer
- user's city

Since this is a mock, page/flow parent components can keep most state and pass props down. As the app grows, extract a useTicketFlow() hook or context.

### 3.4 Theming and design tokens

Brand tokens (Snap Blue, Ink, Slate, Warm Orange, etc.) are:

- Declared in Tailwind config as colors.snap, colors.ink, etc.
- Used via Tailwind classes (e.g. bg-snap-blue, text-ink).
- Dark mode via class strategy (e.g. dark:bg-snap-dark).

Spacing, radius, and typography guidelines:

- Card radius: ~16px
- Body text: 16px+
- Buttons: hit area at least 44x44px

---

## 4. Domain Model (future contracts)

Even though this repo is frontend-only, the TypeScript interfaces should match what the backend will expose. Place them in `src/lib/types.ts` for reuse across UI, mocks, and future API clients.

### 4.1 Core entities

```ts
// A user of the platform (Customer, Pro, PM, Admin)
export type UserRole = "customer" | "pro" | "pm" | "admin";

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  timezone?: string;
}

// City configuration (licensing, price bands, SLAs)
export interface CityConfig {
  id: string;              // e.g. "chicago"
  name: string;            // "Chicago"
  countryCode: string;     // "US"
  timezone: string;        // "America/Chicago"
  enabledCategories: string[]; // ["door-hardware"]
  requiresHandymanLicense: boolean;
}

// Ticket created from photos + Q&A
export type TicketStatus =
  | "draft"
  | "offers_open"
  | "offer_selected"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Ticket {
  id: string;                  // "TKT-78421"
  customerId: string;
  category: "door-hardware";
  cityId: string;
  zipcode?: string;

  // Raw inputs
  photoUrls: string[];
  doorType: "interior" | "exterior";
  handleType: "lever" | "knob" | "other";
  symptom:
    | "wont_latch"
    | "loose_handle"
    | "scraping_floor"
    | "off_alignment"
    | "other";
  accessNotes?: string;

  // AI-enriched fields
  suggestedSkuId: string;      // e.g. "sku-fix-strike-plate"
  aiRationale: string;         // human-readable explanation
  riskFlags: string[];         // e.g. ["multi-family", "non-standard-door"]

  // Matching
  status: TicketStatus;
  priority: "standard" | "priority";
  createdAt: string;
  updatedAt: string;
}

// SKU: standardized unit of work used for pricing and analytics
export interface Sku {
  id: string;                 // "sku-fix-strike-plate"
  category: "door-hardware";
  name: string;               // "Fix misaligned strike plate"
  description: string;
  priceBandsByCity: Record<string, { min: number; max: number }>;
  includes: string[];
  excludes: string[];
}

// Pro (independent professional)
export interface Pro {
  id: string;
  displayName: string;
  companyName?: string;
  cityId: string;
  bio?: string;

  rating: number;           // 0-5
  reviewCount: number;
  firstTimeFixRate: number; // 0-1
  disputeRate: number;      // 0-1
  jobsDone: number;

  specialties: string[];
  baseRadiusKm: number;
  acceptsPriority: boolean;

  insuranceVerified: boolean;
  licenseVerified: boolean;
  standardWarrantyDays: number;

  portfolioItems: PortfolioItem[];
}

export interface PortfolioItem {
  id: string;
  beforePhotoUrl: string;
  afterPhotoUrl: string;
  caption?: string;
  ticketId?: string;
  cityId?: string;
}

// Offer: a Pro's fixed-price proposal for a Ticket
export type OfferStatus = "pending" | "accepted" | "expired" | "withdrawn";

export interface Offer {
  id: string;
  ticketId: string;
  proId: string;

  skuId: string;
  price: number;           // all-in, before customer fee
  warrantyDays: number;
  etaWindow: string;       // e.g. "Today 2-4pm"

  // Matching metrics at the time of offer
  distanceKm: number;
  firstTimeFixRate: number;
  disputeRate: number;
  rankingScore: number;    // composite "Best overall" score

  status: OfferStatus;
  createdAt: string;
  expiresAt: string;

  // Human-readable explanation for UI
  whyThisPro: string;      // "Closer - 93% first-time-fix - Door specialist"
}

// Job: accepted Ticket + Offer
export type JobStatus =
  | "scheduled"
  | "on_the_way"
  | "in_progress"
  | "completed"
  | "disputed"
  | "refunded";

export interface Job {
  id: string;
  ticketId: string;
  offerId: string;
  proId: string;
  customerId: string;

  status: JobStatus;

  scheduledWindow: string;  // e.g. "Today 14:00-16:00"
  startedAt?: string;
  completedAt?: string;

  // Payment
  customerFee: number;      // "Speed & Trust Fee"
  platformFeePro: number;   // Pro-side fee
  platformRevenue: number;  // derived (customerFee + platformFeePro)
}

// Review (one per completed Job)
export interface Review {
  id: string;
  jobId: string;
  ticketId: string;
  proId: string;
  customerId: string;

  rating: number;        // 1-5
  comment?: string;

  createdAt: string;
  verified: boolean;     // true if tied to completed job
}
```

These interfaces can live in `src/lib/types.ts` and be reused across UI components, mock data, and future API clients.

---

## 5. Main Flows

### 5.1 Customer (B2C) flow

Sequence:

1) Homepage (/)  
   - User clicks Get price from a photo -> navigate to photo intake.

2) Photo intake  
   - Components: photo-stepper + photo-dropzone + form.  
   - State: local TicketDraft (photos + answers).  
   - Action: on Continue, call buildMockTicket() -> produce Ticket.

3) Ticket summary  
   - Component: ticket-summary.  
   - Shows category, suggested SKU, AI rationale, city/ZIP, priority toggle.  
   - Action: "See offers" -> fetch offers (mock or API).

4) Offers list  
   - Component: offers-list -> offer-cards.  
   - Data: Offer[] + Pro metadata.  
   - Sort: Best overall, Lowest price, Top rated.  
   - CTAs: Book fastest now, Select on card.

5) Checkout  
   - Component: checkout-summary.  
   - Inputs: selected Offer, Pro, Ticket.  
   - Shows job total, Speed & Trust Fee (10%), legal microcopy.  
   - Confirm & pay:
     - Mock: show success state.
     - Real: backend PaymentIntent with PSP, handle 3DS/card entry, mark Job scheduled.

6) Post-job  
   - Mock: simple review prompt.  
   - Real: completion event from Pro/backoffice, unlock review, optional dispute flow.

### 5.2 Pro flow (concept)

- Pro signs up, passes KYC, uploads documents.  
- Configures radius, warranty, availability, price preferences per SKU/band.  
- Matching engine pushes ticket opportunities.  
- Pro replies with Instant Offer (fixed price + ETA).  
- On acceptance: sees job details, closes out with photos/notes, triggers escrow release.

### 5.3 Property Manager (B2B) flow

- /business is a teaser for multi-unit PM accounts.  
- Batch ticket creation (CSV/API), SLA windows, monthly billing.  
- Phase 1: simple form, sales config in admin.  
- Phase 2: PM dashboard on Ticket/Job entities, allowlists for Pros.

---

## 6. Where "AI" fits

Mock:

- "AI" is labels + deterministic mapping.  
- Image quality hints ("blur/low light").  
- Issue classification via simple pattern matching.  
- Rationale string uses symptom/hardware.

Real app:

- Image quality and guidance (detect blur, low resolution, framing; suggest retakes).  
- Issue classification: map images + text to likely issue, SKU(s), risk flags.  
- Matching assistance: suggest Pros, predict FTF probability.

Frontend ideally calls one backend endpoint, e.g. `POST /tickets/enrich`; backend orchestrates ML services and returns a populated Ticket.

---

## 7. Integration Points (future)

### 7.1 Payments / PSP

- PSP integration (Stripe/Adyen/Mangopay/etc.).  
- Snap'n'Fix acts as agent-of-payee.  
- Customer pays job amount + "Speed & Trust Fee".  
- Gross job amount held in escrow; on completion Pro payout executes, platform fee retained.

### 7.2 Auth & KYC

- Auth provider for end-users (magic links, optional social).  
- KYC provider for Pros (ID verification, doc scans).  
- Flow: Pro signs up -> KYC -> status "verified".

### 7.3 Observability

- Logging: photo_start, photo_complete, offer_list_view, book_fast_click, checkout_start, checkout_complete, pro_profile_open, faq_open, city_waitlist_submit.  
- Metrics: Photo Start Rate, offer list conversion, booking conversion, time-to-first-offer, first-time-fix rate (when real).  
- In mock: console logs or commented GA/Segment stubs.

---

## 8. Security, Privacy, Marketplace Constraints

- Marketplace: Pros are independent contractors; substitution allowed; no uniforms; no acceptance-rate penalties.  
- Privacy: photos may contain sensitive interiors; store securely with retention policies; minimize PII.  
- Compliance: per-city licensing toggles.  
- Reviews: no suppression of negatives; label incentivized reviews.  
- Platform protection: discretionary credits, clearly labeled (not a warranty).

These constraints drive both UI copy and backend rules.

---

## 9. Roadmap & Open Questions

### 9.1 Short-term roadmap (for this repo)

- Flesh out all routes: /how-it-works, /prices, /pro, /business, /cities/[city], /support, /legal/marketplace.  
- Centralize types in `lib/types.ts`.  
- Extract mock data into `lib/mock-data/*`.  
- Add `lib/analytics.ts` to capture key events (console log now, real tracking later).

### 9.2 Longer-term questions

- Offer count: 3 vs 5 curated offers - which balances choice vs analysis paralysis?  
- Fee framing: "Speed & Trust Fee" vs "Platform Fee" - what converts best and minimizes support load?  
- Priority pricing band: acceptable multiplier across cities (1.1x-1.4x)?  
- PM attach rate: self-serve vs sales-led?  
- AI fallback: do we need a "single-shot" one-photo entry, or is guided 2-3 photo intake required for quality?

This document is intentionally frontend-biased but backend-aware. If you change the data model or flows, update:

- `src/lib/types.ts` (source of truth),
- this `docs/architecture.md`,
- microcopy on `/legal/marketplace` and `/support`.
