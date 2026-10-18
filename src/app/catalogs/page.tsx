import { Suspense } from 'react';
import CatalogBrowser from '@/components/CatalogBrowser';
import { Download, FileText, ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export default function CatalogsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Download className="w-4 h-4" />
          <span>Official Factory Datasheets & Bifurcated Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
          Solar Product Catalog 2026
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          Explore all 50 official catalog pages bifurcated by engineering category. View complete electrical specifications, LiFePO4 battery storage curves, solar module efficiencies, and high-resolution luminaire drawings.
        </p>
      </div>

      {/* Interactive Catalog Browser */}
      <Suspense fallback={<div className="glass-panel p-12 text-center text-zinc-400 font-mono">Loading 50 catalog pages...</div>}>
        <CatalogBrowser />
      </Suspense>

      {/* Engineering Dialux / IES Support Section */}
      <div className="rounded-2xl glass-panel-cyan p-8 border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">Tender & Lighting Simulation Support</div>
          <div className="text-lg font-bold text-white font-mono">Need Verified IES Photometric Files for Dialux?</div>
          <p className="text-xs text-zinc-400 max-w-xl">
            We supply verified goniophotometer IES test files, lux distribution curves, and CAD drawings for municipal roadway, solar parking, and industrial warehouse tenders.
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
