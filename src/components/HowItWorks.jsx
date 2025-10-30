import { motion } from 'framer-motion';
import { UserPlus, BellRing, Link as LinkIcon } from 'lucide-react';

const steps = [
  {
    title: 'Register',
    desc: 'Create your profile with blood type and location. Verify to earn a trust badge.',
    icon: UserPlus,
    gradient: 'from-[#C71F37]/80 to-rose-500/50',
  },
  {
    title: 'Request',
    desc: 'Seekers post an urgent request. Donors nearby get instant notifications.',
    icon: BellRing,
    gradient: 'from-emerald-400/80 to-teal-400/50',
  },
  {
    title: 'Connect',
    desc: 'Chat securely and confirm details with hospitals for quick coordination.',
    icon: LinkIcon,
    gradient: 'from-fuchsia-500/60 to-indigo-500/40',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#0b0b0d] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-[#C71F37]/30 blur-3xl" />
        <div className="absolute right-1/5 bottom-0 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">
            A seamless, life-saving flow designed with compassion and modern tech.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl transition group-hover:scale-125`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
