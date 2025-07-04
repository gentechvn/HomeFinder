export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  views?: number;
  type: 'apartment' | 'house' | 'land' | 'commercial';
  images: string[];
  description: string;
  features: string[];
  isFeatured: boolean;
  createdAt: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface SearchFilters {
  location?: string;
  type?: string;
  priceRange?: string;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
  bathrooms?: number;
}
