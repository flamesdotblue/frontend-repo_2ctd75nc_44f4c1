import { motion } from 'framer-motion';

const stats = [
  { label: 'Donors Connected', value: '20,000+' },
  { label: 'Hospitals Onboarded', value: '250+' },
  { label: 'Avg. Match Time', value: '< 5 min' },
  { label: 'Districts Covered', value: '77' },
];

export default function Stats() {
  return (
    <section className="relative bg-[#0e0e11] py-20 text-white">
      {/* flowing blood cells */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-24 w-24 animate-[float_8s_ease-in-out_infinite] rounded-full bg-[#C71F37]/30 blur-2xl" />
        <div className="absolute left-1/3 top-1/2 h-16 w-16 animate-[float_7s_ease-in-out_infinite] rounded-full bg-[#C71F37]/20 blur-xl" />
        <div className="absolute right-10 top-20 h-20 w-20 animate-[float_9s_ease-in-out_infinite] rounded-full bg-emerald-400/20 blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by hospitals nationwide</h2>
          <p className="mt-3 text-white/60">Real-time connections that save lives every day.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
            >
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C71F37] to-emerald-400">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
