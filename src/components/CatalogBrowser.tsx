'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Download,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight,
  MessageCircle,
  Search,
  BookOpen,
  LayoutGrid,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { CATALOG_REGISTRY, CatalogDefinition, CatalogPageMeta } from '@/data/catalogRegistry';

// ─── Colour tokens per catalog ────────────────────────────────────────────────
const COLOR_TOKENS: Record<string, { accent: string; border: string; badge: string; shadow: string; ring: string; btn: string }> = {
  cyan:   { accent: 'text-cyan-400',   border: 'border-cyan-500/40',   badge: 'bg-cyan-400/10 border-cyan-400/40 text-cyan-400',   shadow: 'shadow-cyan-glow',   ring: 'ring-cyan-400',   btn: 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950' },
  amber:  { accent: 'text-amber-400',  border: 'border-amber-500/40',  badge: 'bg-amber-400/10 border-amber-400/40 text-amber-400',  shadow: 'shadow-amber-glow',  ring: 'ring-amber-400',  btn: 'bg-amber-400 hover:bg-amber-300 text-zinc-950' },
  emerald:{ accent: 'text-emerald-400',border: 'border-emerald-500/40',badge: 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400',shadow: '',ring: 'ring-emerald-400',btn: 'bg-emerald-400 hover:bg-emerald-300 text-zinc-950' },
  violet: { accent: 'text-violet-400', border: 'border-violet-500/40', badge: 'bg-violet-400/10 border-violet-400/40 text-violet-400', shadow: '',               ring: 'ring-violet-400', btn: 'bg-violet-400 hover:bg-violet-300 text-zinc-950' },
  rose:   { accent: 'text-rose-400',   border: 'border-rose-500/40',   badge: 'bg-rose-400/10 border-rose-400/40 text-rose-400',     shadow: '',               ring: 'ring-rose-400',   btn: 'bg-rose-400 hover:bg-rose-300 text-zinc-950' },
};

// ─── Catalog Hub (all-catalogues overview) ────────────────────────────────────
function CatalogHub({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="space-y-10">
      {/* Hero header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-3 shadow-2xl">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>All Official Takeway Publications</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
          Complete Catalogue Library ({CATALOG_REGISTRY.length} Catalogues)
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-3xl leading-relaxed">
          Browse or download any of Takeway&apos;s official product catalogues. Click a catalogue to open its interactive page reader, or download the PDF directly.
        </p>
      </div>

      {/* Catalogue cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATALOG_REGISTRY.map((cat) => {
          const tk = COLOR_TOKENS[cat.color];
          return (
            <div
              key={cat.id}
              className={`group glass-panel rounded-2xl border border-zinc-800 hover:${tk.border} transition-all duration-300 overflow-hidden flex flex-col ${tk.shadow}`}
            >
              {/* Thumbnail preview (first page) */}
              <div
                className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden cursor-pointer"
                onClick={() => onSelect(cat.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.pages[0]?.imageSrc}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${tk.badge}`}>
                  {cat.icon} {cat.pageCount} Pages
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className={`inline-flex items-center px-4 py-2 rounded-lg font-mono font-bold text-xs ${tk.btn}`}>
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Open Reader
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${tk.accent}`}>
                    {cat.subtitle}
                  </span>
                  <h3 className={`text-base font-bold font-mono text-white group-hover:${tk.accent} transition-colors`}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => onSelect(cat.id)}
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${tk.btn}`}
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Browse Pages
                  </button>
                  <a
                    href={cat.pdfUrl}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Single Catalog Viewer ────────────────────────────────────────────────────
function SingleCatalogViewer({ catalog, onBack }: { catalog: CatalogDefinition; onBack: () => void }) {
  const totalPages = catalog.pages.length;
  const tk = COLOR_TOKENS[catalog.color];

  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  const currentPage: CatalogPageMeta = catalog.pages.find((p) => p.pageNum === currentPageNum) || catalog.pages[0];

  // Build unique categories for this catalog
  const categories = ['All', ...Array.from(new Set(catalog.pages.map((p) => p.category)))];

  const filteredPages = catalog.pages.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `page ${item.pageNum}`.includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNextPage = () => { setCurrentPageNum((prev) => (prev % totalPages) + 1); setZoomLevel(1); };
  const handlePrevPage = () => { setCurrentPageNum((prev) => (prev === 1 ? totalPages : prev - 1)); setZoomLevel(1); };
  const handleSelectPage = (pno: number) => { setCurrentPageNum(pno); setViewMode('reader'); setZoomLevel(1); };
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.75));
  const handleZoomReset = () => setZoomLevel(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreenModal) { setIsFullscreenModal(false); setZoomLevel(1); }
      else if (e.key === 'ArrowRight') handleNextPage();
      else if (e.key === 'ArrowLeft') handlePrevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageNum, isFullscreenModal]);

  return (
    <div className="space-y-6">
      {/* Back + Catalog header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to All Catalogues
        </button>
        <div className={`text-xs font-mono uppercase tracking-widest ${tk.accent}`}>
          {catalog.icon} {catalog.name}
        </div>
      </div>

      {/* Catalog hero card */}
      <div className={`glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl`}>
        <div className="space-y-2">
          <div className={`inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider ${tk.accent}`}>
            <BookOpen className="w-4 h-4" />
            <span>{catalog.subtitle}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
            {catalog.name}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
            {catalog.description}
          </p>
          <div className={`flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-zinc-400`}>
            <span className={`flex items-center ${tk.accent}`}>
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {totalPages} Pages
            </span>
            <span>•</span>
            <span className="text-zinc-300">{categories.length - 1} Categories</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <a
            href={catalog.pdfUrl}
            download
            className={`flex-1 md:flex-initial inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-mono font-bold shadow-md transition-all ${tk.btn}`}
          >
            <Download className="w-4 h-4 mr-2" />
            {catalog.pdfLabel}
          </a>
          <a
            href={`https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20please%20send%20me%20the%20${encodeURIComponent(catalog.name)}%20PDF%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Request on WhatsApp
          </a>
        </div>
      </div>

      {/* View mode switcher & page jump */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-4">
        <div className="flex items-center rounded-xl bg-zinc-900/90 p-1 border border-zinc-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => setViewMode('reader')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              viewMode === 'reader' ? `${tk.btn} font-bold shadow-md` : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-1.5" />
            Interactive Reader
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              viewMode === 'grid' ? `${tk.btn} font-bold shadow-md` : 'text-zinc-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4 mr-1.5" />
            {totalPages}-Page Index ({filteredPages.length})
          </button>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 w-full sm:w-auto">
          <span>Jump to Page:</span>
          <select
            value={currentPageNum}
            onChange={(e) => handleSelectPage(parseInt(e.target.value))}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-cyan-400"
          >
            {catalog.pages.map((p) => (
              <option key={p.pageNum} value={p.pageNum}>
                Page {p.pageNum}: {p.title.length > 40 ? p.title.substring(0, 40) + '...' : p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ═══ READER MODE ═══ */}
      {viewMode === 'reader' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex flex-col">
            {/* Top toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${tk.badge}`}>
                  Page {currentPage.pageNum} of {totalPages}
                </span>
                <span className={`text-xs font-mono hidden sm:inline font-semibold ${tk.accent}`}>
                  {currentPage.category}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button type="button" onClick={handlePrevPage} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono flex items-center transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                </button>
                <button type="button" onClick={handleNextPage} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono flex items-center transition-colors">
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button type="button" onClick={handleZoomIn} className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors" title="Zoom In">
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button type="button" onClick={handleZoomOut} className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors" title="Zoom Out">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button type="button" onClick={handleZoomReset} className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 font-mono text-xs transition-colors flex items-center" title="Reset Zoom">
                  <RotateCcw className="w-3 h-3 mr-1" />{Math.round(zoomLevel * 100)}%
                </button>
                <button type="button" onClick={() => setIsFullscreenModal(true)} className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 hover:text-white hover:bg-cyan-900 transition-colors" title="Fullscreen">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Page canvas */}
            <div
              className="relative w-full h-[60vh] sm:h-[75vh] bg-zinc-950 overflow-auto flex items-center justify-center p-2 sm:p-4 cursor-zoom-in touch-pan-y"
              onClick={() => setIsFullscreenModal(true)}
              title="Click to view in Fullscreen"
            >
              <div
                className="relative max-h-full aspect-[1/1.414] w-auto h-full max-w-full transition-transform duration-200 ease-out shadow-2xl"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentPage.imageSrc}
                  alt={currentPage.title}
                  className="w-full h-full object-contain rounded-lg border border-zinc-800 bg-white"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 px-3 py-1.5 rounded-lg text-[11px] font-mono text-zinc-300 flex items-center pointer-events-none shadow-lg">
                <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                Click image for Fullscreen Zoom
              </div>
            </div>

            {/* Bottom context bar */}
            <div className="px-6 py-4 bg-zinc-900/80 border-t border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white">{currentPage.title}</h3>
                <p className="text-xs text-zinc-400 font-sans max-w-2xl leading-relaxed">{currentPage.summary}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {currentPage.productSlug && (
                  <Link
                    href={`/products/${currentPage.productSlug}`}
                    className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${tk.btn}`}
                  >
                    View Product Specifications
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                )}
                <a
                  href={`https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20am%20inquiring%20about%20Page%20${currentPage.pageNum}%20(${encodeURIComponent(currentPage.title)})%20from%20the%20${encodeURIComponent(catalog.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/40 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Inquire Page Specs
                </a>
              </div>
            </div>
          </div>

          {/* Quick-scroll thumbnail strip */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                Quick-Jump Thumbnail Carousel (click any page):
              </span>
              <span>All {totalPages} Pages</span>
            </div>
            <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-1 overscroll-x-contain touch-pan-x">
              {catalog.pages.map((p) => {
                const isActive = p.pageNum === currentPageNum;
                return (
                  <button
                    key={p.pageNum}
                    type="button"
                    onClick={() => handleSelectPage(p.pageNum)}
                    className={`relative shrink-0 w-24 aspect-[1/1.414] rounded-lg overflow-hidden border transition-all ${
                      isActive ? `border-${catalog.color}-400 ring-2 ${tk.ring} shadow-lg scale-105` : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.imageSrc} alt={`Thumb Page ${p.pageNum}`} className="w-full h-full object-cover bg-white" loading="lazy" />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 px-1 py-0.5 text-[10px] font-mono font-bold text-center text-white">
                      Pg {p.pageNum}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ═══ GRID MODE ═══ */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {/* Search & filters */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by page number, name, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <div className="text-xs font-mono text-zinc-400">
              Showing <strong className="text-cyan-400">{filteredPages.length}</strong> of {totalPages} Pages
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat ? `${tk.btn} font-bold` : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPages.map((page) => (
              <div key={page.pageNum} className="group glass-panel rounded-2xl border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col">
                <div onClick={() => handleSelectPage(page.pageNum)} className="relative aspect-[1/1.414] w-full bg-zinc-950 overflow-hidden cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={page.imageSrc} alt={page.title} className="w-full h-full object-contain p-2 bg-white transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className={`absolute top-3 left-3 bg-zinc-950/85 backdrop-blur-md border px-2.5 py-1 rounded-md text-[11px] font-mono font-bold shadow-md ${tk.badge}`}>
                    Page {page.pageNum} of {totalPages}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className={`inline-flex items-center px-3.5 py-2 rounded-lg font-mono font-bold text-xs ${tk.btn}`}>
                      <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                      Open in Reader
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${tk.accent}`}>{page.category}</span>
                    <h3 className="text-sm font-bold font-mono text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mt-1">{page.title}</h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">{page.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 mt-3">
                    <button onClick={() => handleSelectPage(page.pageNum)} className="text-xs font-mono font-semibold text-zinc-300 hover:text-cyan-400 inline-flex items-center">
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      Inspect Page
                    </button>
                    {page.productSlug && (
                      <Link href={`/products/${page.productSlug}`} className={`text-xs font-mono font-bold ${tk.accent} hover:underline inline-flex items-center`}>
                        View Model →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ FULLSCREEN LIGHTBOX ═══ */}
      {isFullscreenModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => { setIsFullscreenModal(false); setZoomLevel(1); }}
        >
          {/* Header */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 bg-zinc-950/90 border border-zinc-800 px-4 py-3 rounded-2xl shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${tk.btn}`}>
                Page {currentPage.pageNum} of {totalPages}
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-xs sm:max-w-md">{currentPage.title}</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button type="button" onClick={handlePrevPage} className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" onClick={handleNextPage} className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="h-5 w-px bg-zinc-800 mx-1" />
              <button type="button" onClick={handleZoomIn} className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors">
                <ZoomIn className="w-4 h-4" />
              </button>
              <button type="button" onClick={handleZoomOut} className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors">
                <ZoomOut className="w-4 h-4" />
              </button>
              <button type="button" onClick={handleZoomReset} className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-colors flex items-center">
                <RotateCcw className="w-3 h-3 mr-1" />{Math.round(zoomLevel * 100)}%
              </button>
              <button type="button" onClick={() => { setIsFullscreenModal(false); setZoomLevel(1); }} className="p-2 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 hover:text-white border border-red-800/80 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div
            className="flex-1 w-full overflow-auto flex items-center justify-center p-4 my-2 select-none"
            onClick={(e) => { if (e.target === e.currentTarget) { setIsFullscreenModal(false); setZoomLevel(1); } }}
          >
            <div
              className="relative max-w-full max-h-full transition-transform duration-200 ease-out shadow-2xl"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentPage.imageSrc}
                alt={currentPage.title}
                className="max-h-[82vh] w-auto max-w-[92vw] object-contain rounded-xl shadow-2xl border border-zinc-800 bg-white"
              />
            </div>
          </div>

          {/* Footer */}
          <div
            className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-4 py-2 rounded-xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2">
              <span className={tk.accent}>Category:</span>
              <span className="text-zinc-200">{currentPage.category}</span>
              <span>•</span>
              <span className="text-zinc-400 truncate max-w-lg">{currentPage.summary}</span>
            </div>
            <div className="flex items-center space-x-4">
              {currentPage.productSlug && (
                <Link href={`/products/${currentPage.productSlug}`} className="text-cyan-400 hover:underline font-bold">
                  Go to Product →
                </Link>
              )}
              <span className="text-zinc-500 hidden sm:inline">Arrow keys to flip • ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Export: CatalogBrowser ─────────────────────────────────────────────
export default function CatalogBrowser() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ?catalog=solar (or indoor / outdoor / solar_cooler / army_camp)
  const initialCatalogId = searchParams.get('catalog') || null;

  const [activeCatalogId, setActiveCatalogId] = useState<string | null>(initialCatalogId);

  // Keep URL in sync when user picks a catalog
  const handleSelectCatalog = (id: string) => {
    setActiveCatalogId(id);
    const params = new URLSearchParams(searchParams.toString());
    params.set('catalog', id);
    router.replace(`/catalogs?${params.toString()}`, { scroll: false });
  };

  const handleBack = () => {
    setActiveCatalogId(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('catalog');
    router.replace(`/catalogs?${params.toString()}`, { scroll: false });
  };

  const activeCatalog = activeCatalogId ? CATALOG_REGISTRY.find((c) => c.id === activeCatalogId) : null;

  return (
    <div className="space-y-8">
      {activeCatalog ? (
        <SingleCatalogViewer catalog={activeCatalog} onBack={handleBack} />
      ) : (
        <CatalogHub onSelect={handleSelectCatalog} />
      )}
    </div>
  );
}
