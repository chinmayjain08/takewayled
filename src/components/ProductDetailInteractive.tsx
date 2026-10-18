'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { ProductVariant } from '@/data/productVariants';
import {
  Zap,
  Droplets,
  Gauge,
  ShieldCheck,
  Download,
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

interface ProductDetailInteractiveProps {
  product: Product;
  variants: ProductVariant[];
}

export default function ProductDetailInteractive({
  product,
  variants,
}: ProductDetailInteractiveProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Lightbox / Zoom Modal State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxTab, setLightboxTab] = useState<'product' | 'catalog'>('product');
  const [zoomLevel, setZoomLevel] = useState(1);

  const hasVariants = variants && variants.length > 0;
  const currentVariant = hasVariants ? variants[selectedIdx] : null;

  // Active specs (falling back to product-level defaults)
  const activeModel = currentVariant?.model || 'STANDARD';
  const activeWattage = currentVariant?.wattage || product.wattage;
  const activeCapacity = currentVariant?.capacity || product.lumens;
  const activeImage = currentVariant?.image_url || product.image_url;

  // Extract catalog page number and high-res image
  const catalogPageNum = product.catalog_pdf_url?.includes('page=')
    ? product.catalog_pdf_url.split('page=')[1]
    : null;
  const catalogPageImg = catalogPageNum ? `/catalog_pages/page_${catalogPageNum}.jpg` : null;

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const openLightbox = (tab: 'product' | 'catalog' = 'product') => {
    setLightboxTab(tab);
    setZoomLevel(1);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.75));
  const handleZoomReset = () => setZoomLevel(1);

  const whatsappMessage = encodeURIComponent(
    `Hi TakewayLED Team, I need a formal quotation for "${product.name}"${
      currentVariant ? ` - Model: ${currentVariant.model} (${currentVariant.wattage}, ${currentVariant.capacity})` : ` (${product.wattage})`
    }. Ingress: ${product.ip_rating}. Please share B2B wholesale pricing, production lead time, and catalog datasheet.`
  );
  const whatsappUrl = `https://wa.me/918766616660?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 flex items-center space-x-2 text-xs font-mono text-zinc-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-cyan-400 transition-colors">Products</Link>
        <span>/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-cyan-400 transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-zinc-200 truncate max-w-xs">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Product Image & Badges with Click-to-Zoom */}
        <div className="lg:col-span-6 space-y-4">
          <div
            onClick={() => openLightbox('product')}
            className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl transition-all duration-300 cursor-zoom-in hover:border-cyan-500/50"
            title="Click to view enlarged high-res photo / catalog drawing"
          >
            <Image
              src={activeImage || '/catalog_pages/page_3.jpg'}
              alt={`${product.name} - ${activeModel}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4 object-center transition-all duration-300 group-hover:scale-[1.02]"
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-950/80 border border-zinc-700 text-cyan-400 backdrop-blur-md">
                {product.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-950/80 border border-cyan-500/50 text-cyan-300 backdrop-blur-md flex items-center">
                <Droplets className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                {product.ip_rating || 'IP65 / IP66'}
              </span>
            </div>

            {/* Enlarge / Zoom Hover Button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Maximize2 className="w-4 h-4 mr-2" />
                Click to Zoom & Inspect Catalog Drawing
              </span>
            </div>

            {hasVariants && variants.length > 1 && (
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg text-[11px] font-mono bg-zinc-950/90 border border-amber-500/50 text-amber-300 backdrop-blur-md flex items-center shadow-lg pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Active Model: {activeModel}
              </div>
            )}
          </div>

          {/* Quick Enlarge & Catalog Preview Toggle Bar */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs font-mono">
            <button
              type="button"
              onClick={() => openLightbox('product')}
              className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-cyan-300 border border-zinc-800 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
            >
              <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Zoom Photo
            </button>

            {catalogPageImg && (
              <button
                type="button"
                onClick={() => openLightbox('catalog')}
                className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/40 transition-colors flex items-center justify-center"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Enlarge Catalog Page {catalogPageNum}
              </button>
            )}
          </div>

          {/* Quick Quality Assurance Highlights */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="glass-panel p-3 rounded-xl border border-zinc-800">
              <div className="text-cyan-400 font-mono font-bold text-xs">3-YEAR</div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">Warranty Included</div>
            </div>
            <div className="glass-panel p-3 rounded-xl border border-zinc-800">
              <div className="text-amber-400 font-mono font-bold text-xs">A-GRADE MONO</div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">Solar PV Tech</div>
            </div>
            <div className="glass-panel p-3 rounded-xl border border-zinc-800">
              <div className="text-emerald-400 font-mono font-bold text-xs">LiFePO4</div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">High-Cycle Cells</div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Interactive Variants & Specs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center">
              <span>Factory Spec Luminaire Series</span>
              {hasVariants && variants.length > 1 && (
                <span className="ml-2 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-[10px] text-cyan-300 font-bold">
                  {variants.length} Models Available
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight leading-snug">
              {product.name}
            </h1>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-sans">
              {product.description}
            </p>
          </div>

          {/* Interactive Variant Selection Pills (If multiple models exist) */}
          {hasVariants && variants.length > 1 && (
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.1)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center">
                  <Cpu className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                  Select Model / Wattage Variant:
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Click to switch live parameters
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {variants.map((v, i) => {
                  const isSelected = i === selectedIdx;
                  return (
                    <button
                      key={v.model}
                      type="button"
                      onClick={() => setSelectedIdx(i)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-zinc-200'}`}>
                          {v.model}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-amber-400 font-semibold">{v.wattage}</span>
                        <span className="text-zinc-400">{v.capacity}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dynamic Core Spec Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 transition-colors">
              <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center">
                <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" />
                Selected Power
              </div>
              <div className="text-base font-bold font-mono text-white mt-1">
                {activeWattage}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 transition-colors">
              <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center">
                <Gauge className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                Battery / Flux
              </div>
              <div className="text-base font-bold font-mono text-white mt-1">
                {activeCapacity}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 transition-colors">
              <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center">
                <Droplets className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                Ingress Protection
              </div>
              <div className="text-base font-bold font-mono text-white mt-1">
                {product.ip_rating || 'IP65 / IP66'}
              </div>
            </div>
          </div>

          {/* WhatsApp & Catalog Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {currentVariant ? `Inquire for ${currentVariant.model}` : 'Inquire via WhatsApp (Wholesale)'}
            </a>

            {catalogPageImg ? (
              <button
                type="button"
                onClick={() => openLightbox('catalog')}
                className="inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/60 transition-colors"
              >
                <Maximize2 className="w-4 h-4 mr-2 text-amber-400" />
                Inspect Catalog (Page {catalogPageNum})
              </button>
            ) : product.catalog_pdf_url ? (
              <Link
                href={product.catalog_pdf_url}
                className="inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/60 transition-colors"
              >
                <Download className="w-4 h-4 mr-2 text-amber-400" />
                Download Catalog PDF
              </Link>
            ) : null}
          </div>

          {/* Dynamic Specifications Matrix Table */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
                Verified Solar Engineering Parameters
              </h3>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                Model: {activeModel}
              </span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 overflow-hidden divide-y divide-zinc-800/80 text-xs font-mono">
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Catalogue Series</span>
                <span className="text-cyan-400 font-bold">{product.name}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Selected Model Code</span>
                <span className="text-amber-400 font-bold">{activeModel}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Rated Output / Power</span>
                <span className="text-amber-300 font-bold">{activeWattage}</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Battery / Luminous Capacity</span>
                <span className="text-zinc-200">{activeCapacity}</span>
              </div>
              {currentVariant?.dimensions && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">Physical Dimensions</span>
                  <span className="text-zinc-200">{currentVariant.dimensions}</span>
                </div>
              )}
              {currentVariant?.solarPanel && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">Solar PV Module Specification</span>
                  <span className="text-zinc-200">{currentVariant.solarPanel}</span>
                </div>
              )}
              {currentVariant?.battery && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">Battery Bank Specification</span>
                  <span className="text-zinc-200">{currentVariant.battery}</span>
                </div>
              )}
              {currentVariant?.ledSpec && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">LED Array / Optics</span>
                  <span className="text-zinc-200">{currentVariant.ledSpec}</span>
                </div>
              )}
              {currentVariant?.outputs && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">Output Sockets & Ports</span>
                  <span className="text-zinc-200">{currentVariant.outputs}</span>
                </div>
              )}
              {currentVariant?.specialFeature && (
                <div className="flex justify-between py-2.5 px-4">
                  <span className="text-zinc-400">Engineering Highlights</span>
                  <span className="text-zinc-200">{currentVariant.specialFeature}</span>
                </div>
              )}
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Ingress Protection</span>
                <span className="text-emerald-400 font-bold">{product.ip_rating} (All-Weather Rated)</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Battery Chemistry</span>
                <span className="text-zinc-200">High-Cycle LiFePO4 Lithium Iron Phosphate (2000+ Cycles)</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Autonomous Reserve</span>
                <span className="text-zinc-200">2 to 3 Consecutive Rainy / Overcast Days Backup</span>
              </div>
              <div className="flex justify-between py-2.5 px-4">
                <span className="text-zinc-400">Operating Temperature</span>
                <span className="text-zinc-200">-20°C to +60°C Extreme Industrial Range</span>
              </div>
            </div>

            {/* Direct Verification with Catalogue Page */}
            {catalogPageImg && (
              <div className="mt-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-white flex items-center">
                    <Layers className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                    Complete Model Drawings & Dimensional Specs
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    View every variant, mechanical drawing, and photometric curve directly in the 2026 TAKEWAY Solar Catalogue.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox('catalog')}
                  className="shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-400 text-zinc-950 hover:bg-cyan-300 transition-colors flex items-center"
                >
                  <Maximize2 className="w-3.5 h-3.5 mr-1.5" />
                  Inspect Catalog Page →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="mt-12 pt-6 border-t border-zinc-800">
        <Link
          href="/products"
          className="inline-flex items-center text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Complete Product Catalog
        </Link>
      </div>

      {/* FULLSCREEN LIGHTBOX & ENLARGED ZOOM VIEWER MODAL */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Header Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 bg-zinc-950/90 border border-zinc-800 px-4 py-3 rounded-2xl shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-xs sm:max-w-md">
                {product.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950 border border-cyan-800 text-cyan-300">
                Model: {activeModel}
              </span>
            </div>

            {/* View Switcher Tabs (Product Photo vs Catalog Drawing) */}
            <div className="flex items-center rounded-xl bg-zinc-900 p-1 border border-zinc-800 text-xs font-mono">
              <button
                type="button"
                onClick={() => { setLightboxTab('product'); setZoomLevel(1); }}
                className={`flex items-center px-3 py-1.5 rounded-lg transition-colors ${
                  lightboxTab === 'product'
                    ? 'bg-cyan-400 text-zinc-950 font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 mr-1.5" />
                Product Photo
              </button>
              {catalogPageImg && (
                <button
                  type="button"
                  onClick={() => { setLightboxTab('catalog'); setZoomLevel(1); }}
                  className={`flex items-center px-3 py-1.5 rounded-lg transition-colors ${
                    lightboxTab === 'catalog'
                      ? 'bg-amber-400 text-zinc-950 font-bold shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5" />
                  Catalogue Page {catalogPageNum}
                </button>
              )}
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomReset}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-colors flex items-center"
                title="Reset Zoom (100%)"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 hover:text-white border border-red-800/80 transition-colors"
                title="Close Lightbox (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Canvas (Zoomable & Scrollable) */}
          <div
            className="flex-1 w-full overflow-auto flex items-center justify-center p-4 my-2 select-none"
            onClick={(e) => {
              // Click on canvas background closes, click on image toggles zoom
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div
              className="relative max-w-full max-h-full transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxTab === 'product' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={activeImage || '/catalog_pages/page_3.jpg'}
                  alt={`${product.name} - ${activeModel}`}
                  className="max-h-[75vh] w-auto max-w-[90vw] object-contain rounded-xl shadow-2xl border border-zinc-800 bg-zinc-950"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={catalogPageImg || '/catalog_pages/page_3.jpg'}
                  alt={`Official Catalogue Page ${catalogPageNum}`}
                  className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-xl shadow-2xl border border-zinc-800 bg-zinc-950"
                />
              )}
            </div>
          </div>

          {/* Lightbox Footer Navigation & Hints */}
          <div
            className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-4 py-2 rounded-xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400">Viewing:</span>
              <span className="text-zinc-200">
                {lightboxTab === 'product'
                  ? `Hardware Unit (${activeModel} - ${activeWattage})`
                  : `Full Catalogue Engineering Drawing (Page ${catalogPageNum})`}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span>Tip: Click Zoom In or Use controls to inspect fine details</span>
              <button
                type="button"
                onClick={closeLightbox}
                className="text-zinc-300 hover:text-white underline"
              >
                Press ESC to exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
