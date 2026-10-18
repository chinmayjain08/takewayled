import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminSupabase } from '@/lib/supabaseServer';
import { Product, CatalogFile, Rfq } from '@/types/product';
import AdminDashboard from '@/components/admin/AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = cookies();
  const session = cookieStore.get('admin_session');

  if (!session || session.value !== 'authenticated_takeway_admin') {
    redirect('/admin/login');
  }

  const supabase = getAdminSupabase();

  // 1. Fetch products
  const { data: productsData, error: prodErr } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (prodErr) {
    console.error('Error fetching admin products:', prodErr);
  }

  // 2. Fetch catalogs from bucket
  const { data: catalogsData, error: catErr } = await supabase.storage
    .from('catalog-pdfs')
    .list('', {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    });

  if (catErr) {
    console.error('Error listing catalog-pdfs:', catErr);
  }

  const catalogs: CatalogFile[] = (catalogsData || [])
    .filter((file) => file.name !== '.emptyFolderPlaceholder')
    .map((file) => {
      const { data: urlData } = supabase.storage
        .from('catalog-pdfs')
        .getPublicUrl(file.name);

      return {
        name: file.name,
        id: file.id,
        created_at: file.created_at,
        updated_at: file.updated_at,
        metadata: file.metadata,
        publicUrl: urlData.publicUrl,
      };
    });

  // 3. Fetch RFQs / Inquiries
  const { data: rfqsData, error: rfqErr } = await supabase
    .from('rfqs')
    .select('*')
    .order('created_at', { ascending: false });

  if (rfqErr) {
    console.error('Error fetching RFQs:', rfqErr);
  }

  return (
    <AdminDashboard
      initialProducts={(productsData as Product[]) || []}
      initialCatalogs={catalogs}
      initialRfqs={(rfqsData as Rfq[]) || []}
    />
  );
}
