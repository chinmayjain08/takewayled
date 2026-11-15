import Link from 'next/link';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Globe,
  Package,
  ShieldCheck,
  Truck,
  FileText,
  MessageCircle,
  PhoneCall,
  BarChart3,
  Anchor,
  Factory,
  Landmark,
  ClipboardList,
  Star,
} from 'lucide-react';

export const metadata = {
  title: 'International Procurement | TakewayLED',
  description:
    'Factory-direct international procurement of commercial LED lighting — FOB Jaipur, full export documentation, CE/RoHS certified. Exporting to 30+ countries across the Middle East, Africa, Southeast Asia & Europe.',
};

const stats = [
  { value: '30+', label: 'Countries Served', color: 'text-cyan-400' },
  { value: 'FOB / CIF', label: 'Shipping Terms', color: 'text-amber-400' },
  { value: '45 Days', label: 'Standard Lead Time', color: 'text-emerald-400' },
  { value: '500 Units', label: 'Min. Order Quantity', color: 'text-cyan-400' },
];

const exportDocs = [
  'Commercial Invoice (CI)',
  'Packing List',
  'Bill of Lading (B/L) or AWB',
  'Certificate of Origin (COO)',
  'CE Declaration of Conformity',
  'RoHS Compliance Certificate',
  'Third-Party Test Reports (IEC 60598)',
  'GST LUT / Export Clearance',
  'BIS / MNRE Compliance Letters (on request)',
  'Phytosanitary / FUMIGATION Certificate (if required)',
];

const regions = [
  {
    region: 'Middle East & GCC',
    icon: '🇦🇪',
    color: 'amber',
    markets: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
    highlight: 'SASO & ESMA compliant variants available. Regular FCL exports to Dubai Jebel Ali Port.',
  },
  {
    region: 'Africa',
    icon: '🌍',
    color: 'emerald',
    markets: ['Nigeria', 'Kenya', 'Tanzania', 'Ethiopia', 'Ghana', 'South Africa'],
    highlight: 'Solar street lights and hybrid ESS solutions most demanded. Partial shipment flexibility.',
  },
  {
    region: 'Southeast Asia',
    icon: '🌏',
    color: 'cyan',
    markets: ['Vietnam', 'Philippines', 'Bangladesh', 'Sri Lanka', 'Myanmar', 'Indonesia'],
    highlight: 'Industrial high bay and outdoor floodlight OEM/ODM exports. Custom labelling available.',
  },
  {
    region: 'Europe & CIS',
    icon: '🇪🇺',
    color: 'amber',
    markets: ['Poland', 'Ukraine', 'Romania', 'Kazakhstan', 'Georgia', 'Azerbaijan'],
    highlight: 'Full CE-compliant range. Branding and private label packaging service available.',
  },
];

const shippingOptions = [
  {
    icon: Anchor,
    mode: 'Sea Freight (FCL / LCL)',
    desc: 'Full Container Load and Less than Container Load shipping from JNPT / Mundra / Chennai ports.',
    lead: '25–45 days',
    best: 'Bulk orders 500+ units',
  },
  {
    icon: Globe,
    mode: 'Air Freight',
    desc: 'DHL / FedEx / UPS express airfreight from Jaipur for urgent sample orders and time-critical shipments.',
    lead: '5–10 days',
    best: 'Samples & urgent orders',
  },
  {
    icon: Truck,
    mode: 'Road Freight (South Asia)',
    desc: 'Direct road cargo to Nepal, Bhutan, Bangladesh, Sri Lanka (via feeder), and other SAARC nations.',
    lead: '7–15 days',
    best: 'SAARC / neighbouring markets',
  },
];

const oemServices = [
  {
    icon: Star,
    title: 'Private Label & OEM Branding',
    desc: 'Full white-label manufacturing with your brand name, logo, and colour scheme on products and packaging.',
  },
  {
    icon: ClipboardList,
    title: 'Custom Specification Engineering',
    desc: 'Beam angles, colour temperatures, voltages, ingress ratings, and control protocols customised to your market standards.',
  },
  {
    icon: FileText,
    title: 'Country-Specific Certifications',
    desc: 'Assistance with SASO (Saudi), ESMA (UAE), KEBS (Kenya), PS Mark (Philippines), and other market-specific approvals.',
  },
  {
    icon: Package,
    title: 'Custom Packaging & Retail-Ready',
    desc: 'Full-colour retail box design, multilingual inserts, QR-code traceability, and pallet optimisation for your distribution chain.',
  },
];

const procurementSteps = [
  { step: '01', title: 'Send RFQ', desc: 'Share product models, quantities, destination port, and required lead time.' },
  { step: '02', title: 'Proforma Invoice', desc: 'Receive a detailed PI with unit pricing, FOB/CIF terms, and HS codes within 24 hours.' },
  { step: '03', title: 'Sample Order', desc: 'Request pre-production samples for quality verification before bulk commitment.' },
  { step: '04', title: 'Production & QC', desc: 'Factory production with inline quality inspection. Video QC reports shared on request.' },
  { step: '05', title: 'Shipment & Docs', desc: 'Complete export documentation, booking confirmation, and tracking shared in real time.' },
];

const colorBorderMap: Record<string, string> = {
  amber: 'border-amber-500/30 hover:border-amber-400/50',
  emerald: 'border-emerald-500/30 hover:border-emerald-400/50',
  cyan: 'border-cyan-500/30 hover:border-cyan-400/50',
};
const colorBadge: Record<string, string> = {
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
};

