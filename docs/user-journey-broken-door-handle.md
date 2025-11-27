# Snap'n'Fix User Journey — Broken Interior Door Handle

> Core demo story for the current mockup:  
> **"My interior door handle is broken/loose - I want it fixed quickly, with a clear price, from my phone."**

This document describes the end-to-end user journey for a typical Snap'n'Fix customer with a broken interior door handle, mapped to:

- What the user sees and does in the current frontend mockup.
- What is intended to happen in the real app behind the scenes later.

The scenario is written so you can use it in live demos, product discussions, and UX reviews.

---

## 1. Persona & Context

**Persona:**
- Name: Alex
- Location: Chicago, US
- Profile: Young professional, renting an apartment, works long hours.
- Tech: Comfortable with apps, used Uber/Instacart before, not loyal to any handyman.

**Problem:**
- The bedroom door handle is loose / half-broken.
- The door still kind of works, but:
  - The handle sometimes spins without engaging the latch.
  - They worry it may break completely, or someone might get locked in.
- Alex doesn't know:
  - Which handyman to call,
  - What it should cost,
  - Whether they'll show up on time.

**Goal:**
> "Get this fixed today or tomorrow, without endless phone calls or surprise costs."

---

## 2. High-Level Journey (Narrative)

1. Trigger: Door handle starts slipping -> Alex searches "fix loose door handle Chicago" -> lands on Snap'n'Fix homepage.
2. Landing -> Intent: The hero quickly tells Alex: "Photo -> fixed price offers -> pick a pro or just book fastest."
3. Photo intake: Alex taps Get price from a photo, uploads 2-3 photos of the door + handle, answers 3-4 short questions.
4. AI-curated ticket: The app shows a summary card: likely issue (broken/loose handle), suggested SKU, city, notes.
5. Offers: Alex sees 3-5 fixed-price offers with different Pros (price, ETA, rating, badges, portfolios).
6. Decision: Alex taps Book fastest now or manually picks the Pro with the best mix of rating, ETA, and warranty.
7. Checkout: They see a clear breakdown (job + Speed & Trust Fee) and the legal line about independent Pros.
8. Confirmation: A success state shows the Pro, ETA window, and status; Alex can close the phone and wait.
9. Job done: Pro comes, replaces the handle, marks job done; Alex later gets a review prompt.
10. Review & trust loop: Alex leaves a rating/review; the Pro's portfolio and stats improve; the marketplace gets smarter.

---

## 3. Screen-by-Screen Journey (Mockup View)

### 3.1 Landing on Homepage (`/`)

**Trigger:** Alex taps a search ad or organic result and lands on the Snap'n'Fix homepage.

**What Alex sees:**

- Hero:
  - H1: "Snap, fix, done."
  - Sub: "Fixed price from a photo. Book a vetted pro in minutes - most small fixes done in one visit."
  - CTAs:
    - Get price from a photo (primary)
    - Pick your pro (secondary)
- Proof strip:
  - 4.8 rating, Independent pros, Secure escrow, Pro-set warranties
- Quick "how it works" strip:
  - Snap -> Pick or go -> Fix
- Category wedge:
  - "Door hardware first" and chips like:
    - Latch/strike, Handle replace, Hinges, Re-hang
- City module:
  - "Now serving: Chicago, Miami, Seattle" (with "Waitlist your city" input)

**What Alex thinks:**

- "Oh, this is specifically for door fixes."
- "I can see the price from a photo, and there is more than one Pro to choose from."

**Action:**  
Alex taps Get price from a photo.

---

### 3.2 Photo Intake (Handle Problem)

**Route:** Still part of the main flow (can be a modal/section or separate route like `/flow/start` depending on implementation).

**What Alex sees:**

- A 3-step intake UI:
  1. Upload/front view of the door.
  2. Close-up of the handle and latch.
  3. Add scale (place a coin or card in the shot).

- A dropzone or file input with helper hints:
  - "Front view - done?"
  - "Close-up of the handle/latch - done?"
  - "Add scale: place a coin or card in the shot - done?"

- Simple question fields:
  - Door type: Interior / Exterior
  - Handle type: Lever / Knob
  - Symptom: Won't latch / Loose handle / Scraping floor / Door off alignment
  - Access notes: a free text area (e.g. "Quiet dog, home after 5pm only")

