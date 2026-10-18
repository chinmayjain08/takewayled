'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ShieldAlert, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Authentication failed');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Invalid secret token. Please check .env.local');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full glass-panel-cyan p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center space-y-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-cyan-glow">
            <Lock className="w-6 h-6 text-cyan-400" />
          </div>
          <h1 className="text-2xl font-black font-mono text-white tracking-tight">
            TAKEWAY<span className="text-cyan-400">LED</span> ADMIN
          </h1>
          <p className="text-xs font-mono text-zinc-400">
            Internal Operations & Product Inventory Control
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-950/50 border border-red-500/40 flex items-center space-x-2 text-xs font-mono text-red-300">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
              Admin Secret Access Token
            </label>
            <input
              type="password"
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter ADMIN_SECRET_TOKEN..."
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400 rounded-lg p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-mono"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider shadow-cyan-glow transition-all flex items-center justify-center disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Access Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-[11px] font-mono text-zinc-400">
            Protected via secure environment secret verification.
          </p>
        </div>
      </div>
    </div>
  );
}
