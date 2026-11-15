import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  BarChart3,
  Lightbulb,
  Map,
  ClipboardList,
  PhoneCall,
  MessageCircle,
  Building2,
  ShieldCheck,
  Globe,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Engineering & Project Consulting | TakewayLED',
  description:
    'Expert LED lighting engineering consulting, Dialux lux design, project specification writing, and energy audit services for large-scale commercial, industrial, and municipal projects.',
};

const expoImages = [
  {
    src: '/consulting/expo-reliance.jpg',
    caption: 'Reliance New Energy Summit',
    tag: 'Energy Industry Expo',
  },
  {
    src: '/consulting/expo-alpex-solar.jpg',
    caption: 'Alpex Solar & Goldi Solar Pavilion',
    tag: 'Solar Technology Forum',
  },
  {
    src: '/consulting/expo-ntpc.jpg',
    caption: 'NTPC Power Infrastructure Meet',
    tag: 'Bharat RE Summit & Expo',
  },
  {
    src: '/consulting/expo-waaree.jpg',
    caption: 'Waaree Solar Solutions Conference',
    tag: 'Renewable Energy Conclave',
  },
];

const services = [
  {
    icon: Lightbulb,
    color: 'cyan',
    title: 'Photometric Design & Dialux Simulation',
    desc:
      'Full lux-level layout simulations using DIALux Evo or AGi32 for roadways, warehouses, stadiums, campuses, and commercial interiors. Delivered with iso-lux charts, uniformity ratios, and false-color renders.',
    points: ['Road & Highway Lux Analysis (IRC compliance)', 'Industrial Facility Lighting Plans', 'Stadium & Sports Ground Photometrics', 'Facade & Architectural Mood Lighting'],
  },
  {
    icon: ClipboardList,
    color: 'amber',
    title: 'Project Specification Writing & Tender Support',
    desc:
      'Detailed technical specification documents and BOQ preparation for GEM portals, municipal tenders, and large government/corporate projects. We write specifications engineered around Takeway products to ensure fit.',
    points: ['Government Tender Documentation', 'Bill of Quantities (BOQ) Preparation', 'Technical Datasheets & Compliance Docs', 'GEM GeM Portal Listing Support'],
  },
  {
    icon: BarChart3,
    color: 'emerald',
    title: 'Energy Audit & ROI Modelling',
    desc:
      'Detailed existing-to-LED energy audit reports quantifying wattage reduction, annual kWh savings, CO₂ abatement, and financial payback period for CFO-ready sign-off.',
    points: ['Pre & Post Upgrade Power Consumption Analysis', 'Carbon Credit & PAT Scheme Alignment', 'IRR / NPV Payback Period Computation', 'ESCO & CAPEX vs OPEX Modelling'],
  },
  {
    icon: Cpu,
    color: 'cyan',
    title: 'Smart Controls & IoT Integration Consulting',
    desc:
      'Architecture design for DALI-2, 0–10V dimming, daylight harvesting, occupancy sensors, and cloud-based energy dashboards integrated with existing BMS/SCADA infrastructure.',
    points: ['DALI-2 & Wireless Mesh Network Design', 'Smart City Street Light SCADA Integration', 'Solar Hybrid Microgrid Architecture', 'BMS / SCADA Protocol Mapping'],
  },
  {
    icon: Map,
    color: 'amber',
    title: 'Site Survey & Feasibility Study',
    desc:
      'On-site or remote engineering feasibility studies covering existing infrastructure assessment, mounting structure analysis, power load assessment, and retrofit or greenfield install strategy.',
    points: ['Pole & Structural Load Assessment', 'Power Supply & Circuit Analysis', 'Retrofit vs Greenfield Comparison', 'Installation Risk & Safety Plan'],
  },
  {
    icon: Building2,
    color: 'emerald',
    title: 'Turnkey Project Coordination',
    desc:
      'End-to-end project management from design to supply to commissioning for large commercial, industrial, and infrastructure projects. Single-point accountability with dedicated project engineer.',
    points: ['Design-Build Turnkey Solutions', 'Multi-Site Rollout Coordination', 'Quality Inspection & Commissioning', 'Post-Commissioning Performance Monitoring'],
  },
];

const industries = [
  'Municipal Corporations & Smart Cities',
  'Industrial Parks & SEZs',
  'Hospitality & Hotels',
  'Real Estate Developers',
  'Solar & Renewable Energy Projects',
  'Highway & Road Authorities (NHAI / PWD)',
  'Defence & Paramilitary Establishments',
  'Airports & Rail Infrastructure',
  'Commercial Malls & Retail Chains',
  'Educational Campuses & Hospitals',
];

const stats = [
  { value: '500+', label: 'Projects Consulted', color: 'text-cyan-400' },
  { value: '12+', label: 'States Covered', color: 'text-amber-400' },
  { value: '45 MW', label: 'Lighting Capacity Specified', color: 'text-emerald-400' },
  { value: '30%', label: 'Avg. Energy Savings Achieved', color: 'text-cyan-400' },
];

