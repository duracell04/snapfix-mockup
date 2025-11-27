// src/lib/mock-data.ts
//
// Static demo data + tiny helpers for the Snap'n'Fix mockup.
// Safe for demos: no side effects, no network calls, no timers.

import type {
  CityConfig,
  Sku,
  Ticket,
  Pro,
  Offer,
  CurrencyCode,
  OfferSortOption,
} from "./types";

//
// 1. Helpers
//

/** Simple ID helper for mock entities (not cryptographically unique). */
let nextId = 1;
const makeId = (prefix: string): string => `${prefix}-${nextId++}`;

/** Convenience for "now" as ISO string. */
const now = (): string => new Date().toISOString();

//
// 2. Cities
//

export const MOCK_CURRENCY: CurrencyCode = "USD";

export const MOCK_CITIES: CityConfig[] = [
  {
    id: "chicago",
    name: "Chicago",
    countryCode: "US",
    timezone: "America/Chicago",
    enabledCategories: ["door-hardware"],
    requiresHandymanLicense: false,
    marketingHeadline: "Door hardware fixes across Chicago - fixed price from a photo.",
  },
  {
    id: "miami",
    name: "Miami",
    countryCode: "US",
    timezone: "America/New_York",
    enabledCategories: ["door-hardware"],
    requiresHandymanLicense: false,
    marketingHeadline: "From Brickell to Miami Beach, get your door fixed in one visit.",
  },
  {
    id: "seattle",
    name: "Seattle",
    countryCode: "US",
    timezone: "America/Los_Angeles",
    enabledCategories: ["door-hardware"],
    requiresHandymanLicense: false,
    marketingHeadline: "Door repairs in Seattle with transparent, fixed pricing.",
  },
];

export const getMockCityById = (id: string): CityConfig | undefined =>
  MOCK_CITIES.find((c) => c.id === id);

//
// 3. SKUs (example /prices content)
//

export const MOCK_DOOR_HARDWARE_SKUS: Sku[] = [
  {
    id: "sku-fix-strike-plate",
    category: "door-hardware",
    name: "Fix misaligned strike plate",
    description: "Adjust or shim an interior strike plate so the latch seats properly.",
    priceBandsByCity: {
      chicago: { currency: MOCK_CURRENCY, min: 79, max: 109 },
      miami: { currency: MOCK_CURRENCY, min: 79, max: 119 },
      seattle: { currency: MOCK_CURRENCY, min: 79, max: 119 },
    },
    includes: ["Adjust or shim existing strike plate", "Test latch and close"],
    excludes: ["Frame repair", "New hardware / smart lock install"],
  },
  {
    id: "sku-replace-handle",
    category: "door-hardware",
    name: "Replace door handle",
    description: "Swap an existing interior lever/knob for a new one supplied by the customer.",
    priceBandsByCity: {
      chicago: { currency: MOCK_CURRENCY, min: 99, max: 149 },
      miami: { currency: MOCK_CURRENCY, min: 99, max: 159 },
      seattle: { currency: MOCK_CURRENCY, min: 99, max: 159 },
    },
    includes: ["Remove existing handle", "Install new handle", "Basic function test"],
    excludes: ["Smart lock setup", "Exterior high-security hardware"],
  },
  {
    id: "sku-tighten-hinges",
    category: "door-hardware",
    name: "Tighten/replace hinges (up to 3)",
    description: "Tighten or replace up to three hinges on a single interior door.",
    priceBandsByCity: {
      chicago: { currency: MOCK_CURRENCY, min: 89, max: 129 },
      miami: { currency: MOCK_CURRENCY, min: 89, max: 139 },
      seattle: { currency: MOCK_CURRENCY, min: 89, max: 139 },
    },
    includes: ["Tighten screws", "Replace worn hinges (customer-supplied)", "Test swing"],
    excludes: ["Reframing door opening", "Exterior / fire doors"],
  },
  {
    id: "sku-rehang-door",
    category: "door-hardware",
    name: "Re-hang interior door",
    description: "Remove and re-hang a sticking or scraping interior door, including minor adjustments.",
    priceBandsByCity: {
      chicago: { currency: MOCK_CURRENCY, min: 129, max: 179 },
      miami: { currency: MOCK_CURRENCY, min: 139, max: 189 },
      seattle: { currency: MOCK_CURRENCY, min: 139, max: 189 },
    },
    includes: ["Remove door", "Adjust hinges and clearances", "Re-hang and test"],
    excludes: ["Major frame work", "Exterior doors", "Painting or refinishing"],
  },
];

