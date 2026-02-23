import { Product, Testimonial, BlogPost, ServicePlan } from './types';

export const COMPANY_PHONE = "919150236680"; // Example International Format
export const COMPANY_EMAIL = "contact@shamaqua.com";
export const WHATSAPP_MESSAGE_PRE = "Hello ShamAqua, I am interested in: ";

const INR_FORMAT = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

export const formatPrice = (value: number) => INR_FORMAT.format(value);

export const SERVICE_PLANS: ServicePlan[] = [
  {
    id: 's1',
    title: 'General Service',
    price: 399,
    period: 'per visit',
    description: 'Complete check-up and cleaning of your RO system. Recommended every 6 months.',
    features: [
      'Filter Cleaning',
      'TDS Check & Adjustment',
      'Leakage Check',
      'Electrical Parts Check',
      'Membrane Flushing'
    ],
    isPopular: false,
    buttonText: 'Book Service'
  },
  {
    id: 's2',
    title: 'Silver AMC Plan',
    price: 2499,
    period: 'per year',
    description: 'Annual maintenance coverage for peace of mind. Covers all labour charges.',
    features: [
      '2 Preventive Maintenance Services',
      'Unlimited Breakdown Calls',
      'No Labour Charges',
      'Filter Discount (10%)',
      'Priority Support'
    ],
    isPopular: true,
    buttonText: 'Get AMC Now'
  },
  {
    id: 's3',
    title: 'Gold AMC Plan',
    price: 4999,
    period: 'per year',
    description: 'Comprehensive coverage including all filters and spares. Zero hidden costs.',
    features: [
      'Unlimited Maintenance Visits',
      'Free Filter Changes (Sediment+Carbon)',
      'Free Membrane Replacement (1/yr)',
      'Spare Parts Included',
      'Digital Health Report'
    ],
    isPopular: false,
    buttonText: 'Go Premium'
  },
  {
    id: 's4',
    title: 'Installation / Shift',
    price: 599,
    period: 'one time',
    description: 'Professional installation or uninstallation when you move houses.',
    features: [
      'Professional Mounting',
      'Inlet/Outlet Connection',
      'Leakage Testing',
      'Demonstration',
      '30-Day Service Warranty'
    ],
    isPopular: false,
    buttonText: 'Book Expert'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aqua Purosis',
    price: 12999,
    originalPrice: 15999,
    description: 'Advanced RO+UV+MTDS technology suitable for all water sources. Ensures sweet tasting water.',
    features: ['8-Stage Filtration', 'Active Copper Technology', '7L Storage Tank', 'Smart LED Indicators'],
    image: '/assets/Purosis.jpeg',
    capacity: '7 Liters',
    filtrationStages: 8,
    isFeatured: true,
    warranty: '1 Year Comprehensive + 2 Years Service'
  },
  {
    id: 'p2',
    name: 'Aqua Water PLA',
    price: 9499,
    originalPrice: 11999,
    description: 'Compact design with mineral enhancer. Perfect for small families and municipal water.',
    features: ['RO + UF Purification', 'Mineral Guard', 'Energy Saving Mode', 'Compact Wall Mount'],
    image: '/assets/Water_PLA.jpeg',
    capacity: '6 Liters',
    filtrationStages: 6,
    isFeatured: true,
    warranty: '1 Year Manufacturer Warranty'
  },
  {
    id: 'p3',
    name: 'Aqua Innovica',
    price: 18499,
    originalPrice: 22000,
    description: 'Premium alkaline water purifier that maintains pH balance for better health benefits.',
    features: ['Alkaline Cartridge', 'Zero Water Wastage Tech', 'Hot & Cold Water Dispensing', 'Child Lock'],
    image: '/assets/Aqua_Innovica.jpeg',
    capacity: '10 Liters',
    filtrationStages: 9,
    isFeatured: true,
    warranty: '2 Years Comprehensive'
  },
  {
    id: 'p4',
    name: 'Aqua Jade',
    price: 6999,
    description: 'Reliable RO purification for budget-conscious buyers without compromising safety.',
    features: ['5-Stage RO', 'Auto Shut-off', 'Food Grade Plastic', 'High Purification Rate'],
    image: '/assets/Aqua_Jade.jpeg',
    capacity: '8 Liters',
    filtrationStages: 5,
    isFeatured: false,
    warranty: '1 Year Standard Warranty'
  },
  {
    id: 'p5',
    name: 'Aqua Magna',
    price: 24999,
    description: 'Heavy duty purifier designed for offices, shops, and large families.',
    features: ['High Duty Membrane', '25L/Hour Flow Rate', 'Sturdy Steel Body', 'Pressure Gauge'],
    image: '/assets/Aqua_Magna.jpeg',
    capacity: '25 Liters',
    filtrationStages: 5,
    isFeatured: false,
    warranty: '1 Year On-Site Warranty'
  },
  {
    id: 'p6',
    name: 'Aqua Nine',
    price: 21999,
    description: 'Smart purifier connected to your phone. Tracks filter life and water quality in real-time.',
    features: ['App Connectivity', 'Real-time TDS Monitoring', 'Touch Interface', 'Service Alerts'],
    image: '/assets/Aqua_Nine.jpeg',
    capacity: '8.5 Liters',
    filtrationStages: 7,
    isFeatured: false,
    warranty: '2 Years Smart Care Warranty'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The installation was quick and the water tastes amazing. The service team is very responsive.',
    rating: 5,
    image: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Raj Patel',
    role: 'Restaurant Owner',
    content: 'We use the Commercial Master for our kitchen. It handles the load perfectly. Highly recommended.',
    rating: 5,
    image: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Emily Davis',
    role: 'Mother of two',
    content: 'Peace of mind knowing my kids are drinking safe water. The maintenance plan is very affordable.',
    rating: 4,
    image: 'https://picsum.photos/100/100?random=12'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'RO Maintenance Timeline: What to Check Monthly, Replace Yearly',
    excerpt: 'A simple schedule to keep your RO water purifier running efficiently and safely.',
    date: 'Jul 29, 2025',
    author: 'Service Desk',
    image: 'https://images.unsplash.com/photo-1546552202-b2f5670845cc?auto=format&fit=crop&q=80&w=800',
    tags: ['Maintenance', 'Schedule'],
    content: [
      {
        type: 'p',
        text: 'RO systems are reliable, but they work best when you follow a simple maintenance rhythm. A little routine care protects water quality, reduces breakdowns, and extends the life of filters and membranes.'
      },
      {
        type: 'p',
        text: 'Monthly: do a quick 5‑minute check. Look under the sink or cabinet for leaks, listen for unusual pump noise, and taste the water. These small checks often catch issues early.'
      },
      {
        type: 'p',
        text: 'Every 6–12 months: replace pre‑filters and post‑filters based on usage and source water quality. If your water starts tasting flat or the flow slows down, don’t wait for the full interval.'
      },
      {
        type: 'p',
        text: 'Annually: schedule a full service that includes cleaning, sanitization, TDS testing, and leak checks. This is especially important for families with high daily usage.'
      },
      {
        type: 'p',
        text: 'Every 2–3 years: most RO membranes need replacement on this cadence, but confirm with TDS readings and service feedback rather than time alone.'
      }
    ]
  },
  {
    id: 'b2',
    title: 'RO vs UV vs UF: A Practical Buyer’s Guide',
    excerpt: 'How to choose the right purifier based on water source, TDS, and household needs.',
    date: 'Sep 23, 2025',
    author: 'Product Team',
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&q=80&w=800',
    tags: ['Buying Guide', 'Technology'],
    content: [
      {
        type: 'p',
        text: 'Choosing a purifier starts with your water source. Municipal water usually has lower TDS but can carry microbes. Borewell or tanker water often has higher TDS and dissolved salts.'
      },
      { type: 'h3', text: 'RO (Reverse Osmosis)' },
      {
        type: 'p',
        text: 'Best for high‑TDS water and areas with dissolved salts or heavy metals. RO removes dissolved impurities but needs electricity and produces wastewater.'
      },
      { type: 'h3', text: 'UV (Ultraviolet)' },
      {
        type: 'p',
        text: 'Kills bacteria and viruses, but does not remove dissolved solids. Good for low‑TDS municipal water where microbes are the main concern.'
      },
      { type: 'h3', text: 'UF (Ultra Filtration)' },
      {
        type: 'p',
        text: 'Works without electricity and removes bacteria and cysts, but not dissolved salts. Ideal where water is clear but microbial safety is uncertain.'
      },
      {
        type: 'p',
        text: 'In many homes, a combined RO + UV setup offers broad protection: RO handles dissolved solids while UV adds a safety layer against microbes.'
      }
    ]
  },
  {
    id: 'b3',
    title: 'Signs Your RO Needs Service: Don’t Ignore These Warnings',
    excerpt: 'Taste changes, slow flow, and noisy pumps are early signs it’s time for maintenance.',
    date: 'Aug 10, 2025',
    author: 'Service Desk',
    image: 'https://images.unsplash.com/photo-1621932953986-15fcf0847135?auto=format&fit=crop&q=80&w=800',
    tags: ['Maintenance', 'Troubleshooting'],
    content: [
      {
        type: 'p',
        text: 'Most RO problems show up slowly. Catching them early keeps your water safe and avoids larger repair bills.'
      },
      {
        type: 'p',
        text: 'Taste or odor changes are the most common warning. If water starts tasting metallic or smells off, filters are likely overdue.'
      },
      {
        type: 'p',
        text: 'Slow flow or reduced pressure often points to clogged pre‑filters or a stressed membrane. If flow drops suddenly, book a service quickly.'
      },
      {
        type: 'p',
        text: 'Other signs include unusual pump noise, visible particles in water, or the filter‑change indicator staying on. Even if water looks fine, schedule service if it has been 6–12 months since the last check.'
      }
    ]
  }
];
