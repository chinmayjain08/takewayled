import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import RfqForm from '@/components/RfqForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          <span>Global Factory Sales & Photometric Engineering</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight uppercase">
          Direct B2B Inquiries & Quotations
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          Request volume pricing, customized optical beam configurations, Dialux simulation lux maps, or OEM/ODM manufacturing partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick WhatsApp Priority Card */}
          <div className="glass-panel-cyan p-6 rounded-2xl border border-emerald-500/30 space-y-4 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase font-bold">Fastest Response</div>
                <div className="text-base font-bold text-white font-mono">Direct WhatsApp Hotline</div>
              </div>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Connect with our project sales engineers in Jaipur directly. Wholesale quotations, dealer pricing, and dispatch details provided promptly.
            </p>
            <a
              href="https://wa.me/918766616660?text=Hi%20TakewayLED%20Team%2C%20I%20have%20an%20urgent%20commercial%20lighting%20quotation%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Sales Desk (+91 87666 16660)
            </a>
          </div>

          {/* Factory Information */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4">
            <h3 className="text-sm font-mono font-bold text-white uppercase border-b border-zinc-800 pb-3">
              Manufacturer Headquarters & Facility
            </h3>
            <div className="space-y-4 text-xs font-mono text-zinc-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Registered Address (Aasma Enterprises):</div>
                  <div className="text-zinc-400 mt-0.5">E-116, Vishwas Path, Ajmer Road, Nirman Nagar, Jaipur, Rajasthan 302019, India</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Direct Quotation Email:</div>
                  <a href="mailto:takewayled@gmail.com" className="text-cyan-400 hover:underline mt-0.5 block">
                    takewayled@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">GST Identification Number:</div>
                  <div className="text-zinc-200 mt-0.5 font-bold">08AAQFA5328K1Z2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Strip */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center space-x-3 text-xs font-mono text-zinc-300">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>FOB / CIF / DDP International Trade Terms Supported with SGS Inspection Certification.</span>
          </div>
        </div>

        {/* Right: RFQ Form */}
        <div id="quote" className="lg:col-span-7 scroll-mt-24">
          <RfqForm />
        </div>
      </div>
    </div>
  );
}
