'use client';

import { useState } from 'react';
import { submitRfq } from '@/app/actions/product-actions';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function RfqForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submittedRfq, setSubmittedRfq] = useState<{
    id: string;
    company_name: string;
    whatsappUrl: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const res = await submitRfq(formData);

    setLoading(false);

    if (res.success && res.rfq) {
      setSubmittedRfq({
        id: res.rfq.id,
        company_name: res.rfq.company_name,
        whatsappUrl: res.whatsappUrl || '',
      });
    } else {
      setError(res.error || 'Failed to submit RFQ. Please try again or message via WhatsApp.');
    }
  };

  if (submittedRfq) {
    return (
      <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-emerald-500/40 space-y-6 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
            RFQ Received & Registered
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
            Thank you, {submittedRfq.company_name}!
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
            Your quotation request has been recorded in our factory system under reference{' '}
            <code className="text-cyan-400 font-mono font-bold bg-zinc-900 px-2 py-0.5 rounded">
              #{submittedRfq.id.slice(0, 8).toUpperCase()}
            </code>
            . Our engineering sales desk in Jaipur will review your specifications.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={submittedRfq.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Forward Specs to WhatsApp for Priority Review
          </a>

          <button
            onClick={() => setSubmittedRfq(null)}
            className="px-5 py-3.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
          >
            Submit Another RFQ
          </button>
        </div>

        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-center space-x-2 text-[11px] font-mono text-zinc-500">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Average technical proposal turnaround: &lt; 2 business hours</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-zinc-800 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
          Request Formal Specification Quotation (RFQ)
        </h2>
        <p className="mt-1 text-xs text-zinc-400 font-sans">
          Submissions are permanently recorded in our enterprise CRM and delivered directly to our Jaipur engineering desk.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 flex items-center space-x-2 text-xs font-mono text-red-300">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-300 mb-1">Company / Organization *</label>
            <input
              type="text"
              name="company_name"
              required
              placeholder="e.g. Apex Electrical Contractors Ltd"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Contact Person Name *</label>
            <input
              type="text"
              name="contact_name"
              required
              placeholder="e.g. Rajesh Sharma"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-300 mb-1">Work Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="procurement@company.com"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Phone / WhatsApp *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98290 00000"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-300 mb-1">Primary Luminaire Category *</label>
            <select
              name="category"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white focus:outline-none transition-colors"
            >
              <option value="Commercial Flood & Stadium">Commercial Floodlights & Stadium (50W - 1000W)</option>
              <option value="Industrial High Bays & UFO">Industrial High Bays & UFO (50W - 200W)</option>
              <option value="Roadway & Dolphin Street Lights">Roadway & Dolphin Street Lights (AC)</option>
              <option value="Solar Integrated Street Lights">Solar Integrated All-in-One Luminaires</option>
              <option value="Architectural Wall Washers">Architectural DMX Wall Washers & Facade</option>
              <option value="Underwater Pool & Fountain">Underwater Pool & Fountain Lights</option>
              <option value="Custom OEM / SPD">Custom OEM Optical Development / SPDs</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Estimated Quantity *</label>
            <select
              name="quantity"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white focus:outline-none transition-colors"
            >
              <option value="Sample Evaluation Unit (1-5 pcs)">Sample Evaluation Unit (1 - 5 pcs)</option>
              <option value="Small Batch (20 - 100 pcs)">Small Batch (20 - 100 pcs)</option>
              <option value="Project Contract (100 - 500 pcs)">Project Contract (100 - 500 pcs)</option>
              <option value="Full Container Load (1000+ pcs)">Full Container Load (1000+ pcs)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 mb-1">Project Technical Specifications</label>
          <textarea
            name="project_details"
            rows={4}
            placeholder="Specify mounting height, lux requirement, target CCT (3000K/4000K/5700K), driver preference (Mean Well/Inventronics), delivery location..."
            className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Submitting RFQ to Database...</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Formal RFQ Proposal →
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
