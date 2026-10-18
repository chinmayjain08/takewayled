'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, ChevronDown, Menu, X, ShieldCheck, Download, Lock } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    { name: 'Solar Street Lights', slug: 'Solar Street Lights', desc: '2W - 120W All-in-One, AERO & King Series' },
    { name: 'Solar CCTV Surveillance', slug: 'Solar CCTV Lights', desc: '4G HD PTZ Cameras, Single & Multi-Lens Lights' },
    { name: 'Solar Inverters & ESS', slug: 'Solar Inverters & ESS', desc: '200W - 1200W Portable Pure Sine Wave LiFePO4' },
    { name: 'Solar Panels & Fans', slug: 'Solar Panels', desc: 'Class-A Mono PV Modules & Pedestal Misting Fans' },
    { name: 'Solar Floodlights', slug: 'Solar Floodlights', desc: '10W - 30W LENS, Sky Light & Foldable Models' },
    { name: 'Garden, Post & Landscape', slug: 'Solar Post & Landscape', desc: '360° UFO Post, Vintage Bollards & Wall Washers' },
    { name: 'Portable Camping Lights', slug: 'Portable Work Lights', desc: '100W Multi-Function Jobsite Lanterns & Fans' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      {/* Top Industrial Banner */}
      <div className="bg-industrial-950/90 border-b border-zinc-800/60 py-1.5 px-4 text-xs font-mono tracking-wider text-zinc-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-cyan-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-2" />
              DIRECT MANUFACTURER • JAIPUR, INDIA
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="hidden sm:inline-block text-zinc-300">GST: 08AAQFA5328K1Z2</span>
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <span className="hidden md:inline-flex items-center text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
              IP65 &amp; IP66 CERTIFIED • ISO 9001:2015 • CE • RoHS
            </span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400">
            <a
              href="https://wa.me/918766616660"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center text-emerald-400 hover:text-emerald-300 font-bold"
            >
              +91 87666 16660
            </a>
            <span className="hidden sm:inline-block text-zinc-700">|</span>
            <Link
              href="/admin"
              className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Lock className="w-3 h-3 mr-1" />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-lg bg-zinc-900 border border-cyan-500/40 flex items-center justify-center shadow-cyan-glow group-hover:border-cyan-400 transition-all duration-300">
              <Zap className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-white flex items-center font-mono">
                TAKEWAY<span className="text-cyan-400 font-extrabold ml-1">LED</span>
              </div>
              <p className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono">
                Industrial Photonics
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400 bg-cyan-500/10' : 'text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/40'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname.startsWith('/products')
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/40'
                }`}
              >
                Products
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </Link>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="glass-panel-cyan rounded-xl p-3 shadow-2xl border border-zinc-700/80 bg-zinc-950/95 backdrop-blur-xl max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain">
                    <div className="text-xs font-mono uppercase text-zinc-400 px-3 py-1 mb-1 font-semibold tracking-wider">
                      Product Categories
                    </div>
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products?category=${encodeURIComponent(cat.slug)}`}
                        onClick={() => setProductsDropdownOpen(false)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-zinc-800/80 transition-colors group"
                      >
                        <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {cat.name}
                        </div>
                        <div className="text-xs text-zinc-400 font-normal">
                          {cat.desc}
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-zinc-800 mt-2 pt-2">
                      <Link
                        href="/products"
                        onClick={() => setProductsDropdownOpen(false)}
                        className="block text-center text-xs font-mono text-cyan-400 hover:underline py-1"
                      >
                        Browse All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/catalogs"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/catalogs')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/40'
              }`}
            >
              <Download className="w-4 h-4 mr-1.5 opacity-70 text-amber-400" />
              Catalogs
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/40'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all duration-300 font-mono font-semibold"
            >
              Ask for Quotation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-zinc-800 px-4 pt-3 pb-8 space-y-3 bg-zinc-950/98 max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800"
          >
            Products Catalog
          </Link>
          <div className="pl-4 space-y-1">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?category=${encodeURIComponent(c.slug)}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-zinc-400 hover:text-cyan-400"
              >
                • {c.name}
              </Link>
            ))}
          </div>
          <Link
            href="/catalogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:bg-zinc-800"
          >
            Download Catalogs (PDF)
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800"
          >
            Contact Factory
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:bg-zinc-800"
          >
            Admin Dashboard
          </Link>
          <div className="pt-2 pb-4">
            <Link
              href="/contact#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 rounded-lg bg-cyan-400 text-zinc-950 font-mono font-semibold hover:bg-cyan-300 transition-colors"
            >
              Ask for Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
