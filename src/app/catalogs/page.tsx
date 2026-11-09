import { Suspense } from 'react';
import CatalogBrowser from '@/components/CatalogBrowser';
import { Download, ArrowRight } from 'lucide-react';
import { CATALOG_REGISTRY } from '@/data/catalogRegistry';

export const revalidate = 60;

export default function CatalogsPage() {
  const totalPages = CATALOG_REGISTRY.reduce((acc, c) => acc + c.pageCount, 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Download className="w-4 h-4" />
          <span>Official Factory Datasheets &amp; Product Catalogues</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
          Takeway Product Catalogues
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          Browse all {CATALOG_REGISTRY.length} official Takeway catalogues — {totalPages}+ pages of engineering
          specifications, product drawings, and technical data. Use the interactive page reader or download
          the full PDF directly.
        </p>
      </div>

      {/* Interactive Catalog Browser */}
      <Suspense
        fallback={
          <div className="glass-panel p-12 text-center text-zinc-400 font-mono rounded-2xl border border-zinc-800">
            Loading catalogue library…
          </div>
        }
      >
        <CatalogBrowser />
      </Suspense>

      {/* Engineering / IES support strip */}
      <div className="rounded-2xl glass-panel-cyan p-8 border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">Tender &amp; Lighting Simulation Support</div>
          <div className="text-lg font-bold text-white font-mono">Need Verified IES Photometric Files for Dialux?</div>
          <p className="text-xs text-zinc-400 max-w-xl">
            We supply verified goniophotometer IES test files, lux distribution curves, and CAD drawings for
            municipal roadway, solar parking, and industrial warehouse tenders.
          </p>
        </div>
        <a
          href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20please%20send%20me%20the%20IES%20photometric%20files%20and%20Dialux%20simulation%20for%20our%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow shrink-0 transition-all"
        >
          Request IES Files via WhatsApp
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </a>
      </div>
    </div>
  );
}
