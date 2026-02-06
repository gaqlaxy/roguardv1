import { Product, Testimonial, BlogPost } from './types';

export const COMPANY_PHONE = "919876543210"; // Example International Format
export const WHATSAPP_MESSAGE_PRE = "Hello ROGuard, I am interested in: ";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'AquaGuard Elite Pro',
    price: 12999,
    originalPrice: 15999,
    description: 'Advanced RO+UV+MTDS technology suitable for all water sources. Ensures sweet tasting water.',
    features: ['8-Stage Filtration', 'Active Copper Technology', '7L Storage Tank', 'Smart LED Indicators'],
    image: 'https://picsum.photos/400/400?random=1',
    capacity: '7 Liters',
    filtrationStages: 8,
    isFeatured: true,
    warranty: '1 Year Comprehensive + 2 Years Service'
  },
  {
    id: 'p2',
    name: 'PureFlow Mineral Plus',
    price: 9499,
    originalPrice: 11999,
    description: 'Compact design with mineral enhancer. Perfect for small families and municipal water.',
    features: ['RO + UF Purification', 'Mineral Guard', 'Energy Saving Mode', 'Compact Wall Mount'],
    image: 'https://picsum.photos/400/400?random=2',
    capacity: '6 Liters',
    filtrationStages: 6,
    isFeatured: true,
    warranty: '1 Year Manufacturer Warranty'
  },
  {
    id: 'p3',
    name: 'HydroMax Alkaline Series',
    price: 18499,
    originalPrice: 22000,
    description: 'Premium alkaline water purifier that maintains pH balance for better health benefits.',
    features: ['Alkaline Cartridge', 'Zero Water Wastage Tech', 'Hot & Cold Water Dispensing', 'Child Lock'],
    image: 'https://picsum.photos/400/400?random=3',
    capacity: '10 Liters',
    filtrationStages: 9,
    isFeatured: true,
    warranty: '2 Years Comprehensive'
  },
  {
    id: 'p4',
    name: 'EcoPure Basic',
    price: 6999,
    description: 'Reliable RO purification for budget-conscious buyers without compromising safety.',
    features: ['5-Stage RO', 'Auto Shut-off', 'Food Grade Plastic', 'High Purification Rate'],
    image: 'https://picsum.photos/400/400?random=4',
    capacity: '8 Liters',
    filtrationStages: 5,
    isFeatured: false,
    warranty: '1 Year Standard Warranty'
  },
  {
    id: 'p5',
    name: 'Commercial Master 25L',
    price: 24999,
    description: 'Heavy duty purifier designed for offices, shops, and large families.',
    features: ['High Duty Membrane', '25L/Hour Flow Rate', 'Sturdy Steel Body', 'Pressure Gauge'],
    image: 'https://picsum.photos/400/400?random=5',
    capacity: '25 Liters',
    filtrationStages: 5,
    isFeatured: false,
    warranty: '1 Year On-Site Warranty'
  },
  {
    id: 'p6',
    name: 'SmartSense IoT Purifier',
    price: 21999,
    description: 'Smart purifier connected to your phone. Tracks filter life and water quality in real-time.',
    features: ['App Connectivity', 'Real-time TDS Monitoring', 'Touch Interface', 'Service Alerts'],
    image: 'https://picsum.photos/400/400?random=6',
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
    title: '5 Signs You Need to Change Your RO Filter Immediately',
    excerpt: 'Is your water tasting funny? Learn the key indicators that suggest your purifier needs maintenance.',
    date: 'Oct 12, 2023',
    author: 'Rahul Verma, Technician',
    image: 'https://images.unsplash.com/photo-1546552202-b2f5670845cc?auto=format&fit=crop&q=80&w=800',
    tags: ['Maintenance', 'Health'],
    content: `
      <p>Drinking water is essential for health, but drinking contaminated water from a faulty filter can be dangerous. Here are the top 5 signs your RO filter needs a change:</p>
      <ul class="list-disc pl-5 my-4 space-y-2">
        <li><strong>Bad Taste or Odor:</strong> If your water smells like chlorine or has a metallic taste, the carbon filter is likely exhausted.</li>
        <li><strong>Slow Water Flow:</strong> A clogged membrane often reduces water pressure significantly.</li>
        <li><strong>TDS Levels Increasing:</strong> Use a TDS meter. If the reading is creeping up, your membrane is failing.</li>
        <li><strong>Filter Change Alarm:</strong> Modern purifiers have indicators. Don't ignore them!</li>
        <li><strong>Over 12 Months:</strong> Even without symptoms, filters should be changed annually for safety.</li>
      </ul>
      <p>Regular maintenance ensures you and your family are always protected from waterborne diseases.</p>
    `
  },
  {
    id: 'b2',
    title: 'RO vs. UV vs. UF: Which Purifier is Right for You?',
    excerpt: 'Confused by the acronyms? We break down the differences to help you make the right choice for your home.',
    date: 'Nov 05, 2023',
    author: 'Dr. Anita Roy',
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&q=80&w=800',
    tags: ['Buying Guide', 'Technology'],
    content: `
      <p>Choosing a water purifier depends largely on the source of your water (Municipal, Borewell, or Tanker). Here is a quick guide:</p>
      <h3 class="text-lg font-bold mt-4">RO (Reverse Osmosis)</h3>
      <p>Best for high TDS water (above 500 ppm). It removes heavy metals, salts, and fluoride. However, it requires electricity and wastes some water.</p>
      <h3 class="text-lg font-bold mt-4">UV (Ultraviolet)</h3>
      <p>Kills bacteria and viruses but does not remove dissolved solids. Good for low TDS municipal water.</p>
      <h3 class="text-lg font-bold mt-4">UF (Ultra Filtration)</h3>
      <p>Works without electricity. Removes bacteria and cysts but not dissolved salts. Good for areas with clean water but uncertain microbial safety.</p>
      <p class="mt-4">For most Indian households with mixed water supply, a combination of RO + UV is the safest bet.</p>
    `
  },
  {
    id: 'b3',
    title: 'The Truth About Alkaline Water: Hype or Health?',
    excerpt: 'Alkaline water is the new trend. Discover the real health benefits and if it is worth the extra cost.',
    date: 'Dec 01, 2023',
    author: 'Editorial Team',
    image: 'https://images.unsplash.com/photo-1621932953986-15fcf0847135?auto=format&fit=crop&q=80&w=800',
    tags: ['Health', 'Lifestyle'],
    content: `
      <p>Standard RO water tends to be slightly acidic because the purification process removes minerals. Alkaline purifiers add minerals like Calcium and Magnesium back into the water, raising the pH level to 8 or 8.5.</p>
      <p class="mt-2"><strong>Benefits claimed:</strong></p>
      <ul class="list-disc pl-5 my-2">
        <li>Neutralizes acid in the bloodstream.</li>
        <li>Improves metabolism.</li>
        <li>Better hydration due to smaller molecular clusters.</li>
      </ul>
      <p>While scientific consensus is still evolving, many users report better digestion and taste. If you suffer from acidity, an Alkaline RO might be a worthy investment.</p>
    `
  }
];