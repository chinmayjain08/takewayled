'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitRfq } from '@/app/actions/product-actions';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function RfqForm() {
  const searchParams = useSearchParams();
  const inquiryType = searchParams.get('type');
  const isConsulting = inquiryType === 'consulting';
  const isProcurement = inquiryType === 'procurement';

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
      setError(res.error || 'Failed to submit inquiry. Please try again or message via WhatsApp.');
    }
  };

  const formBadge = isConsulting
    ? 'ENGINEERING CONSULTING & DIALUX DESIGN'
    : isProcurement
    ? 'INTERNATIONAL EXPORT & PRICE QUOTE'
    : null;

  const formTitle = isConsulting
    ? 'Book Project Consultation & Design'
    : isProcurement
    ? 'Get Export Price Quote (Proforma Invoice)'
    : 'Request Formal Specification Quotation (RFQ)';

  const formDesc = isConsulting
    ? 'Share your project parameters below. Our engineering team will review your site drawings, run Dialux lux simulations, and prepare detailed BOQ specifications.'
    : isProcurement
    ? 'Specify the models and quantities needed. Our export desk will prepare an official Proforma Invoice with FOB/CIF terms, CE/RoHS documents, and dispatch timelines within 24 hours.'
    : 'Submissions are permanently recorded in our enterprise CRM and delivered directly to our Jaipur engineering desk.';

  const projectPlaceholder = isConsulting
    ? 'Describe project type (roadway, stadium, warehouse, architectural facade), mounting height, lux requirements, target timeline, or attach link to CAD drawings...'
    : isProcurement
    ? 'Specify product models, estimated quantities, destination port / country, preferred trade terms (FOB Jaipur / CIF destination), and voltage requirements...'
    : 'Specify mounting height, lux requirement, target CCT (3000K/4000K/5700K), driver preference (Mean Well/Inventronics), delivery location...';

  const defaultCategory = isConsulting
    ? 'Engineering Consulting & Dialux'
    : isProcurement
    ? 'International Export & OEM'
    : 'Commercial Flood & Stadium';

  const submitButtonLabel = isConsulting
    ? 'Submit Consultation Request →'
    : isProcurement
    ? 'Request Export Price Quote (PI) →'
    : 'Submit Formal RFQ Proposal →';

  if (submittedRfq) {
    return (
      <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-emerald-500/40 space-y-6 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
            {isConsulting ? 'Consultation Request Registered' : isProcurement ? 'Export Inquiry Registered' : 'RFQ Received & Registered'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
            Thank you, {submittedRfq.company_name}!
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
            Your inquiry has been recorded under reference{' '}
            <code className="text-cyan-400 font-mono font-bold bg-zinc-900 px-2 py-0.5 rounded">
              #{submittedRfq.id.slice(0, 8).toUpperCase()}
            </code>
            . Our {isProcurement ? 'international export desk' : 'engineering team'} will review your requirements.
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
            Forward to WhatsApp for Immediate Response
          </a>

          <button
            onClick={() => setSubmittedRfq(null)}
            className="px-5 py-3.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
          >
            Submit Another Request
          </button>
        </div>

        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-center space-x-2 text-[11px] font-mono text-zinc-500">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Average engineering response time: &lt; 2 business hours</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-panel p-8 sm:p-10 rounded-2xl border space-y-6 transition-all ${
      isConsulting ? 'border-cyan-500/40 shadow-cyan-glow' : isProcurement ? 'border-amber-500/40 shadow-[0_0_25px_rgba(251,191,36,0.15)]' : 'border-zinc-800'
    }`}>
      <div>
        {formBadge && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono mb-3">
            <Sparkles className={`w-3 h-3 ${isConsulting ? 'text-cyan-400' : 'text-amber-400'}`} />
            <span className={isConsulting ? 'text-cyan-400' : 'text-amber-400'}>{formBadge}</span>
          </div>
        )}
        <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
          {formTitle}
        </h2>
        <p className="mt-1 text-xs text-zinc-400 font-sans leading-relaxed">
          {formDesc}
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
            <label className="block text-zinc-300 mb-1">Primary Scope / Category *</label>
            <select
              name="category"
              defaultValue={defaultCategory}
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white focus:outline-none transition-colors"
            >
              {isConsulting && (
                <option value="Engineering Consulting & Dialux">Engineering Consulting & Dialux Simulation</option>
              )}
              {isProcurement && (
                <option value="International Export & OEM">International Export & OEM Private Label</option>
              )}
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
            <label className="block text-zinc-300 mb-1">Estimated Quantity / Scope *</label>
            <select
              name="quantity"
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white focus:outline-none transition-colors"
            >
              {isConsulting ? (
                <>
                  <option value="Single Site Project">Single Site Project / Facility</option>
                  <option value="Multi-Site Campus / Rollout">Multi-Site Campus / Rollout</option>
                  <option value="Municipal / Government Tender">Municipal / Government Tender</option>
                  <option value="Annual Consulting Retainer">Annual Consulting / Advisory</option>
                </>
              ) : isProcurement ? (
                <>
                  <option value="Sample Order (1 - 10 pcs)">Sample Order (1 - 10 pcs)</option>
                  <option value="Trial Batch (50 - 200 pcs)">Trial Batch (50 - 200 pcs)</option>
                  <option value="Partial Container / LCL (200 - 500 pcs)">Partial Container / LCL (200 - 500 pcs)</option>
                  <option value="Full Container Load / FCL (1000+ pcs)">Full Container Load / FCL (1000+ pcs)</option>
                </>
              ) : (
                <>
                  <option value="Sample Evaluation Unit (1-5 pcs)">Sample Evaluation Unit (1 - 5 pcs)</option>
                  <option value="Small Batch (20 - 100 pcs)">Small Batch (20 - 100 pcs)</option>
                  <option value="Project Contract (100 - 500 pcs)">Project Contract (100 - 500 pcs)</option>
                  <option value="Full Container Load (1000+ pcs)">Full Container Load (1000+ pcs)</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-zinc-300 mb-1">Project Details & Requirements</label>
          <textarea
            name="project_details"
            rows={4}
            placeholder={projectPlaceholder}
            className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors font-sans"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-xs font-mono font-bold text-zinc-950 transition-all cursor-pointer disabled:opacity-50 ${
              isProcurement
                ? 'bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                : 'bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow'
            }`}
          >
            {loading ? (
              <span>Submitting to Database...</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {submitButtonLabel}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