export default function ProcurementPage() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] radial-beam pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>INTERNATIONAL EXPORT & B2B PROCUREMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-mono leading-none">
            Global{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(251,191,36,0.4)]">
              LED Procurement
            </span>
            {' '}Made Simple
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed">
            Factory-direct international procurement of TakewayLED's full commercial and industrial LED range — with full export documentation, CE / RoHS compliance, flexible MOQs, and dedicated export account management. We ship to 30+ countries across the Middle East, Africa, Southeast Asia, and Europe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=procurement#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Export Price Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20would%20like%20to%20get%20an%20export%20price%20quote%20(Proforma%20Invoice)%20for%20international%20shipment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-400/50 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass-panel p-4 rounded-xl border border-zinc-800 text-center">
                <div className={`text-2xl sm:text-3xl font-black font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOURCE FROM US */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center">
              <Factory className="w-3.5 h-3.5 mr-1.5" />
              Why Source From TakewayLED
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Direct Factory Access. <br />
              <span className="text-cyan-400">Zero Middlemen.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              As a direct manufacturer in Jaipur, India, we eliminate distributor margins and provide you with the most competitive ex-factory pricing with full visibility into production, quality control, and logistics — from the moment you send your RFQ to the moment cargo arrives at your port.
            </p>
            <ul className="space-y-3">
              {[
                'Factory-direct pricing with no agent commission layers',
                'CE / RoHS / ISO 9001:2015 certified product range',
                'Full export documentation prepared in-house',
                'Flexible MOQ starting from 500 units per model',
                'OEM / ODM private label manufacturing available',
                'Dedicated export account manager assigned per customer',
                'Escrow / LC / TT / Payoneer payment methods accepted',
                'Pre-shipment QC reports and factory inspection facilitated',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300 font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Certifications / Trust Panel */}
          <div className="space-y-5">
            <div className="glass-panel p-6 rounded-2xl border border-zinc-700 space-y-5">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider border-b border-zinc-800 pb-3">
                Export Credentials & Compliance
              </div>
              {[
                { icon: ShieldCheck, label: 'CE Conformity', desc: 'EN 60598-1 & EN 55015 — full CE declaration of conformity for EU/EEA imports' },
                { icon: ShieldCheck, label: 'RoHS Directive 2011/65/EU', desc: 'All products free of Lead, Mercury, Cadmium, and restricted substances' },
                { icon: Landmark, label: 'ISO 9001:2015 Certified', desc: 'Quality management system certified for consistent manufacturing standards' },
                { icon: FileText, label: 'GST / IEC Registered Exporter', desc: 'DGFT IEC code holder, LUT registered, GST-compliant international invoicing' },
              ].map((cred) => {
                const Icon = cred.icon;
                return (
                  <div key={cred.label} className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-mono">{cred.label}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{cred.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Export Documents Checklist */}
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Standard Export Document Set
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {exportDocs.map((doc) => (
                  <div key={doc} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-xs text-zinc-300 font-mono">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGION CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              Export Markets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Where We Export
            </h2>
            <p className="mt-3 text-zinc-400 text-sm max-w-2xl">
              Our LED products are exported to buyers across four major international regions, with dedicated pricing tiers, documentation support, and logistics coordination for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div
                key={r.region}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01] ${colorBorderMap[r.color]}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl mb-1">{r.icon}</div>
                    <h3 className="text-lg font-black font-mono text-white">{r.region}</h3>
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${colorBadge[r.color]}`}>
                    Active Market
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{r.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  {r.markets.map((m) => (
                    <span key={m} className="text-xs font-mono text-zinc-300 bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPING OPTIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center">
            <Truck className="w-3.5 h-3.5 mr-1.5" />
            Logistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            Shipping & Delivery Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shippingOptions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.mode} className="glass-panel rounded-2xl p-6 border border-zinc-800 hover:border-cyan-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {s.mode}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">{s.desc}</p>
                <div className="space-y-2 border-t border-zinc-800 pt-4">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Lead Time</span>
                    <span className="text-amber-400 font-bold">{s.lead}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Best For</span>
                    <span className="text-zinc-300">{s.best}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OEM / PRIVATE LABEL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center">
              <Package className="w-3.5 h-3.5 mr-1.5" />
              OEM & Private Label
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              Build Your Brand on Our Platform
            </h2>
            <p className="mt-3 text-zinc-400 text-sm max-w-2xl">
              Full OEM / ODM manufacturing support for international buyers who want to market our products under their own brand name in their home market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {oemServices.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="glass-panel rounded-2xl p-5 border border-zinc-800 hover:border-amber-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-sm font-bold font-mono text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCUREMENT PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
            Procurement Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            From RFQ to Your Doorstep
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {procurementSteps.map((p) => (
              <div key={p.step} className="relative text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-700 group-hover:border-amber-500/60 flex items-center justify-center mb-4 transition-all duration-300">
                  <span className="text-xl font-black font-mono text-amber-400">{p.step}</span>
                </div>
                <h4 className="text-sm font-bold font-mono text-white mb-2">{p.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>START YOUR INTERNATIONAL ORDER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Ready to Source at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
              Factory Prices?
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Send us your product list and quantity requirements. Our export team will respond with a Proforma Invoice and shipment plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=procurement#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Get Export Price Quote
            </Link>
            <a
              href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20would%20like%20to%20get%20an%20export%20price%20quote%20(Proforma%20Invoice)%20for%20international%20shipment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-400/50 transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

