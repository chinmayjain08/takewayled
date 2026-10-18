import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Zap, Droplets, Gauge, ArrowRight, MessageCircle, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi TakewayLED Team, I am interested in inquiring about "${product.name}" (${product.wattage}, ${product.lumens}, ${product.ip_rating}). Could you share B2B wholesale pricing and dispatch timeline?`
  );
  const whatsappUrl = `https://wa.me/918766616660?text=${whatsappMessage}`;

  return (
    <div className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-card-glow hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
        <Image
          src={product.image_url || 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-950/80 border border-zinc-700 text-cyan-400 backdrop-blur-md">
            {product.category}
          </span>
          {product.is_featured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/90 text-zinc-950 shadow-sm">
              ★ FEATURED
            </span>
          )}
        </div>

        {/* IP Rating Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-zinc-900/90 border border-cyan-400/40 text-cyan-300 backdrop-blur-md">
            <Droplets className="w-3.5 h-3.5 mr-1 text-cyan-400" />
            {product.ip_rating || 'IP65/IP66'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80">
          <div className="flex items-center space-x-2 bg-zinc-950/60 p-2 rounded-lg border border-zinc-800">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] uppercase font-mono text-zinc-400">Wattage</div>
              <div className="text-sm font-bold font-mono text-zinc-200">{product.wattage}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-950/60 p-2 rounded-lg border border-zinc-800">
            <Gauge className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] uppercase font-mono text-zinc-400">Luminous Flux</div>
              <div className="text-sm font-bold font-mono text-zinc-200">{product.lumens}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-semibold font-mono text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 mr-1.5" />
            Inquire via WhatsApp
          </a>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-medium font-mono text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors"
          >
            Specs
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {/* Optional Catalog Download link if available */}
        {product.catalog_pdf_url && (
          <div className="pt-1 text-center">
            <Link
              href={product.catalog_pdf_url}
              className="inline-flex items-center text-[11px] font-mono text-amber-400 hover:text-amber-300 hover:underline"
            >
              <FileText className="w-3 h-3 mr-1" />
              {product.catalog_pdf_url.includes('page=')
                ? `Inspect in Catalog (Page ${product.catalog_pdf_url.split('page=')[1]})`
                : 'Download Spec Sheet (PDF)'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
