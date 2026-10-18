export interface Product {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  category:
    | 'Commercial Floodlights'
    | 'Industrial High Bays'
    | 'Roadway & Street Lights'
    | 'Solar Integrated Lighting'
    | 'Architectural & Facade'
    | 'Underwater & Landscape'
    | string;
  wattage: string;
  lumens: string;
  ip_rating: string;
  description: string;
  image_url: string;
  catalog_pdf_url: string | null;
  is_featured: boolean;
}

export type ProductInput = Omit<Product, 'id' | 'created_at'>;

export interface CatalogFile {
  name: string;
  id?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  last_accessed_at?: string | null;
  metadata?: {
    size?: number;
    mimetype?: string;
  } | any;
  publicUrl: string;
}

export interface Rfq {
  id: string;
  created_at: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  category: string;
  quantity: string;
  project_details?: string | null;
  status: 'New' | 'In Progress' | 'Quoted' | 'Closed' | string;
}
