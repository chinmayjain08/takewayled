'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hi TakewayLED Team (Aasma Enterprises), I am looking for commercial LED / Solar lighting fixtures for an upcoming project. Please share your product catalog and B2B wholesale pricing.'
  );
  const whatsappUrl = `https://wa.me/918766616660?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs rounded-xl bg-zinc-900 border border-emerald-500/40 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Direct Engineering Desk
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed mb-3">
            Speak directly with our photometric engineers for custom IES simulations, OEM requirements, and wholesale volume pricing.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2 px-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs font-bold transition-colors"
          >
            Start WhatsApp Chat →
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Direct WhatsApp Inquiry"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping opacity-75 group-hover:opacity-100" />
        <MessageCircle className="relative w-7 h-7 text-zinc-950 fill-zinc-950" />
      </a>
    </div>
  );
}