const expertise = [
  { name: 'Reliance New Energy', desc: 'Energy infrastructure alignment and sustainable LED specification sessions' },
  { name: 'NTPC Power Infrastructure', desc: 'Power plant and township lighting system consulting' },
  { name: 'Goldi Solar & Alpex Solar', desc: 'Solar-LED hybrid system design and integration workshops' },
  { name: 'Waaree Energies', desc: 'Renewable energy project lighting masterplan consulting' },
];

export default function ConsultingPage() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] radial-beam pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md shadow-cyan-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ENGINEERING CONSULTING & PROJECT ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-mono leading-none">
            Expert Lighting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Engineering
            </span>
            {' '}& Project Consulting
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed">
            From photometric Dialux lux simulations to turnkey project coordination — TakewayLED's engineering team partners with architects, project managers, and procurement heads to deliver precision-specified, energy-optimised LED lighting solutions for the most demanding commercial, industrial, and infrastructure projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=consulting#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Project Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20would%20like%20to%20consult%20an%20engineer%20for%20a%20lighting%20project."
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

      {/* SERVICES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center">
            <Cpu className="w-3.5 h-3.5 mr-1.5" />
            Engineering Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            What We Offer
          </h2>
          <p className="mt-3 text-zinc-400 text-sm max-w-2xl">
            Comprehensive technical consulting across the full project lifecycle — from site survey and specification through to commissioning and post-installation performance monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            const colorMap: Record<string, string> = {
              cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
              amber: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
              emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
            };
            const textColor: Record<string, string> = { cyan: 'text-cyan-400', amber: 'text-amber-400', emerald: 'text-emerald-400' };
            return (
              <div key={svc.title} className="glass-panel rounded-2xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${colorMap[svc.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-mono text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5 flex-1">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-start space-x-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${textColor[svc.color]}`} />
                      <span className="text-xs text-zinc-300 font-mono">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPO GALLERY — FIELD EXPERTISE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1.5" />
                Industry Presence & Knowledge
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                Active at India's Premier Energy Expos
              </h2>
              <p className="mt-3 text-zinc-400 text-sm max-w-xl">
                Our engineering consultants are actively present at major renewable energy, solar, and power infrastructure expos across India — staying at the forefront of technology, standards, and industry practices.
              </p>
            </div>
            <div className="glass-panel px-6 py-4 rounded-xl border border-amber-500/20 text-xs font-mono text-amber-300 max-w-xs">
              <div className="text-amber-400 font-bold mb-1 uppercase tracking-wider">Recent Events</div>
              <div className="text-zinc-400">Bharat RE Summit & Expo 2024</div>
              <div className="text-zinc-400">Intersolar India 2024</div>
              <div className="text-zinc-400">Renewable Energy Conclave 2024</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expoImages.map((img) => (
              <div key={img.src} className="group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-cyan-500/40 transition-all duration-500">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{img.tag}</div>
                  <div className="text-sm font-bold text-white font-mono leading-snug">{img.caption}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Partners */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-sm font-bold font-mono text-white uppercase mb-5 tracking-wider">
                Industry Engagements & Collaboration
              </h3>
              <div className="space-y-3">
                {expertise.map((e) => (
                  <div key={e.name} className="flex items-start space-x-3 glass-panel p-4 rounded-xl border border-zinc-800">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white font-mono">{e.name}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{e.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold font-mono text-white uppercase mb-5 tracking-wider">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center space-x-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="font-mono text-xs">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center justify-center">
            <ClipboardList className="w-3.5 h-3.5 mr-1.5" />
            Engagement Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            How We Engage
          </h2>
        </div>

        <div className="relative">
          {/* Line connector */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Brief Submission', desc: 'Share your project scope, area, and objectives via WhatsApp or inquiry form.' },
              { step: '02', title: 'Site/Requirement Analysis', desc: 'Our engineers review drawings, power data, and existing infrastructure.' },
              { step: '03', title: 'Dialux Design & BOQ', desc: 'Full photometric simulation with lux map and itemised bill of quantities.' },
              { step: '04', title: 'Review & Specification Sign-off', desc: 'Collaborative review with your team. Revisions accommodated until approval.' },
              { step: '05', title: 'Supply & Commissioning Support', desc: 'Factory-direct supply with on-site commissioning guidance and performance docs.' },
            ].map((p, idx) => (
              <div key={p.step} className="relative text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-700 group-hover:border-cyan-500/60 flex items-center justify-center mb-4 transition-all duration-300">
                  <span className="text-xl font-black font-mono text-cyan-400">{p.step}</span>
                </div>
                <h4 className="text-sm font-bold font-mono text-white mb-2">{p.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>START YOUR PROJECT CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
            Let's Engineer Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
              Lighting Vision
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Share your project brief and our engineering team will respond within 24 hours with a preliminary feasibility assessment and next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=consulting#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Book Project Consultation
            </Link>
            <a
              href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20would%20like%20to%20consult%20an%20engineer%20for%20a%20lighting%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-400/50 transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
              WhatsApp: +91 87666 16660
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

