// src/lib/types.ts
//
// Core domain types for Snap'n'Fix.
//
// Goal:
// - Single source of truth for the app's data model.
// - Reuse across components, mock data, and future API clients.
// - Typed around the v1 scope (door hardware) but extensible for later categories.

//
// 1. Generic primitives
//

/** Generic string ID type for entities (Ticket, Offer, Pro, etc.). */
export type ID = string;

/** ISO 8601 timestamp string, e.g. "2025-11-27T13:45:00Z". */
export type TimestampIsoString = string;

/** Currency code; v1 is effectively USD but we keep it generic. */
export type CurrencyCode = "USD" | "EUR" | "GBP" | "CHF" | string;

//
// 2. Shared enums / literals
//

export type UserRole = "customer" | "pro" | "pm" | "admin";

export type CategoryId = "door-hardware"; // v1, can extend later

export type TicketStatus =
  | "draft"
  | "offers_open"
  | "offer_selected"
  | "in_progress"
  | "completed"
  | "cancelled";

export type PriorityLevel = "standard" | "priority";

export type DoorType = "interior" | "exterior" | "unknown";

export type HandleType = "lever" | "knob" | "other" | "unknown";

export type SymptomId =
  | "wont_latch"
  | "loose_handle"
  | "scraping_floor"
  | "off_alignment"
  | "other";

export type RiskFlagId =
  | "multi_family"
  | "non_standard_door"
  | "security_sensitive"
  | "access_risk"
  | "other";

/** Badges we might display on a Pro or Offer card. */
export type ProBadgeId =
  | "door_specialist"
  | "top_rated"
  | "great_value"
  | "punctual"
  | "friendly"
  | "careful";

export type OfferStatus = "pending" | "accepted" | "expired" | "withdrawn";

export type JobStatus =
  | "scheduled"
  | "on_the_way"
  | "in_progress"
  | "completed"
  | "disputed"
  | "refunded";

//
// 3. Users & cities
//

export interface User {
  id: ID;
  role: UserRole;
  name: string;
  email: string;
  phone?: string | null;

  // For matching & ETAs
  cityId?: ID;
  timezone?: string; // e.g. "America/Chicago"
}

/** Per-city configuration, including licensing & price bands. */
export interface CityConfig {
  id: ID; // e.g. "chicago"
  name: string; // "Chicago"
  countryCode: string; // "US"
  timezone: string; // "America/Chicago"

  enabledCategories: CategoryId[];

  /** True if local rules require specific handyman licensing. */
  requiresHandymanLicense: boolean;

  /** Optional label for marketing, e.g. "Now serving Next-Gen Door Fixes in Chicago". */
  marketingHeadline?: string;
}

//
// 4. SKU (unit of work)
//

/**
 * SKU = standardized unit of work.
 * Example: "Fix misaligned strike plate", "Re-hang interior door".
 */
export interface Sku {
  id: ID; // e.g. "sku-fix-strike-plate"
  category: CategoryId;
  name: string; // "Fix misaligned strike plate"
  description: string;

  /**
   * Example price bands per city.
   * Used as guidance for Pros and for displaying /prices.
   */
  priceBandsByCity: Record<
    ID, // CityConfig.id
    {
      currency: CurrencyCode;
      min: number;
      max: number;
    }
  >;

  /** Text for what is included in this SKU. */
  includes: string[];

  /** Text for what is explicitly excluded (e.g. frame repair, smart lock setup). */
  excludes: string[];
}

//
// 5. Ticket (customer request)
//

/**
 * Ticket: generated from photos + short Q&A.
 * Represents one issue at one location.
 */
export interface Ticket {
  id: ID; // "TKT-78421"
  customerId: ID;

  category: CategoryId; // v1: "door-hardware"
  cityId: ID;
  zipcode?: string;

  // Raw intake fields
  photoUrls: string[];
  doorType: DoorType;
  handleType: HandleType;
  symptom: SymptomId;
  accessNotes?: string;

  // AI-enriched fields
  suggestedSkuId: ID; // e.g. "sku-fix-strike-plate"
  aiRationale: string; // human-readable explanation for the mapping
  riskFlags: RiskFlagId[];

  // Matching / lifecycle
  status: TicketStatus;
  priority: PriorityLevel;

  createdAt: TimestampIsoString;
  updatedAt: TimestampIsoString;
}

/**
 * TicketDraft: local-only state during intake, before we have a full Ticket.
 * Useful for frontend forms and mocks.
 */
export interface TicketDraft {
  category: CategoryId;
  cityId?: ID;
  zipcode?: string;
  photoFiles: File[]; // local photos before upload
  doorType?: DoorType;
  handleType?: HandleType;
  symptom?: SymptomId;
  accessNotes?: string;
}

