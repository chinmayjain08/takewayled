import Link from 'next/link';
import { Zap, ShieldCheck, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial-950 border-t border-zinc-800 text-zinc-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Industrial Certifications Strip */}
      <div className="border-b border-zinc-850 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Award className="w-6 h-6 text-cyan-400 mb-2" />
            <span className="text-xs font-mono font-bold text-zinc-200">DLC 5.1 & CE CERTIFIED</span>
            <span className="text-[11px] text-zinc-400">Compliant with North American & EU Grid Codes</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
            <span className="text-xs font-mono font-bold text-zinc-200">IP65 &amp; IP66 WEATHERPROOF</span>
            <span className="text-[11px] text-zinc-400">Hermetically sealed against extreme dust & storms</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-xs font-mono font-bold text-zinc-200">100,000 HRS L70 RATING</span>
            <span className="text-[11px] text-zinc-400">Grade-A Lumileds / Cree / Osram LED arrays</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-6 h-6 text-cyan-400 mb-2" />
            <span className="text-xs font-mono font-bold text-zinc-200">180 LM/W HIGH EFFICACY</span>
            <span className="text-[11px] text-zinc-400">Maximum rebate-eligible energy savings</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-cyan-500/40 flex items-center justify-center shadow-cyan-glow">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-xl font-black tracking-tight text-white font-mono">
                TAKEWAY<span className="text-cyan-400 ml-1">LED</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              TakewayLED (Aasma Enterprises) is an ISO 9001:2015 certified manufacturer of high-performance commercial LED floodlights, UFO high bays, smart dolphin street lights, and integrated all-in-one solar luminaires based in Jaipur, India.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Office A-203, 2nd Floor, Chordia&apos;s Kosmos, Block A, Plot E-05, Dr. Rajendra Prasad Nagar E, Gopalpura Bypass Road, Jaipur - 302020, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:contact@takewayled.com" className="hover:text-cyan-300">contact@takewayled.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919799700898" className="hover:text-emerald-300 font-bold">+91 97997 00898</a>
                <span className="text-zinc-650">/</span>
                <a href="https://wa.me/918766616660" className="hover:text-emerald-300 font-bold">+91 87666 16660</a>
              </div>
              <div className="text-[11px] text-zinc-500 font-mono pt-1">
                GSTIN: <span className="text-zinc-300">08AAQFA5328K1Z2</span> • Trusted Since 2009
              </div>
            </div>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Catalog Range
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=Solar%20Street%20Lights" className="hover:text-cyan-400 transition-colors">
                  Solar Street Lights
                </Link>
              </li>
              <li>
                <Link href="/products?category=Solar%20CCTV%20Lights" className="hover:text-cyan-400 transition-colors">
                  Solar CCTV Lights
                </Link>
              </li>
              <li>
                <Link href="/products?category=Solar%20Inverters%20%26%20ESS" className="hover:text-cyan-400 transition-colors">
                  Solar Inverters & ESS
                </Link>
              </li>
              <li>
                <Link href="/products?category=Solar%20Post%20%26%20Landscape" className="hover:text-cyan-400 transition-colors">
                  Garden & Landscape
                </Link>
              </li>
              <li>
                <Link href="/products?category=Solar%20High%20Bays" className="hover:text-cyan-400 transition-colors">
                  Solar High Bays & Floods
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering & Resources */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Technical Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalogs" className="hover:text-amber-400 transition-colors">
                  Engineering PDF Catalogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Ask for Quotation
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors">
                  Admin System Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct B2B Assurance */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-400 pl-2">
              Factory Commitment
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <p>
                All luminaires undergo rigorous 72-hour high-temperature burn-in tests and helium-leak waterproofing verification before packaging.
              </p>
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                <span className="text-emerald-400 font-bold">3-YEAR REPLACEMENT</span>: Zero hassle driver and module swaps covered under factory terms.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-850 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} TakewayLED Manufacturing Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/catalogs" className="hover:text-cyan-400">Catalogs</Link>
            <Link href="/products" className="hover:text-cyan-400">Products</Link>
            <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
            <Link href="/admin" className="hover:text-cyan-400">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
