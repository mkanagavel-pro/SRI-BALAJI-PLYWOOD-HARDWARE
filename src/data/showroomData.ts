export interface ProductItem {
  id: string;
  name: string;
  category: 'Plywood' | 'Laminates' | 'Doors' | 'Hardware' | 'Interior Materials';
  description: string;
  image: string;
  keyFeature: string;
  highlightPoints: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Showroom' | 'Plywood' | 'Interiors' | 'Products' | 'Hardware';
  image: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: 'SRI BALAJI PLYWOOD & HARDWARE',
  shortName: 'Sri Balaji',
  tagline: 'Build Strong. Build Beautiful.',
  subTagline:
    'Premium plywood, laminates, doors and hardware solutions for homes, interiors and construction projects.',
  category: 'Hardware & Interior Materials Store',
  phone: '062655 99664',
  phoneClean: '+916265599664',
  phoneDisplay: '062655 99664',
  address:
    '17/5, 6 & 7, Meyyanur Main Road, Opposite First American, Arisipalayam, Salem, Tamil Nadu 636009',
  addressLines: [
    '17/5, 6 & 7, Meyyanur Main Road',
    'Opposite First American, Arisipalayam',
    'Salem, Tamil Nadu 636009',
  ],
  city: 'Salem, Tamil Nadu',
  googleRating: '4.9',
  googleReviewsCount: 60,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SRI+BALAJI+PLYWOOD+%26+HARDWARE+17%2F5+Meyyanur+Main+Road+Salem+Tamil+Nadu+636009',
  hours: 'Mon – Sat: 9:00 AM – 8:30 PM · Sunday: Visit by Appointment',
  agencyName: 'KEAGROW',
  disclaimer:
    'Concept Website Demo by KEAGROW for presentation to the business owner. Not the official website of SRI BALAJI PLYWOOD & HARDWARE.',
};

export const PRODUCT_CATEGORIES: ProductItem[] = [
  {
    id: 'plywood',
    name: 'Plywood',
    category: 'Plywood',
    description:
      'BWP Marine Grade Plywood designed for strong performance with high water and moisture resistance. Termite resistant for enduring interior and structural woodwork.',
    image: '/plywood_marine_grade_macro_1790698897548.jpg',
    keyFeature: 'BWP Marine Grade & Termite Resistant',
    highlightPoints: [
      'BWP Marine Grade Plywood',
      'Termite resistant construction',
      'High water & moisture resistance',
      'Strong, reliable performance',
    ],
  },
  {
    id: 'laminates',
    name: 'Laminates',
    category: 'Laminates',
    description:
      'Curated surface laminates offering rich textures, contemporary woodgrains, and tactile finishes for modern residential and commercial interiors.',
    image: '/laminates_swatches_1790698942221.jpg',
    keyFeature: 'Surface Textures & Woodgrains',
    highlightPoints: [
      'Natural woodgrain & stone finishes',
      'Matte & textured surface sheets',
      'Durable daily wear resistance',
      'Ideal for wardrobes & cabinetry',
    ],
  },
  {
    id: 'doors',
    name: 'Doors',
    category: 'Doors',
    description:
      'Solid and flush door solutions crafted for dimensional stability, sound dampening, and elegant architectural integration throughout your property.',
    image: '/doors_architectural_1790698959942.jpg',
    keyFeature: 'Architectural Strength & Finish',
    highlightPoints: [
      'Solid core & flush door options',
      'Smooth surface ready for laminates or paint',
      'Precision structural stability',
      'Enduring interior & entrance use',
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    category: 'Hardware',
    description:
      'Precision architectural hardware, including mortise handles, security locksets, concealed hinges, and fittings engineered for smooth tactile operation.',
    image: '/hardware_brass_handles_1790698923842.jpg',
    keyFeature: 'Brass & Matte Architectural Fittings',
    highlightPoints: [
      'Brushed brass & matte bronze handles',
      'Heavy-duty locks and mortise systems',
      'Soft-close hinges & sliding channels',
      'Durable corrosion-resistant alloys',
    ],
  },
  {
    id: 'interior-materials',
    name: 'Interior Materials',
    category: 'Interior Materials',
    description:
      'Comprehensive material supplies for carpenters, architects, and contractors building bespoke interior cabinetry, wall paneling, and modular structures.',
    image: '/interior_living_wood_joinery_1790698909436.jpg',
    keyFeature: 'Complete Joinery Solutions',
    highlightPoints: [
      'Modular interior framing materials',
      'Edge bands, adhesives & fasteners',
      'Acoustic & decorative wall linings',
      'Harmonized color and grain combinations',
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Quality Products',
    desc: 'Carefully curated inventory including genuine BWP Marine Grade Plywood and durable architectural hardware.',
  },
  {
    number: '02',
    title: 'Competitive Pricing',
    desc: 'Fair, transparent pricing providing excellent value for homeowners, carpenters, and construction projects.',
  },
  {
    number: '03',
    title: 'Helpful Guidance',
    desc: 'Professional staff ready to provide material recommendations tailored to your specific project needs.',
  },
  {
    number: '04',
    title: 'Reliable Service',
    desc: 'Consistent attention to detail, trustworthy customer support, and dependable follow-through on every order.',
  },
  {
    number: '05',
    title: 'Delivery Support',
    desc: 'Direct dispatch and delivery assistance to transport materials securely to your site in and around Salem.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Showroom Interior & Material Display',
    category: 'Showroom',
    image: '/hero_wood_plywood_showroom_1790698880614.jpg',
    caption: 'Modern showroom environment showcasing timber panels and interior finishes.',
  },
  {
    id: 'g-2',
    title: 'BWP Marine Grade Plywood Inspection',
    category: 'Plywood',
    image: '/plywood_marine_grade_macro_1790698897548.jpg',
    caption: 'Cross-section layers and natural grain of high water and moisture resistant plywood.',
  },
  {
    id: 'g-3',
    title: 'Architectural Brass & Lock Hardware',
    category: 'Hardware',
    image: '/hardware_brass_handles_1790698923842.jpg',
    caption: 'Brushed brass handles and precision locksets on dark wood.',
  },
  {
    id: 'g-4',
    title: 'Decorative Laminate Surface Swatches',
    category: 'Products',
    image: '/laminates_swatches_1790698942221.jpg',
    caption: 'Architectural texture swatches including woodgrains and contemporary matte tones.',
  },
  {
    id: 'g-5',
    title: 'Flush Architectural Door Entry',
    category: 'Products',
    image: '/doors_architectural_1790698959942.jpg',
    caption: 'Precision crafted wooden door suited for contemporary residences.',
  },
  {
    id: 'g-6',
    title: 'Integrated Interior Woodwork Scene',
    category: 'Interiors',
    image: '/interior_living_wood_joinery_1790698909436.jpg',
    caption: 'Living space uniting plywood framing, decorative laminates, and brass detailing.',
  },
];
