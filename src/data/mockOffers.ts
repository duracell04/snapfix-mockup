export interface Offer {
  proId: string;
  name: string;
  price: number;
  eta: string;
  rating: number;
  jobsDone: number;
  firstTimeFix: number;
  badges: string[];
  warrantyDays: number;
  distanceKm: number;
  portfolio: string[];
  why: string;
  bio?: string;
  specialties?: string[];
  insurance?: boolean;
}

export const mockOffers: Offer[] = [
  {
    proId: "PRO-101",
    name: "Ace Handyman Co.",
    price: 109,
    eta: "90-120 min",
    rating: 4.9,
    jobsDone: 312,
    firstTimeFix: 0.93,
    badges: ["Punctual", "Door Specialist", "Friendly"],
    warrantyDays: 30,
    distanceKm: 3.2,
    portfolio: [],
    why: "Closer - 93% first-time-fix - Door specialist",
    bio: "Family-owned handyman service specializing in door hardware for over 15 years. We pride ourselves on getting it right the first time.",
    specialties: ["Door hardware", "Cabinet repairs", "Minor carpentry"],
    insurance: true
  },
  {
    proId: "PRO-203",
    name: "QuickFix Crew",
    price: 99,
    eta: "Today (2-4pm)",
    rating: 4.7,
    jobsDone: 174,
    firstTimeFix: 0.88,
    badges: ["Great Value", "Careful"],
    warrantyDays: 14,
    distanceKm: 6.0,
    portfolio: [],
    why: "Great value - Good reviews",
    bio: "Professional repair service focused on delivering quality work at fair prices. Available same-day for most jobs.",
    specialties: ["General repairs", "Door & window hardware", "Furniture assembly"],
    insurance: true
  },
  {
    proId: "PRO-317",
    name: "DoorRight",
    price: 129,
    eta: "Priority (60-90 min)",
    rating: 4.95,
    jobsDone: 540,
    firstTimeFix: 0.96,
    badges: ["Top Rated", "Punctual"],
    warrantyDays: 45,
    distanceKm: 2.1,
    portfolio: [],
    why: "Top rated - Nearest - Longest warranty",
    bio: "Door hardware specialists with over 500 successful repairs. We only do doors, and we do them right. Longest warranty in the business.",
    specialties: ["Door alignment", "Lock replacement", "Hinge repair", "Strike plates"],
    insurance: true
  },
  {
    proId: "PRO-428",
    name: "HomeHelper Pro",
    price: 115,
    eta: "Today (4-6pm)",
    rating: 4.8,
    jobsDone: 289,
    firstTimeFix: 0.91,
    badges: ["Careful", "Great Communication"],
    warrantyDays: 30,
    distanceKm: 4.5,
    portfolio: [],
    why: "Excellent communication - Reliable",
    bio: "Licensed and insured professional with a focus on customer satisfaction. Clear communication throughout the entire process.",
    specialties: ["Door repairs", "Lock services", "Minor plumbing"],
    insurance: true
  },
  {
    proId: "PRO-502",
    name: "Precision Repairs",
    price: 105,
    eta: "Tomorrow (9-11am)",
    rating: 4.85,
    jobsDone: 398,
    firstTimeFix: 0.94,
    badges: ["Detail-Oriented", "Professional"],
    warrantyDays: 45,
    distanceKm: 5.2,
    portfolio: [],
    why: "High first-time-fix rate - Detail-oriented",
    bio: "Meticulous attention to detail and professional service. We treat every home like our own.",
    specialties: ["Door hardware", "Cabinet hardware", "Window repairs"],
    insurance: true
  }
];

export interface TicketData {
  ticketId: string;
  category: string;
  sku: string;
  photos: string[];
  aiRationale: string;
  location: {
    city: string;
    zip: string;
  };
  priority: string;
  notes: string;
}

export const mockTicket: TicketData = {
  ticketId: "TKT-78421",
  category: "Door hardware",
  sku: "Fix misaligned strike plate",
  photos: [
    "/images/demo-door-context.jpg",
    "/images/demo-door-closeup.jpg", 
    "/images/demo-door-scale.jpg"
  ],
  aiRationale: "Latch does not seat properly; wear pattern near strike hole suggests misalignment. Common issue caused by door settling or house shifting.",
  location: { city: "Chicago", zip: "60622" },
  priority: "Standard",
  notes: "Old brown interior door; quiet dog at home. Access through main entrance."
};
