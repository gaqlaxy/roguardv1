export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  capacity: string;
  filtrationStages: number;
  isFeatured: boolean;
  warranty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export type BlogContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export interface ServicePlan {
  id: string;
  title: string;
  price: number;
  period: string; // e.g., "per visit", "per year"
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
}

export type ProductViewMode = 'HOME' | 'ALL_PRODUCTS';
