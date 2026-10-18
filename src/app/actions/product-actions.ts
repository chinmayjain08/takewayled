'use server';

import { revalidatePath } from 'next/cache';
import { getAdminSupabase } from '@/lib/supabaseServer';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export async function createProduct(formData: FormData) {
  try {
    const supabase = getAdminSupabase();

    const name = formData.get('name') as string;
    let slug = (formData.get('slug') as string) || slugify(name);
    const category = formData.get('category') as string;
    const wattage = formData.get('wattage') as string;
    const lumens = formData.get('lumens') as string;
    const ip_rating = formData.get('ip_rating') as string;
    const description = formData.get('description') as string;
    const is_featured = formData.get('is_featured') === 'true' || formData.get('is_featured') === 'on';

    let imageUrl = (formData.get('image_url') as string) || '';
    const imageFile = formData.get('image_file') as File | null;

    if (imageFile && imageFile.size > 0) {
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const cleanFileName = `${slug}-${Date.now()}.${ext}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('product-images')
        .upload(cleanFileName, buffer, {
          contentType: imageFile.type || 'image/jpeg',
          upsert: true,
        });

      if (uploadErr) {
        throw new Error(`Image upload failed: ${uploadErr.message}`);
      }

      const { data: urlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(cleanFileName);

      imageUrl = urlData.publicUrl;
    }

    let catalogPdfUrl = (formData.get('catalog_pdf_url') as string) || null;
    const pdfFile = formData.get('pdf_file') as File | null;

    if (pdfFile && pdfFile.size > 0) {
      const cleanPdfName = `${slug}-catalog-${Date.now()}.pdf`;
      const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

      const { error: pdfUploadErr } = await supabase.storage
        .from('catalog-pdfs')
        .upload(cleanPdfName, pdfBuffer, {
          contentType: 'application/pdf',
          upsert: true,
        });

      if (pdfUploadErr) {
        throw new Error(`PDF upload failed: ${pdfUploadErr.message}`);
      }

      const { data: pdfUrlData } = supabase.storage
        .from('catalog-pdfs')
        .getPublicUrl(cleanPdfName);

      catalogPdfUrl = pdfUrlData.publicUrl;
    }

    const { data, error } = await supabase.from('products').insert({
      name,
      slug,
      category,
      wattage,
      lumens,
      ip_rating,
      description,
      image_url: imageUrl || 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      catalog_pdf_url: catalogPdfUrl,
      is_featured,
    }).select().single();

    if (error) {
      throw new Error(`Database insert error: ${error.message}`);
    }

    revalidatePath('/');
    revalidatePath('/products');
    revalidatePath(`/products/${slug}`);
    revalidatePath('/catalogs');
    revalidatePath('/admin');

    return { success: true, product: data };
  } catch (error: any) {
    console.error('Error creating product:', error);
    return { success: false, error: error.message || 'Failed to create product' };
  }
}

export async function updateProduct(id: string, formData: FormData) {
  try {
    const supabase = getAdminSupabase();

    const name = formData.get('name') as string;
    let slug = (formData.get('slug') as string) || slugify(name);
    const category = formData.get('category') as string;
    const wattage = formData.get('wattage') as string;
    const lumens = formData.get('lumens') as string;
    const ip_rating = formData.get('ip_rating') as string;
    const description = formData.get('description') as string;
    const is_featured = formData.get('is_featured') === 'true' || formData.get('is_featured') === 'on';

    let imageUrl = formData.get('image_url') as string;
    const imageFile = formData.get('image_file') as File | null;

    if (imageFile && imageFile.size > 0) {
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const cleanFileName = `${slug}-${Date.now()}.${ext}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const { error: uploadErr } = await supabase.storage
        .from('product-images')
        .upload(cleanFileName, buffer, {
          contentType: imageFile.type || 'image/jpeg',
          upsert: true,
        });

      if (uploadErr) {
        throw new Error(`Image upload failed: ${uploadErr.message}`);
      }

      const { data: urlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(cleanFileName);

      imageUrl = urlData.publicUrl;
    }

    let catalogPdfUrl = (formData.get('catalog_pdf_url') as string) || null;
    const pdfFile = formData.get('pdf_file') as File | null;

    if (pdfFile && pdfFile.size > 0) {
      const cleanPdfName = `${slug}-catalog-${Date.now()}.pdf`;
      const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());

      const { error: pdfUploadErr } = await supabase.storage
        .from('catalog-pdfs')
        .upload(cleanPdfName, pdfBuffer, {
          contentType: 'application/pdf',
          upsert: true,
        });

      if (pdfUploadErr) {
        throw new Error(`PDF upload failed: ${pdfUploadErr.message}`);
      }

      const { data: pdfUrlData } = supabase.storage
        .from('catalog-pdfs')
        .getPublicUrl(cleanPdfName);

      catalogPdfUrl = pdfUrlData.publicUrl;
    }

    const updatePayload: any = {
      name,
      slug,
      category,
      wattage,
      lumens,
      ip_rating,
      description,
      is_featured,
    };

    if (imageUrl) {
      updatePayload.image_url = imageUrl;
    }
    if (catalogPdfUrl !== undefined) {
      updatePayload.catalog_pdf_url = catalogPdfUrl;
    }

    const { data, error } = await supabase
      .from('products')
      .update(updatePayload)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Database update error: ${error.message}`);
    }

    revalidatePath('/');
    revalidatePath('/products');
    revalidatePath(`/products/${slug}`);
    revalidatePath('/catalogs');
    revalidatePath('/admin');

    return { success: true, product: data };
  } catch (error: any) {
    console.error('Error updating product:', error);
    return { success: false, error: error.message || 'Failed to update product' };
  }
}

export async function deleteProduct(id: string) {
  try {
    const supabase = getAdminSupabase();

    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
      throw new Error(`Database delete error: ${error.message}`);
    }

    revalidatePath('/');
    revalidatePath('/products');
    revalidatePath('/catalogs');
    revalidatePath('/admin');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return { success: false, error: error.message || 'Failed to delete product' };
  }
}

export async function uploadCatalogPdf(formData: FormData) {
  try {
    const supabase = getAdminSupabase();
    const pdfFile = formData.get('pdf_file') as File | null;
    const title = (formData.get('title') as string) || 'Catalog';

    if (!pdfFile || pdfFile.size === 0) {
      throw new Error('Please select a valid PDF file.');
    }

    const safeTitle = slugify(title);
    const fileName = `${safeTitle}-${Date.now()}.pdf`;
    const buffer = Buffer.from(await pdfFile.arrayBuffer());

    const { error } = await supabase.storage
      .from('catalog-pdfs')
      .upload(fileName, buffer, {
        contentType: 'application/pdf',
        upsert: true,
      });

    if (error) {
      throw new Error(`Storage upload error: ${error.message}`);
    }

    const { data: urlData } = supabase.storage
      .from('catalog-pdfs')
      .getPublicUrl(fileName);

    revalidatePath('/catalogs');
    revalidatePath('/admin');

    return { success: true, fileName, publicUrl: urlData.publicUrl };
  } catch (error: any) {
    console.error('Error uploading catalog PDF:', error);
    return { success: false, error: error.message || 'Failed to upload PDF' };
  }
}

export async function deleteCatalogPdf(fileName: string) {
  try {
    const supabase = getAdminSupabase();

    const { error } = await supabase.storage.from('catalog-pdfs').remove([fileName]);

    if (error) {
      throw new Error(`Storage delete error: ${error.message}`);
    }

    revalidatePath('/catalogs');
    revalidatePath('/admin');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting catalog PDF:', error);
    return { success: false, error: error.message || 'Failed to delete PDF' };
  }
}

export async function submitRfq(formData: FormData) {
  try {
    const supabase = getAdminSupabase();

    const company_name = (formData.get('company_name') as string)?.trim();
    const contact_name = (formData.get('contact_name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();
    const category = (formData.get('category') as string)?.trim();
    const quantity = (formData.get('quantity') as string)?.trim();
    const project_details = (formData.get('project_details') as string)?.trim() || '';

    if (!company_name || !contact_name || !email || !phone) {
      throw new Error('Please fill in all required fields.');
    }

    const { data, error } = await supabase
      .from('rfqs')
      .insert({
        company_name,
        contact_name,
        email,
        phone,
        category,
        quantity,
        project_details,
        status: 'New',
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    // Build pre-filled WhatsApp message
    const msg = `*New B2B RFQ Inquiry (TakewayLED)*\n` +
      `*Company:* ${company_name}\n` +
      `*Contact:* ${contact_name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Category:* ${category}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Project Specs:* ${project_details || 'N/A'}`;

    const whatsappUrl = `https://wa.me/918766616660?text=${encodeURIComponent(msg)}`;

    revalidatePath('/admin');

    return { success: true, rfq: data, whatsappUrl };
  } catch (error: any) {
    console.error('Error in submitRfq:', error);
    return { success: false, error: error.message || 'Failed to submit RFQ' };
  }
}

export async function updateRfqStatus(id: string, status: string) {
  try {
    const supabase = getAdminSupabase();
    const { error } = await supabase.from('rfqs').update({ status }).eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Error updating RFQ status:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteRfq(id: string) {
  try {
    const supabase = getAdminSupabase();
    const { error } = await supabase.from('rfqs').delete().eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting RFQ:', error);
    return { success: false, error: error.message };
  }
}