**What Alex does:**

1. Takes a photo of the bedroom door from the hallway (front view).
2. Takes a close-up of the loose handle and the latch edge.
3. Takes a third photo with a credit card in frame for scale.
4. Answers:
   - Door type: Interior
   - Handle type: Lever
   - Symptom: Loose handle
   - Access notes: "Apartment, call from lobby. Home after 6pm, dog is friendly."

**What the mockup does (frontstage):**

- Shows a small "We're checking your photos..." or progress bar.
- Moves Alex to the ticket summary screen.

**What the real app would do (backstage):**

- Run basic image checks (blur, brightness).
- Run a model that:
  - classifies likely issue: "Handle mechanism loose/failing",
  - maps to SKU: "Replace door handle (lever/knob)",
  - sets risk flags (e.g. none - simple interior).

---

### 3.3 AI-Curated Ticket Summary

**What Alex sees:**

A card titled something like "We have created your Snap'n'Fix ticket" showing:

- Issue: "Loose interior lever handle that may fail."
- Likely issue: "Handle mechanism worn/loose."
- Suggested fix (SKU): "Replace door handle (lever/knob)."
- Door: "Interior · Lever"
- Location: "Chicago, 60622"
- Priority: Standard today (default) / Priority (60-120 min) toggle
- Notes: "Apartment, call from lobby. Home after 6pm, dog is friendly."

With an AI rationale line like:

> "Likely issue: Loose or failing handle mechanism based on close-up and symptom."

**Action:**  
Alex clicks See offers.

**Mockup behavior:**

- Reads from mock data (MOCK_TICKET) and MOCK_OFFERS_FOR_TICKET.
- Navigates to the offers list view.

**Real app behavior (future):**

- Creates a Ticket in the database.
- Triggers matching engine to ping nearby Pros with this ticket.

---

### 3.4 Offers List (Multi-Offer "Uber but better")

**What Alex sees:**

An offers list for this ticket (broken/loose handle mapped to handle-replacement SKU). Typical cards:

- Offer 1 - Ace Handyman Co.
  - Price: $129 all-in
  - ETA: "Today, 7-9pm"
  - Rating: 4.9 (134)
  - First-time-fix: 93%
  - Badges: Door specialist · Punctual · Friendly
  - Warranty: 30 days
  - Mini before/after gallery preview
  - "Why this pro?": "Closer - 93% first-time-fix - Door specialist"

- Offer 2 - QuickFix Crew
  - Price: $119 all-in
  - ETA: "Tomorrow, 10-12am"
  - Rating: 4.7 (89)
  - First-time-fix: 88%
  - Badges: Great value · Careful
  - Warranty: 14 days
  - "Why this pro?": "Great value - Good reviews"

- Offer 3 - DoorRight
  - Price: $149 all-in
  - ETA: "Priority (60-90 min)"
  - Rating: 4.95 (256)
  - First-time-fix: 96%
  - Badges: Top rated · Punctual
  - Warranty: 45 days
  - "Why this pro?": "Top rated - Nearest - Longest warranty"

At the top:

- Sort tabs: Best overall (default) · Lowest price · Top rated
- Primary CTA: Book fastest now

**What Alex thinks:**

- "I get multiple options, not just one driver."
- "I can see price, rating, time window, warranty."
- "Book fastest" is good if Alex doesn't want to think; but they might inspect cards a bit.

**Action options:**

1. Quick decision: Click Book fastest now (top selected Pro by composite score).
2. Deliberate: Click on a Pro card:
   - Opens a Pro profile panel with more reviews, galleries, and details.
   - Alex might choose DoorRight for slightly more money but higher rating and longer warranty.

For the main story, assume Alex taps Book fastest now.

---

### 3.5 Checkout (Fixed Price + Fee Clarity)

**What Alex sees:**

A checkout summary:

- Job: "Replace interior door handle (lever/knob) - Chicago"
- Price: e.g. $129.00
- Speed & Trust Fee (10%): e.g. $12.90  
  > "Matching, secure escrow, and dispute mediation."
- Total: $141.90

Pro details:

