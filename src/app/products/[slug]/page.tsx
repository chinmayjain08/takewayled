import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/types/product';
import ProductDetailInteractive from '@/components/ProductDetailInteractive';
import { PRODUCT_VARIANTS } from '@/data/productVariants';

export const revalidate = 30;

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    let { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!data) {
      const aliasMap: Record<string, string> = {
        'takeway-mini-solar-street-light-series': 'takeway-mini-solar-street-light-9w',
        'takeway-aero-series-solar-street-light': 'takeway-aero-series-solar-street-light-35w',
        'takeway-aero-plus-solar-street-light': 'takeway-aero-plus-solar-street-light-35w',
        'takeway-king-series-solar-street-light': 'takeway-king-series-solar-street-light-45w',
        'takeway-optical-lens-solar-street-light': 'takeway-optical-lens-solar-street-light-35w',
        'takeway-space-series-solar-street-light': 'takeway-space-series-solar-street-light-35w',
        'takeway-single-body-solar-street-light': 'takeway-single-body-solar-street-light-20w',
        'takeway-double-body-solar-street-light': 'takeway-double-body-solar-street-light-25w',
        'takeway-star-series-solar-street-light': 'takeway-star-series-solar-street-light-15w',
        'takeway-lens-solar-flood-light': 'takeway-lens-solar-flood-light-30w',
        'takeway-sky-light-solar-floodlight': 'takeway-sky-light-solar-floodlight-30w',
        'takeway-foldable-solar-flood-light': 'takeway-foldable-solar-flood-light-15w',
        'takeway-portable-solar-camping-light': 'takeway-portable-solar-camping-light-100w',
        'takeway-metal-body-solar-inverter-200w': 'takeway-metal-body-solar-inverter-600w',
        'takeway-metal-body-solar-inverter-300w': 'takeway-metal-body-solar-inverter-600w',
        'takeway-metal-body-solar-inverter-series': 'takeway-metal-body-solar-inverter-600w',
        'takeway-abs-solar-inverter-600w': 'takeway-abs-solar-inverter-1200w',
        'takeway-abs-solar-inverter-series': 'takeway-abs-solar-inverter-1200w',
        'takeway-4g-single-lens-solar-cctv-camera': 'takeway-4g-dual-lens-solar-cctv-camera',
        'takeway-solar-cctv-3real-zoom-camera': 'takeway-solar-cctv-5real-zoom-camera',
        'takeway-semi-integrated-solar-street-light-30w': 'takeway-semi-integrated-solar-street-light-50w',
      };
      if (aliasMap[slug]) {
        const res = await supabase.from('products').select('*').eq('slug', aliasMap[slug]).single();
        data = res.data;
      }
    }

    if (!data) {
      return null;
    }
    return data;
  } catch (err) {
    return null;
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const variants = PRODUCT_VARIANTS[product.slug] || [];

  return <ProductDetailInteractive product={product} variants={variants} />;
}