export const getMockSkuById = (id: string): Sku | undefined =>
  MOCK_DOOR_HARDWARE_SKUS.find((sku) => sku.id === id);

//
// 4. Mock Ticket (as in the README example)
//

export const MOCK_TICKET_ID = "TKT-78421";

export const MOCK_TICKET: Ticket = {
  id: MOCK_TICKET_ID,
  customerId: "CUS-001",
  category: "door-hardware",
  cityId: "chicago",
  zipcode: "60622",
  photoUrls: [
    "/assets/mock/door_front.jpg",
    "/assets/mock/latch_close.jpg",
    "/assets/mock/scale_card.jpg",
  ],
  doorType: "interior",
  handleType: "lever",
  symptom: "wont_latch",
  accessNotes: "Old brown door; quiet dog at home.",
  suggestedSkuId: "sku-fix-strike-plate",
  aiRationale: "Latch does not seat; wear pattern near strike hole suggests strike plate misalignment.",
  riskFlags: [],
  status: "offers_open",
  priority: "standard",
  createdAt: now(),
  updatedAt: now(),
};

export const getMockTicketById = (id: string): Ticket | undefined =>
  id === MOCK_TICKET_ID ? MOCK_TICKET : undefined;

//
// 5. Mock Pros
//

export const MOCK_PROS: Pro[] = [
  {
    id: "PRO-101",
    displayName: "Ace Handyman Co.",
    companyName: "Ace Handyman Co.",
    cityId: "chicago",
    avatarUrl: "/assets/mock/pro_ace.jpg",
    bio: "Door hardware and small repairs across Chicago for 10+ years.",
    rating: 4.9,
    reviewCount: 134,
    firstTimeFixRate: 0.93,
    disputeRate: 0.02,
    jobsDone: 312,
    specialties: ["door-hardware"],
    baseRadiusKm: 10,
    acceptsPriority: true,
    standardWarrantyDays: 30,
    insuranceVerified: true,
    licenseVerified: true,
    portfolioItems: [
      {
        id: makeId("PF-ACE"),
        proId: "PRO-101",
        beforePhotoUrl: "/assets/mock/portfolio_ace_1_before.jpg",
        afterPhotoUrl: "/assets/mock/portfolio_ace_1_after.jpg",
        caption: "Misaligned strike plate on rental unit.",
        ticketId: MOCK_TICKET_ID,
        cityId: "chicago",
        createdAt: now(),
      },
      {
        id: makeId("PF-ACE"),
        proId: "PRO-101",
        beforePhotoUrl: "/assets/mock/portfolio_ace_2_before.jpg",
        afterPhotoUrl: "/assets/mock/portfolio_ace_2_after.jpg",
        caption: "Scraping bedroom door re-hung and adjusted.",
        cityId: "chicago",
        createdAt: now(),
      },
    ],
  },
  {
    id: "PRO-203",
    displayName: "QuickFix Crew",
    companyName: "QuickFix Crew LLC",
    cityId: "chicago",
    avatarUrl: "/assets/mock/pro_quickfix.jpg",
    bio: "Fast, budget-friendly fixes for doors and small repairs.",
    rating: 4.7,
    reviewCount: 89,
    firstTimeFixRate: 0.88,
    disputeRate: 0.03,
    jobsDone: 174,
    specialties: ["door-hardware"],
    baseRadiusKm: 15,
    acceptsPriority: false,
    standardWarrantyDays: 14,
    insuranceVerified: true,
    licenseVerified: false,
    portfolioItems: [
      {
        id: makeId("PF-QF"),
        proId: "PRO-203",
        beforePhotoUrl: "/assets/mock/portfolio_qf_1_before.jpg",
        afterPhotoUrl: "/assets/mock/portfolio_qf_1_after.jpg",
        caption: "Loose handle replaced in condo.",
        cityId: "chicago",
        createdAt: now(),
      },
    ],
  },
  {
    id: "PRO-317",
    displayName: "DoorRight",
    companyName: "DoorRight Services",
    cityId: "chicago",
    avatarUrl: "/assets/mock/pro_doorright.jpg",
    bio: "Specialists in doors, frames, and hardware. Historic homes welcome.",
    rating: 4.95,
    reviewCount: 256,
    firstTimeFixRate: 0.96,
    disputeRate: 0.01,
    jobsDone: 540,
    specialties: ["door-hardware"],
    baseRadiusKm: 12,
    acceptsPriority: true,
    standardWarrantyDays: 45,
    insuranceVerified: true,
    licenseVerified: true,
    portfolioItems: [
      {
        id: makeId("PF-DR"),
        proId: "PRO-317",
        beforePhotoUrl: "/assets/mock/portfolio_dr_1_before.jpg",
        afterPhotoUrl: "/assets/mock/portfolio_dr_1_after.jpg",
        caption: "Historic wood door that wouldn't latch, now closing smoothly.",
        cityId: "chicago",
        createdAt: now(),
      },
      {
        id: makeId("PF-DR"),
        proId: "PRO-317",
        beforePhotoUrl: "/assets/mock/portfolio_dr_2_before.jpg",
        afterPhotoUrl: "/assets/mock/portfolio_dr_2_after.jpg",
        caption: "Office door scraping floor, re-hung and planed.",
        cityId: "chicago",
        createdAt: now(),
      },
    ],
  },
];

