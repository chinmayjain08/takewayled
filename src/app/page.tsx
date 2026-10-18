import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import {
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  Gauge,
  Factory,
  Cpu,
  Download,
  CheckCircle2,
  PhoneCall,
  Sliders
} from 'lucide-react';

export const revalidate = 60; // ISR cache revalidation

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(9);

    if (error) {
      console.error('Error fetching featured products:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Database connection error in getFeaturedProducts:', err);
    return [];
  }
}

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
        {/* Cyber-industrial Grid Background & Beam Effect */}
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] radial-beam pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md shadow-cyan-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ISO 9001:2015 CERTIFIED B2B MANUFACTURER</span>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400">BIS COMPLIANT • MNRE ALIGNED</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-mono">
              Illuminating Heavy Industry with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                Extreme Precision
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed font-sans">
              Engineered for extreme operating environments. Factory-direct commercial LED floodlights, UFO high bays, and intelligent roadway luminaires with up to{' '}
              <strong className="text-cyan-300 font-mono">180 lm/W efficacy</strong> and{' '}
              <strong className="text-amber-300 font-mono">IP67 waterproof resilience</strong>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Explore Commercial Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/catalogs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400/50 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2 text-amber-400" />
              Download Technical PDF Catalogs
            </Link>
          </div>

          {/* Live Industrial Metrics Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-panel p-4 rounded-xl border border-zinc-800 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">180+</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1">LM/W System Efficacy</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-zinc-800 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">100,000h</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1">L70 @ 55°C Lifespan</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-zinc-800 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">IP67/IK10</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1">Waterproof & Impact Proof</div>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-zinc-800 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">5-YEAR</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1">Replacement Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE COMMERCIAL CATEGORIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 flex items-center">
              <Sliders className="w-3.5 h-3.5 mr-1.5" />
              Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Industrial Lighting Architecture
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Heavy-duty luminaires customized for high-temperature, corrosive, and high-vibration commercial installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Link
            href="/products?category=Solar%20Street%20Lights"
            className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-cyan-glow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                  Solar Street Lights
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  12W - 120W All-in-One & Semi-Integrated luminaires with LiFePO4 batteries, radar motion dimming, and IP65/66 housings.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center text-xs font-mono text-cyan-400 group-hover:underline">
              Explore Street Lights →
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/products?category=Solar%20CCTV%20Lights"
            className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-amber-glow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-mono">
                  Solar CCTV Surveillance
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Integrated 4G/WiFi FHD PTZ cameras (Single & Triple-lens 15MP) combined with high-output solar flood and street lighting.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center text-xs font-mono text-amber-400 group-hover:underline">
              Explore Solar CCTV →
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/products?category=Solar%20Inverters%20%26%20ESS"
            className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-cyan-glow"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                  Portable ESS & Inverters
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  200W - 1200W pure sine wave energy storage power packs with LiFePO4 cells, 3x AC sockets, XT60 fast charging, and solar input.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center text-xs font-mono text-cyan-400 group-hover:underline">
              Explore Solar Inverters →
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/products?category=Solar%20Post%20%26%20Landscape"
            className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                  Landscape, Post & Bollards
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  360° UFO post-top luminaires, vintage filament bollards, flame torches, and expandable modular linear wall washers.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center text-xs font-mono text-emerald-400 group-hover:underline">
              Explore Landscape Lights →
            </div>
          </Link>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/80 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center">
                <Award className="w-3.5 h-3.5 mr-1.5" />
                Featured Flagship Models
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                High-Performance Luminaire Catalog
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Browse Complete Inventory ({products.length > 0 ? `${products.length}+ Models` : 'Catalog'}) →
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="glass-panel p-12 text-center rounded-2xl border border-zinc-800">
              <p className="text-zinc-400">Loading industrial catalog data from Supabase...</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. PHOTOMETRICS & FACTORY CAPABILITIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Factory className="w-4 h-4" />
              <span>In-House Engineering Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Designed from the Semiconductor Level to the Heat Sink
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We eliminate early luminaire failure through aerospace-grade thermal modeling, oversized Mean Well and Inventronics constant-current drivers, and Tier-1 Lumileds/Cree emitters.
            </p>

            <div className="space-y-3.5 text-sm text-zinc-300">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-mono">Complimentary Dialux Lighting Simulations:</strong> Send your project CAD drawings, and our engineering team will provide accurate lux maps within 24 hours.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-mono">Custom CCT, CRI & Beam Optics:</strong> Tailored beam angles (15°, 30°, 60°, 90°, 120° and asymmetric batwing) with CRI 70, 80, or 90+ options.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-mono">10kV - 20kV Industrial Surge Suppression:</strong> Built-in surge protection against unstable electrical grids and lightning strikes.
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/catalogs"
                className="inline-flex items-center px-5 py-3 rounded-lg text-xs font-mono font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
              >
                <Download className="w-4 h-4 mr-2 text-cyan-400" />
                Download Spec Sheets
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg text-xs font-mono font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Request Dialux IES Report
              </Link>
            </div>
          </div>

          {/* Visual Spec Matrix / Graphic */}
          <div className="glass-panel-cyan p-8 rounded-2xl border border-zinc-800 space-y-6">
            <h3 className="text-lg font-mono font-bold text-white border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>MANUFACTURING TOLERANCES</span>
              <span className="text-xs text-cyan-400">CERT: ISO9001</span>
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>DRIVER EFFICIENCY (MEAN WELL / INVENTRONICS)</span>
                  <span className="text-cyan-400">&gt; 94.5%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>HEATSINK DIE-CAST ADC12 THERMAL CONDUCTIVITY</span>
                  <span className="text-amber-400">96 W/m·K</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>LUMEN MAINTENANCE (LM-80 TEST REPORT)</span>
                  <span className="text-emerald-400">92% @ 60,000 hrs</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-400 mb-1">
                  <span>TOTAL HARMONIC DISTORTION (THD)</span>
                  <span className="text-cyan-400">&lt; 10%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[15%]" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
              <span className="text-cyan-400 font-bold">Factory Guarantee:</span> If any fixture experiences driver or diode failure during the 5-year warranty period, TakewayLED ships air-freight replacement components at zero cost to your facility.
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT B2B INQUIRY STRIP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-industrial-950 via-zinc-900 to-industrial-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto rounded-3xl glass-panel-cyan p-8 sm:p-12 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-400 shadow-cyan-glow">
            <PhoneCall className="w-7 h-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
            Need Bulk Project Pricing or Custom IES Simulations?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300">
            Connect directly with our senior lighting engineering desk. We provide comprehensive fixture schedules, photometric layout calculations, and container-load FOB/CIF quotations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918766616660?text=Hi%2C%20I%20have%20an%20active%20commercial%20LED%20lighting%20tender%20and%20need%20a%20B2B%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300"
            >
              Direct WhatsApp Inquiry (+91 87666 16660)
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Submit Specification RFQ Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