//
// 6. Pros & portfolios
//

/** Independent professional (Fixer). */
export interface Pro {
  id: ID;
  displayName: string; // "Ace Handyman Co." / "Jordan T."
  companyName?: string;
  cityId: ID;
  avatarUrl?: string;
  bio?: string;

  // Ratings & stats
  rating: number; // 0-5
  reviewCount: number;
  firstTimeFixRate: number; // 0-1
  disputeRate: number; // 0-1
  jobsDone: number;

  // Operational
  specialties: CategoryId[]; // v1: ["door-hardware"]
  baseRadiusKm: number;
  acceptsPriority: boolean;
  standardWarrantyDays: number;

  // Compliance & trust
  insuranceVerified: boolean;
  licenseVerified: boolean;

  // Portfolio
  portfolioItems: PortfolioItem[];
}

/** Before/after example for a Pro's portfolio. */
export interface PortfolioItem {
  id: ID;
  proId: ID;
  beforePhotoUrl: string;
  afterPhotoUrl: string;
  caption?: string;
  ticketId?: ID;
  cityId?: ID;
  createdAt?: TimestampIsoString;
}

//
// 7. Offers (Pro -> Ticket)
//

/**
 * Offer: a Pro's fixed-price proposal in response to a Ticket.
 */
export interface Offer {
  id: ID;
  ticketId: ID;
  proId: ID;

  skuId: ID; // which SKU this offer maps to
  currency: CurrencyCode;
  price: number; // all-in job price, before customer fee

  warrantyDays: number;
  etaWindow: string; // human string like "Today 2-4pm"

  // Snapshot of matching metrics at time of offer
  distanceKm: number;
  firstTimeFixRate: number;
  disputeRate: number;
  rankingScore: number; // composite: ETA, rating, FTF, distance, price vs band

  status: OfferStatus;
  createdAt: TimestampIsoString;
  expiresAt: TimestampIsoString;

  /** Human-readable explanation for "Why this pro?" tooltip. */
  whyThisPro: string;

  /** Optional badges surfaced on the offer card. */
  badges?: ProBadgeId[];
}

/** Sort options for the offers list UI. */
export type OfferSortOption = "best_overall" | "lowest_price" | "top_rated";

//
// 8. Jobs & reviews
//

/**
 * Job: a Ticket + Offer that has been accepted (i.e. booked work).
 */
export interface Job {
  id: ID;
  ticketId: ID;
  offerId: ID;
  proId: ID;
  customerId: ID;

  status: JobStatus;

  scheduledWindow: string; // e.g. "Today 14:00-16:00"
  startedAt?: TimestampIsoString;
  completedAt?: TimestampIsoString;

  // Payments
  currency: CurrencyCode;
  jobAmount: number; // the Pro-facing job amount from Offer.price
  customerFee: number; // "Speed & Trust Fee"
  platformFeePro: number; // Pro-side fee
  platformRevenue: number; // derived: customerFee + platformFeePro
}

/** Verified customer review tied to a completed Job. */
export interface Review {
  id: ID;
  jobId: ID;
  ticketId: ID;
  proId: ID;
  customerId: ID;

  rating: number; // 1-5
  comment?: string;

  createdAt: TimestampIsoString;
  verified: boolean; // true if tied to completed job
}

//
// 9. Support / disputes (future)
//

export type DisputeStatus =
  | "open"
  | "under_review"
  | "resolved_customer"
  | "resolved_pro"
  | "split"
  | "cancelled";

export interface Dispute {
  id: ID;
  jobId: ID;
  ticketId: ID;
  customerId: ID;
  proId: ID;

  status: DisputeStatus;
  reason: string; // short category or free text
  customerStatement?: string;
  proStatement?: string;

  createdAt: TimestampIsoString;
  updatedAt: TimestampIsoString;
}

//
// 10. Analytics event types (optional helper)
//

/**
 * Analytics events we care about; useful for a thin analytics wrapper.
 */
export type AnalyticsEventName =
  | "photo_start"
  | "photo_complete"
  | "offer_list_view"
  | "book_fast_click"
  | "pro_card_click"
  | "checkout_start"
  | "checkout_complete"
  | "pro_profile_open"
  | "portfolio_image_open"
  | "faq_open"
  | "city_waitlist_submit";

/** Generic analytics payload shape. */
export interface AnalyticsEvent {
  name: AnalyticsEventName;
  timestamp: TimestampIsoString;
  userId?: ID;
  properties?: Record<string, unknown>;
}
