import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0b0b0d] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#C71F37]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#C71F37] shadow-[0_0_16px_#C71F37]" />
            <span className="text-sm text-white/80">Real-time donor & seeker connections across Nepal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          >
            Find Blood When Every Second Counts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-white/70"
          >
            A futuristic, human-centered platform connecting donors, seekers, and hospitals
            with speed, trust, and compassion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#get-started"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#C71F37] px-6 py-3 text-base font-semibold text-white shadow-[0_0_24px_rgba(199,31,55,0.45)] transition hover:bg-[#b11a2f]"
            >
              Donate Now
              <span className="h-2 w-2 rounded-full bg-white group-hover:animate-ping" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              How it works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle connecting lines overlay */}
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 w-full opacity-40" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C71F37" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path d="M0 100 C 180 50, 360 150, 540 100 S 900 50, 1080 100 1260 150, 1440 100" stroke="url(#g)" strokeWidth="2" opacity="0.5" />
      </svg>
    </section>
  );
}
