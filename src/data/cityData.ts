export interface CityData {
  name: string;
  state: string;
  slug: string;
  neighborhoods: string[];
  activePros: number;
  avgResponseTime: string;
  priceRange: {
    strike: string;
    handle: string;
    hinge: string;
    rehang: string;
  };
  testimonials: {
    name: string;
    neighborhood: string;
    rating: number;
    text: string;
    service: string;
  }[];
  coverageZips: string[];
}

export const cityData: Record<string, CityData> = {
  chicago: {
    name: "Chicago",
    state: "Illinois",
    slug: "chicago",
    neighborhoods: [
      "Lincoln Park",
      "Wicker Park",
      "Logan Square",
      "River North",
      "Lakeview",
      "West Loop",
      "Pilsen",
      "Hyde Park"
    ],
    activePros: 47,
    avgResponseTime: "45 min",
    priceRange: {
      strike: "$79-$109",
      handle: "$99-$149",
      hinge: "$89-$129",
      rehang: "$129-$179"
    },
    testimonials: [
      {
        name: "Sarah M.",
        neighborhood: "Lincoln Park",
        rating: 5,
        text: "Door was fixed in 30 minutes. The pro arrived prepared with everything needed. Great service!",
        service: "Strike plate alignment"
      },
      {
        name: "Michael T.",
        neighborhood: "Wicker Park",
        rating: 5,
        text: "Super fast response, great price, and very professional. My door finally closes properly.",
        service: "Re-hang door"
      },
      {
        name: "Jennifer L.",
        neighborhood: "Lakeview",
        rating: 5,
        text: "The whole process was so easy. Took photos, got quotes, picked a pro. Done in 2 hours!",
        service: "Replace handle"
      }
    ],
    coverageZips: ["60601", "60614", "60622", "60647", "60657", "60661", "60608", "60615"]
  },
  miami: {
    name: "Miami",
    state: "Florida",
    slug: "miami",
    neighborhoods: [
      "Brickell",
      "Wynwood",
      "South Beach",
      "Coral Gables",
      "Coconut Grove",
      "Downtown",
      "Little Havana",
      "Design District"
    ],
    activePros: 38,
    avgResponseTime: "50 min",
    priceRange: {
      strike: "$85-$119",
      handle: "$105-$159",
      hinge: "$95-$139",
      rehang: "$139-$189"
    },
    testimonials: [
      {
        name: "Carlos R.",
        neighborhood: "Brickell",
        rating: 5,
        text: "Finally found someone reliable for small fixes! The pro was on time and did excellent work.",
        service: "Hinge replacement"
      },
      {
        name: "Emily S.",
        neighborhood: "Coral Gables",
        rating: 5,
        text: "Saved me from calling multiple handymen. One photo, instant quotes, problem solved.",
        service: "Strike plate fix"
      },
      {
        name: "David P.",
        neighborhood: "Wynwood",
        rating: 5,
        text: "Great experience from start to finish. Fair pricing and quality workmanship.",
        service: "Door handle replacement"
      }
    ],
    coverageZips: ["33131", "33137", "33139", "33134", "33133", "33132", "33135", "33127"]
  },
  seattle: {
    name: "Seattle",
    state: "Washington",
    slug: "seattle",
    neighborhoods: [
      "Capitol Hill",
      "Fremont",
      "Ballard",
      "Queen Anne",
      "University District",
      "Wallingford",
      "Green Lake",
      "West Seattle"
    ],
    activePros: 42,
    avgResponseTime: "40 min",
    priceRange: {
      strike: "$89-$119",
      handle: "$109-$159",
      hinge: "$99-$139",
      rehang: "$139-$189"
    },
    testimonials: [
      {
        name: "Rachel K.",
        neighborhood: "Capitol Hill",
        rating: 5,
        text: "Such a relief to find a service that actually works! Quick, professional, and transparent pricing.",
        service: "Door alignment"
      },
      {
        name: "Tom H.",
        neighborhood: "Ballard",
        rating: 5,
        text: "The pro knew exactly what was needed from the photos. Came prepared, fixed it fast.",
        service: "Hinge repair"
      },
      {
        name: "Lisa M.",
        neighborhood: "Fremont",
        rating: 5,
        text: "Best home service experience I've had. Everything was smooth and hassle-free.",
        service: "Handle replacement"
      }
    ],
    coverageZips: ["98102", "98103", "98107", "98109", "98105", "98103", "98115", "98116"]
  }
};