export const getMockProById = (id: string): Pro | undefined =>
  MOCK_PROS.find((pro) => pro.id === id);

//
// 6. Mock Offers for the main ticket
//

export const MOCK_OFFERS_FOR_TICKET: Offer[] = [
  {
    id: "OFF-ACE-1",
    ticketId: MOCK_TICKET_ID,
    proId: "PRO-101",
    skuId: "sku-fix-strike-plate",
    currency: MOCK_CURRENCY,
    price: 109,
    warrantyDays: 30,
    etaWindow: "90-120 min",
    distanceKm: 3.2,
    firstTimeFixRate: 0.93,
    disputeRate: 0.02,
    rankingScore: 0.91,
    status: "pending",
    createdAt: now(),
    expiresAt: now(),
    whyThisPro: "Closer - 93% first-time-fix - Door specialist",
    badges: ["door_specialist", "punctual", "friendly"],
  },
  {
    id: "OFF-QF-1",
    ticketId: MOCK_TICKET_ID,
    proId: "PRO-203",
    skuId: "sku-fix-strike-plate",
    currency: MOCK_CURRENCY,
    price: 99,
    warrantyDays: 14,
    etaWindow: "Today (2-4pm)",
    distanceKm: 6.0,
    firstTimeFixRate: 0.88,
    disputeRate: 0.03,
    rankingScore: 0.84,
    status: "pending",
    createdAt: now(),
    expiresAt: now(),
    whyThisPro: "Great value - Good reviews",
    badges: ["great_value", "careful"],
  },
  {
    id: "OFF-DR-1",
    ticketId: MOCK_TICKET_ID,
    proId: "PRO-317",
    skuId: "sku-fix-strike-plate",
    currency: MOCK_CURRENCY,
    price: 129,
    warrantyDays: 45,
    etaWindow: "Priority (60-90 min)",
    distanceKm: 2.1,
    firstTimeFixRate: 0.96,
    disputeRate: 0.01,
    rankingScore: 0.95,
    status: "pending",
    createdAt: now(),
    expiresAt: now(),
    whyThisPro: "Top rated - Nearest - Longest warranty",
    badges: ["top_rated", "punctual"],
  },
];

export const getMockOffersForTicket = (ticketId: string): Offer[] =>
  MOCK_OFFERS_FOR_TICKET.filter((offer) => offer.ticketId === ticketId);

/**
 * Utility to get offers sorted by a high-level sort option.
 * You can reuse this in your offers list component.
 */
export const sortOffers = (offers: Offer[], sort: OfferSortOption = "best_overall"): Offer[] => {
  const copy = [...offers];
  switch (sort) {
    case "lowest_price":
      return copy.sort((a, b) => a.price - b.price);
    case "top_rated":
      return copy.sort((a, b) => b.rankingScore - a.rankingScore);
    case "best_overall":
    default:
      return copy.sort((a, b) => b.rankingScore - a.rankingScore);
  }
};
