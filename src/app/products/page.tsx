import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Sliders, Zap, ShieldCheck } from 'lucide-react';

export const revalidate = 30; // ISR cache revalidation

interface ProductsPageProps {
  searchParams: {
    category?: string;
    search?: string;
  };
}

async function getProducts(category?: string, search?: string): Promise<Product[]> {
  try {
    let query = supabase.from('products').select('*').order('created_at', { ascending: false });

    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.ilike('name', `%${search}%`);
    }

    const { data, error } = await query;
    if (error) {
      console.error('Error fetching products:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Database connection error in getProducts:', err);
    return [];
  }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const currentCategory = searchParams.category || '';
  const searchQuery = searchParams.search || '';
  const products = await getProducts(currentCategory, searchQuery);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          <span>Commercial & Industrial Catalog</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
              {currentCategory ? `${currentCategory} Luminaires` : 'All Heavy-Duty Luminaires'}
            </h1>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              Factory direct commercial lighting fixtures engineered with Grade-A LED arrays, Mean Well / Inventronics drivers, and IP66/IP67 rated housings.
            </p>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
            Showing <strong className="text-cyan-400 mx-1">{products.length}</strong> Models Available
          </div>
        </div>

        {/* Filters */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          <CategoryFilter currentCategory={currentCategory} />

          {/* Quick Filter Info */}
          <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
            <span className="inline-flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 mr-1" />
              100% Tested Prior to Shipment
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-16 text-center rounded-2xl border border-zinc-800 space-y-4">
          <Sliders className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-lg font-mono font-bold text-white">No Luminaires Found</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            No products match the selected criteria. Try selecting another category or view all fixtures.
          </p>
          <a
            href="/products"
            className="inline-block px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300"
          >
            Reset Filters
          </a>
        </div>
      )}
    </div>
  );
}