- Name, rating, total jobs, warranty length.
- ETA window (e.g. "Today 7-9pm").

Legal line:

> "Work is performed by [Pro Name], an independent professional. Warranty: [X days], provided by [Pro Name]."

CTAs:

- Primary: Confirm and pay (mocked for now).
- Secondary: Back/Cancel.

**What Alex does:**

- Reviews the total.
- Clicks Confirm and pay (in demo, this just moves to a success state).

**Mockup behavior:**

- No real payment - just transition to "Booked" screen.
- Optionally logs a checkout_complete analytics event (console).

**Real app behavior (future):**

- Create PaymentIntent with PSP.
- Capture payment, mark Job as scheduled.
- Notify Pro and customer.

---

### 3.6 Confirmation & Waiting

**What Alex sees:**

- Confirmation message:  
  > "You are booked! [Pro Name] is confirmed for Today, 7-9pm."
- Status chips:
  - Scheduled -> (later On the way -> Completed in a real app).
- Contact / support snippet: "Need help? Open Support" (link to `/support`).

Alex closes the app; they are done.

---

### 3.7 Job Completion & Review

(Partly conceptual; your mock may or may not show this yet.)

**What Alex sees after the visit:**

- A prompt:  
  > "How did it go with [Pro Name]?"
- Rating component (1-5 stars).
- Text field: "Say thanks or tell us what could be better."

Alex rates 5 stars and writes:

> "Pro arrived on time, replaced the handle in 25 minutes, door works perfectly."

**What happens in the system (future):**

- A Review is stored, tied to the Job and Pro.
- Pro's:
  - average rating,
  - review count,
  - first-time-fix stats  
  are updated.
- Portfolio: Pro may mark this job as a portfolio entry (with before/after photos).

Next time a user in Chicago has a handle problem, this Pro may rank higher in Best overall.

---

## 4. Journey Table (Stage-by-Stage)

| Stage                     | User Action                                        | UI State (Mockup)                                               | Backend Intent (Future)                                             |
|---------------------------|----------------------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------|
| Trigger and Landing       | Clicks search result / ad                          | Homepage hero, door hardware wedge, clear CTAs                  | None (marketing only)                                               |
| Start Flow                | Clicks Get price from a photo                      | Scrolls/route into photo intake stepper                         | None or create temp TicketDraft                                     |
| Photo intake              | Uploads 2-3 photos, answers Qs                     | Dropzone + form + stepper                                       | Upload photos, run quality checks                                   |
| AI-curated ticket         | Confirms auto-detected issue and preferences       | Ticket summary card (likely issue, SKU, rationale, priority)    | Persist Ticket, call enrichment/AI service                          |
| See offers                | Clicks See offers                                  | Offers list with 3-5 cards                                      | Matching service generates/returns Offer[]                          |
| Evaluate options          | Skims prices, ETAs, reviews, warranties            | Offers list, sort tabs, "Why this pro?" tooltip                 | None (read-only over computed offers)                               |
| Decision                  | Clicks Book fastest now or Select                  | Checkout screen with breakdown and legal                        | Mark selected Offer; prepare payment intent                          |
| Confirm and pay           | Clicks Confirm and pay                             | Booking success / confirmation                                  | Capture payment; create Job; mark scheduled                         |
| Wait and visit            | Waits for Pro to arrive                            | (Future) tracking status on job page                            | Pro app tracks on_the_way, in_progress, completed                   |
| Review                    | Rates Pro and adds comment                         | Simple rating and text inputs                                   | Create Review; update Pro stats, optional Portfolio item            |

---

## 5. Why this story matters for demos

This broken door handle story is ideal for live demos because:

- It is intuitively relatable ("my handle is loose / broke yesterday").
- It showcases:
  - Photo-first intake,
  - AI-curated ticket,
  - Multi-offer marketplace (vs 1 driver),
  - Fixed pricing + fee clarity,
  - Marketplace legal framing (independent Pros).
- It matches the v1 scope (door hardware, not regulated work).
- It is compatible with the mock data model (Ticket, Offer, Pro, SKUs).

You can walk stakeholders through this document while clicking through the mockup so they see:

> "This is what Snap'n'Fix is for, this is how users flow through it, and this is how the real marketplace will behave later."
