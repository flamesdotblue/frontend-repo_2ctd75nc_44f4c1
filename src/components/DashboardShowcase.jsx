import { motion } from 'framer-motion';
import { MapPin, Droplets, ShieldCheck, Activity, MessageCircle } from 'lucide-react';

export default function DashboardShowcase() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#0e0e11] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-[#C71F37]/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">A dashboard made for action</h2>
          <p className="mt-3 text-white/70">Donor & Seeker views with real-time data, emergency requests, and a live map of Nepal.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Donor/Seeker profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-1"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#C71F37]/20 ring-1 ring-[#C71F37]/40">
                  <Droplets className="h-6 w-6 text-[#C71F37]" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Anisha K.</div>
                  <div className="text-xs text-white/60">Donor • O+ • Kathmandu</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs">Verified</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-white/60">Donations</div>
                <div className="text-lg font-bold">6</div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-white/60">Availability</div>
                <div className="text-lg font-bold text-emerald-300">Open</div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-white/60">Last</div>
                <div className="text-lg font-bold">28d</div>
              </div>
            </div>
          </motion.div>

          {/* Map + pins mock */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1115] to-[#12151a] p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-white/70">Live Map • Nepal</div>
              <div className="text-xs text-white/50">Mock view</div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,_#0f1216_0%,_#0c0f13_100%)]">
              {/* Glowing heartbeat path */}
              <svg className="absolute inset-x-0 top-8 mx-auto h-40 w-[90%] opacity-80" viewBox="0 0 1000 200" fill="none">
                <defs>
                  <linearGradient id="hb" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C71F37" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <path d="M0 100 L150 100 L180 40 L210 150 L240 100 L400 100 L430 50 L460 150 L490 100 L700 100 L730 60 L760 140 L790 100 L1000 100" stroke="url(#hb)" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {/* Pins */}
              <Pin left="18%" top="22%" label="Pokhara" />
              <Pin left="44%" top="28%" label="Kathmandu" highlight />
              <Pin left="66%" top="48%" label="Biratnagar" />
            </div>
          </motion.div>

          {/* Emergency feed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-semibold">Emergency Requests</div>
              <div className="text-xs text-white/60">Live</div>
            </div>
            <div className="space-y-3">
              {[
                { city: 'Kathmandu', type: 'A+', time: '2 min ago' },
                { city: 'Lalitpur', type: 'O-', time: '5 min ago' },
                { city: 'Birgunj', type: 'B+', time: '9 min ago' },
              ].map((r) => (
                <div key={r.city + r.type} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#170f12]/60 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#C71F37]/40" />
                      <span className="relative block h-3 w-3 rounded-full bg-[#C71F37] shadow-[0_0_16px_#C71F37]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{r.type} needed urgently</div>
                      <div className="text-xs text-white/60">{r.city}</div>
                    </div>
                  </div>
                  <button className="rounded-xl bg-white/10 px-3 py-1 text-sm text-white/90 transition hover:bg-white/20">Respond</button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chat/analytics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-white/80"><MessageCircle className="h-4 w-4" /> Notifications</div>
              <div className="flex items-center gap-2 text-sm text-white/80"><Activity className="h-4 w-4" /> Analytics</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#14161c] p-4">
                <div className="text-xs text-white/60">New messages</div>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Hospital verified your donor badge</div>
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#C71F37]" /> Request matched in Kathmandu</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#14161c] p-4">
                <div className="text-xs text-white/60">Today</div>
                <div className="mt-2 h-24 w-full rounded-lg bg-gradient-to-r from-[#C71F37]/40 to-emerald-400/40" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C71F37] to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(199,31,55,0.35)] transition hover:opacity-95">
                Get started — Become a Life Saver
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pin({ left, top, label, highlight }) {
  return (
    <div className="absolute" style={{ left, top }}>
      <div className={`group relative -translate-x-1/2 -translate-y-1/2`}>
        <div className={`absolute -inset-2 rounded-full ${highlight ? 'bg-[#C71F37]/20' : 'bg-emerald-400/10'} blur-lg`} />
        <div className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur`}> 
          <span className={`grid h-5 w-5 place-items-center rounded-full ring-1 ${highlight ? 'bg-[#C71F37] ring-[#C71F37]/50' : 'bg-emerald-400 ring-emerald-400/40'}`}></span>
          <span className="text-xs text-white/80">
            <MapPin className="mr-1 inline-block h-3 w-3" /> {label}
          </span>
        </div>
      </div>
    </div>
  );
}
