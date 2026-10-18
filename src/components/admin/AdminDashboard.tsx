'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product, CatalogFile, Rfq } from '@/types/product';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  uploadCatalogPdf,
  deleteCatalogPdf,
  updateRfqStatus,
  deleteRfq,
} from '@/app/actions/product-actions';
import {
  Plus,
  Trash2,
  Edit2,
  Upload,
  FileText,
  LogOut,
  X,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Search,
  Zap,
  Image as ImageIcon,
  Inbox,
  Phone,
  Mail,
  Eye,
  MessageCircle,
  Clock,
  Filter
} from 'lucide-react';

interface AdminDashboardProps {
  initialProducts: Product[];
  initialCatalogs: CatalogFile[];
  initialRfqs: Rfq[];
}

export default function AdminDashboard({
  initialProducts,
  initialCatalogs,
  initialRfqs,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'catalogs' | 'rfqs'>('rfqs');
  const [searchTerm, setSearchTerm] = useState('');
  const [rfqFilterStatus, setRfqFilterStatus] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRfqModal, setSelectedRfqModal] = useState<Rfq | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Catalog uploader state
  const [catalogTitle, setCatalogTitle] = useState('');
  const [catalogFile, setCatalogFile] = useState<File | null>(null);
  const [catalogLoading, setCatalogLoading] = useState(false);

  // Image preview state for the modal
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setPreviewImage(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setPreviewImage(product.image_url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setPreviewImage(null);
  };

  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);

    let res;
    if (editingProduct) {
      res = await updateProduct(editingProduct.id, formData);
    } else {
      res = await createProduct(formData);
    }

    setLoading(false);

    if (res.success) {
      setMessage({
        type: 'success',
        text: editingProduct
          ? 'Product updated successfully!'
          : 'New product published to catalog successfully!',
      });
      closeModal();
      router.refresh();
    } else {
      setMessage({ type: 'error', text: res.error || 'Operation failed' });
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${name}" from the database?`)) {
      return;
    }
    setLoading(true);
    const res = await deleteProduct(id);
    setLoading(false);

    if (res.success) {
      setMessage({ type: 'success', text: `Product "${name}" deleted.` });
      router.refresh();
    } else {
      setMessage({ type: 'error', text: res.error || 'Failed to delete' });
    }
  };

  const handleCatalogUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!catalogFile) {
      alert('Please select a PDF file first');
      return;
    }

    setCatalogLoading(true);
    const formData = new FormData();
    formData.append('pdf_file', catalogFile);
    formData.append('title', catalogTitle || catalogFile.name);

    const res = await uploadCatalogPdf(formData);
    setCatalogLoading(false);

    if (res.success) {
      setMessage({ type: 'success', text: 'PDF catalog uploaded to CDN successfully!' });
      setCatalogTitle('');
      setCatalogFile(null);
      const fileInput = document.getElementById('catalog_pdf_input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      router.refresh();
    } else {
      setMessage({ type: 'error', text: res.error || 'Failed to upload PDF' });
    }
  };

  const handleDeleteCatalog = async (fileName: string) => {
    if (!confirm(`Are you sure you want to delete catalog file "${fileName}"?`)) {
      return;
    }
    const res = await deleteCatalogPdf(fileName);
    if (res.success) {
      setMessage({ type: 'success', text: `Deleted "${fileName}"` });
      router.refresh();
    } else {
      setMessage({ type: 'error', text: res.error || 'Delete failed' });
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    const res = await updateRfqStatus(id, newStatus);
    if (res.success) {
      setMessage({ type: 'success', text: `RFQ status updated to "${newStatus}"` });
      router.refresh();
    } else {
      setMessage({ type: 'error', text: 'Failed to update status' });
    }
  };

  const handleDeleteRfq = async (id: string, company: string) => {
    if (!confirm(`Delete RFQ lead from "${company}"?`)) return;
    const res = await deleteRfq(id);
    if (res.success) {
      setMessage({ type: 'success', text: `RFQ lead deleted.` });
      router.refresh();
    } else {
      setMessage({ type: 'error', text: 'Delete failed' });
    }
  };

  const filteredProducts = initialProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.wattage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRfqs = initialRfqs.filter((r) => {
    const matchesSearch =
      r.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      rfqFilterStatus === 'all' || r.status.toLowerCase() === rfqFilterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const newRfqsCount = initialRfqs.filter((r) => r.status === 'New').length;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Authenticated Management Session</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight mt-1">
            TakewayLED Enterprise Console
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5 mr-1.5" />
          Log Out
        </button>
      </div>

      {/* Global Alerts */}
      {message && (
        <div
          className={`p-4 rounded-xl flex items-center justify-between text-xs font-mono border ${
            message.type === 'success'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
              : 'bg-red-950/40 border-red-500/40 text-red-300'
          }`}
        >
          <div className="flex items-center space-x-2">
            {message.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-400" />
            )}
            <span>{message.text}</span>
          </div>
          <button onClick={() => setMessage(null)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-zinc-800 space-x-6">
        <button
          onClick={() => {
            setActiveTab('rfqs');
            setSearchTerm('');
          }}
          className={`pb-3 text-xs font-mono font-bold tracking-wider flex items-center transition-colors border-b-2 ${
            activeTab === 'rfqs'
              ? 'border-emerald-400 text-emerald-400'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          <Inbox className="w-4 h-4 mr-2" />
          Incoming RFQs & Leads ({initialRfqs.length})
          {newRfqsCount > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500 text-zinc-950 font-bold animate-pulse">
              {newRfqsCount} New
            </span>
          )}
        </button>

        <button
          onClick={() => {
            setActiveTab('products');
            setSearchTerm('');
          }}
          className={`pb-3 text-xs font-mono font-bold tracking-wider flex items-center transition-colors border-b-2 ${
            activeTab === 'products'
              ? 'border-cyan-400 text-cyan-400'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4 mr-2" />
          Products Catalog ({initialProducts.length})
        </button>

        <button
          onClick={() => {
            setActiveTab('catalogs');
            setSearchTerm('');
          }}
          className={`pb-3 text-xs font-mono font-bold tracking-wider flex items-center transition-colors border-b-2 ${
            activeTab === 'catalogs'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4 mr-2" />
          PDF Catalogs & Storage ({initialCatalogs.length})
        </button>
      </div>

      {/* TAB 1: INCOMING RFQS & LEADS */}
      {activeTab === 'rfqs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search RFQ leads by company, contact, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-xs font-mono text-zinc-400">Status:</span>
              <select
                value={rfqFilterStatus}
                onChange={(e) => setRfqFilterStatus(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="all">All Statuses ({initialRfqs.length})</option>
                <option value="new">New ({initialRfqs.filter((r) => r.status === 'New').length})</option>
                <option value="in progress">In Progress</option>
                <option value="quoted">Quoted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Date / Status</th>
                    <th className="py-3 px-4">Company & Client</th>
                    <th className="py-3 px-4">Contact Channels</th>
                    <th className="py-3 px-4">Category & Quantity</th>
                    <th className="py-3 px-4">Project Specs</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  {filteredRfqs.map((rfq) => {
                    const cleanPhone = rfq.phone.replace(/[^0-9]/g, '');
                    const waText = encodeURIComponent(
                      `Hi ${rfq.contact_name}, this is TakewayLED Jaipur following up on your RFQ for ${rfq.category} (${rfq.quantity}).`
                    );
                    const waUrl = `https://wa.me/${cleanPhone}?text=${waText}`;

                    const dateStr = new Date(rfq.created_at).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    });

                    return (
                      <tr key={rfq.id} className="hover:bg-zinc-900/50 transition-colors">
                        <td className="py-3 px-4 space-y-1">
                          <div className="text-[11px] text-zinc-400">{dateStr}</div>
                          <select
                            value={rfq.status}
                            onChange={(e) => handleUpdateStatus(rfq.id, e.target.value)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-900 border focus:outline-none ${
                              rfq.status === 'New'
                                ? 'border-emerald-500 text-emerald-400'
                                : rfq.status === 'In Progress'
                                ? 'border-amber-500 text-amber-400'
                                : rfq.status === 'Quoted'
                                ? 'border-cyan-500 text-cyan-400'
                                : 'border-zinc-700 text-zinc-400'
                            }`}
                          >
                            <option value="New">● New</option>
                            <option value="In Progress">● In Progress</option>
                            <option value="Quoted">● Quoted</option>
                            <option value="Closed">● Closed</option>
                          </select>
                        </td>

                        <td className="py-3 px-4">
                          <div className="font-bold text-white text-sm">{rfq.company_name}</div>
                          <div className="text-zinc-400 mt-0.5">{rfq.contact_name}</div>
                        </td>

                        <td className="py-3 px-4 space-y-1">
                          <div className="flex items-center space-x-2">
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                              {rfq.phone}
                            </a>
                          </div>
                          <div>
                            <a
                              href={`mailto:${rfq.email}?subject=TakewayLED Quotation Proposal - ${encodeURIComponent(rfq.company_name)}`}
                              className="inline-flex items-center text-zinc-400 hover:text-cyan-400 hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                              {rfq.email}
                            </a>
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="text-cyan-300 font-bold">{rfq.category}</div>
                          <div className="text-[11px] text-amber-400 font-mono mt-0.5">
                            {rfq.quantity}
                          </div>
                        </td>

                        <td className="py-3 px-4 max-w-xs">
                          <p className="text-zinc-300 line-clamp-2 leading-relaxed">
                            {rfq.project_details || 'No additional specifications provided.'}
                          </p>
                        </td>

                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => setSelectedRfqModal(rfq)}
                              className="p-1.5 rounded-md bg-zinc-900 hover:bg-cyan-500/20 text-zinc-400 hover:text-cyan-400 border border-zinc-800 transition-colors"
                              title="View Full Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteRfq(rfq.id, rfq.company_name)}
                              className="p-1.5 rounded-md bg-zinc-900 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {filteredRfqs.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-zinc-500 font-mono">
                        No RFQ inquiries found matching the filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS INVENTORY */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search products by model, wattage, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              onClick={openAddModal}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add New Luminaire
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Luminaire Model</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Wattage</th>
                    <th className="py-3 px-4">Lumen Output</th>
                    <th className="py-3 px-4">IP Rating</th>
                    <th className="py-3 px-4">Featured</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-zinc-900/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 shrink-0">
                          <Image
                            src={p.image_url || 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=150&q=80'}
                            alt={p.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-white max-w-xs truncate">{p.name}</div>
                        <div className="text-[10px] text-zinc-400 truncate">/{p.slug}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-zinc-900 border border-zinc-700 text-cyan-400">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-amber-400 font-bold">{p.wattage}</td>
                      <td className="py-3 px-4 text-zinc-300">{p.lumens}</td>
                      <td className="py-3 px-4 text-cyan-300">{p.ip_rating}</td>
                      <td className="py-3 px-4">
                        {p.is_featured ? (
                          <span className="text-amber-400 font-bold">YES</span>
                        ) : (
                          <span className="text-zinc-600">No</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openEditModal(p)}
                            className="p-1.5 rounded-md bg-zinc-900 hover:bg-cyan-500/20 text-zinc-400 hover:text-cyan-400 border border-zinc-800 transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id, p.name)}
                            className="p-1.5 rounded-md bg-zinc-900 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 border border-zinc-800 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-zinc-500">
                        No luminaires match the filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PDF CATALOGS STORAGE MANAGER */}
      {activeTab === 'catalogs' && (
        <div className="space-y-8">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4">
            <h2 className="text-sm font-mono font-bold text-white uppercase flex items-center">
              <Upload className="w-4 h-4 mr-2 text-amber-400" />
              Upload PDF Catalog to Supabase Storage (`catalog-pdfs`)
            </h2>
            <p className="text-xs text-zinc-400">
              Uploaded files are made publicly available across our global CDN and automatically appear on the customer-facing Catalogs showcase page.
            </p>

            <form onSubmit={handleCatalogUpload} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
              <div className="sm:col-span-5">
                <label className="block text-xs font-mono text-zinc-300 mb-1">Catalog Title</label>
                <input
                  type="text"
                  placeholder="e.g. TakewayLED Commercial High Bay 2026.pdf"
                  value={catalogTitle}
                  onChange={(e) => setCatalogTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-mono text-zinc-300 mb-1">Select PDF File *</label>
                <input
                  id="catalog_pdf_input"
                  type="file"
                  accept="application/pdf"
                  required
                  onChange={(e) => setCatalogFile(e.target.files?.[0] || null)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-xs font-mono text-zinc-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[11px] file:bg-zinc-800 file:text-amber-400 hover:file:bg-zinc-700"
                />
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  disabled={catalogLoading}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs uppercase shadow-amber-glow transition-all flex items-center justify-center disabled:opacity-50"
                >
                  {catalogLoading ? 'Uploading...' : 'Upload PDF File'}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden shadow-xl">
            <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center text-xs font-mono">
              <span className="font-bold text-white uppercase">Active Files in `catalog-pdfs` Bucket</span>
              <span className="text-zinc-400">{initialCatalogs.length} Files</span>
            </div>

            <div className="divide-y divide-zinc-850">
              {initialCatalogs.map((cat) => (
                <div key={cat.name} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">{cat.name}</div>
                      <a
                        href={cat.publicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-cyan-400 hover:underline flex items-center mt-0.5"
                      >
                        {cat.publicUrl}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                    <a
                      href={cat.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDeleteCatalog(cat.name)}
                      className="p-1.5 rounded-md bg-zinc-900 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 border border-zinc-800 text-xs transition-colors"
                      title="Delete from Storage"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {initialCatalogs.length === 0 && (
                <div className="p-8 text-center text-zinc-500 text-xs font-mono">
                  No files uploaded to the `catalog-pdfs` bucket yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW FULL RFQ DETAILS MODAL */}
      {selectedRfqModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  Lead Reference #{selectedRfqModal.id.slice(0, 8).toUpperCase()}
                </span>
                <h2 className="text-xl font-mono font-bold text-white mt-1">
                  {selectedRfqModal.company_name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedRfqModal(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Contact Person:</span>
                <span className="font-bold text-white">{selectedRfqModal.contact_name}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Status:</span>
                <span className="font-bold text-emerald-400">{selectedRfqModal.status}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Category:</span>
                <span className="font-bold text-cyan-300">{selectedRfqModal.category}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Estimated Quantity:</span>
                <span className="font-bold text-amber-400">{selectedRfqModal.quantity}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-300 block">
                Technical Project Specifications & Notes:
              </span>
              <p className="text-xs font-sans text-zinc-300 leading-relaxed whitespace-pre-wrap">
                {selectedRfqModal.project_details || 'No detailed specifications submitted.'}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-zinc-800">
              <div className="text-[11px] font-mono text-zinc-500">
                Logged on {new Date(selectedRfqModal.created_at).toLocaleString()}
              </div>
              <div className="flex space-x-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${selectedRfqModal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${selectedRfqModal.contact_name}, regarding your TakewayLED RFQ for ${selectedRfqModal.category}...`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Reply on WhatsApp
                </a>
                <button
                  onClick={() => setSelectedRfqModal(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
            <div className="flex justify-between items-center p-5 sm:p-6 border-b border-zinc-800 shrink-0 bg-zinc-900">
              <h2 className="text-base sm:text-lg font-mono font-bold text-white flex items-center">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                {editingProduct ? 'Edit Luminaire Specifications' : 'Publish New Luminaire Model'}
              </h2>
              <button
                onClick={closeModal}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              id="product_form"
              onSubmit={handleProductSubmit}
              className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-xs font-mono"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-zinc-300 mb-1">Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={editingProduct?.name || ''}
                    placeholder="e.g. Titan-Pro 500W Stadium Floodlight"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Category *</label>
                  <select
                    name="category"
                    required
                    defaultValue={editingProduct?.category || 'Commercial Floodlights'}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Commercial Floodlights">Commercial Floodlights & Stadium</option>
                    <option value="Industrial High Bays">Industrial High Bays & UFO</option>
                    <option value="Roadway & Street Lights">Roadway & Street Lights (AC)</option>
                    <option value="Solar Integrated Lighting">Solar Integrated Street & Flood</option>
                    <option value="Architectural & Facade">Architectural Wall Washers & Facade</option>
                    <option value="Underwater & Landscape">Underwater Pool & Fountain Lights</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Custom Slug (Optional)</label>
                  <input
                    type="text"
                    name="slug"
                    defaultValue={editingProduct?.slug || ''}
                    placeholder="auto-generated-if-empty"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Wattage *</label>
                  <input
                    type="text"
                    name="wattage"
                    required
                    defaultValue={editingProduct?.wattage || ''}
                    placeholder="e.g. 400W"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Lumens Output *</label>
                  <input
                    type="text"
                    name="lumens"
                    required
                    defaultValue={editingProduct?.lumens || ''}
                    placeholder="e.g. 64,000 LM"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">IP Rating *</label>
                  <select
                    name="ip_rating"
                    required
                    defaultValue={editingProduct?.ip_rating || 'IP66'}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="IP65">IP65 (Dust-tight, water jets)</option>
                    <option value="IP66">IP66 (High-pressure water jets)</option>
                    <option value="IP67">IP67 (Submersible / Extreme storms)</option>
                  </select>
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center space-x-2 text-zinc-300 cursor-pointer">
                    <input
                      type="checkbox"
                      name="is_featured"
                      defaultChecked={editingProduct?.is_featured ?? false}
                      className="rounded border-zinc-700 bg-zinc-950 text-cyan-400 focus:ring-0 w-4 h-4"
                    />
                    <span>Mark as Featured Product (Homepage)</span>
                  </label>
                </div>
              </div>

              {/* Image Upload or URL */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-zinc-300 font-bold flex items-center">
                    <ImageIcon className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                    Product Image (Direct Supabase Storage Upload)
                  </label>
                  {previewImage && (
                    <span className="text-[10px] text-cyan-400">Preview active</span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {previewImage && (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-zinc-700 shrink-0">
                      <Image src={previewImage} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      name="image_file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreviewImage(URL.createObjectURL(file));
                        }
                      }}
                      className="w-full text-xs text-zinc-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[11px] file:bg-zinc-800 file:text-cyan-400 hover:file:bg-zinc-700"
                    />
                    <input
                      type="text"
                      name="image_url"
                      defaultValue={editingProduct?.image_url || ''}
                      placeholder="Or paste external image URL..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-300 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* PDF Spec Sheet (Optional) */}
              <div>
                <label className="block text-zinc-300 mb-1">
                  Optional Catalog PDF (Upload or Link)
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    name="pdf_file"
                    accept="application/pdf"
                    className="w-full text-xs text-zinc-400 file:mr-3 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[11px] file:bg-zinc-800 file:text-amber-400 hover:file:bg-zinc-700"
                  />
                  <input
                    type="text"
                    name="catalog_pdf_url"
                    defaultValue={editingProduct?.catalog_pdf_url || ''}
                    placeholder="Or link to existing PDF URL..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 mb-1">Technical Description *</label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  defaultValue={editingProduct?.description || ''}
                  placeholder="Engineered specs, driver details, heatsink construction, target applications..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>
            </form>

            <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800 flex justify-end space-x-3 shrink-0">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="product_form"
                disabled={loading}
                className="px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold shadow-cyan-glow transition-all disabled:opacity-50"
              >
                {loading ? 'Saving...' : editingProduct ? 'Save Updates' : 'Publish Luminaire'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
