import { ArrowUpRight, Compass, Layers3, Orbit } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

export default function BrandSection() {
  return (
    <section id="brand" className="section-container scroll-mt-24 py-12 sm:py-20">
      <SectionReveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/25 bg-space-900 p-7 shadow-[0_30px_100px_-55px_rgba(0,102,255,0.65)] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 blue-grid opacity-30" />
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-electric/15 blur-[100px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="section-kicker mb-3">The Professional Umbrella Brand</p>
              <h2 className="section-title max-w-2xl">Behind <span className="text-electric-light">Jehan Project</span></h2>
              <p className="mt-3 font-display text-lg font-semibold text-gold-light sm:text-xl">Structured Systems, Impactful Solutions</p>
              <p className="section-copy mt-5 max-w-2xl text-sm sm:text-base">
                Jehan Project adalah identitas dan wadah profesional yang saya bangun sebagai payung eksplorasi di bidang IT Project Management, Systems Architecture, dan Web Development. Mengusung filosofi &apos;Structured Systems, Impactful Solutions&apos;, Jehan Project merepresentasikan komitmen saya sebagai talenta junior untuk terus belajar, berinovasi, dan menghadirkan solusi digital yang efisien, terstruktur, serta tepat guna.
              </p>
              <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-electric-light transition hover:text-white">
                Lihat karya pilihan <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-3">
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className="rounded-3xl border border-electric/20 bg-space-950/80 p-5">
                <Compass className="mb-8 text-electric-light" size={24} />
                <p className="text-xs font-bold text-white">Intentional</p>
                <p className="mt-1 text-[10px] leading-5 text-slate-500">Mulai dari kebutuhan yang tepat.</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.04 }} className="mt-8 rounded-3xl border border-gold/20 bg-space-950/80 p-5">
                <Layers3 className="mb-8 text-gold" size={24} />
                <p className="text-xs font-bold text-white">Structured</p>
                <p className="mt-1 text-[10px] leading-5 text-slate-500">Menyusun proses dan sistem.</p>
              </motion.div>
              <div className="col-span-2 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <Orbit className="shrink-0 text-electric-light" size={19} />
                <p className="text-xs leading-5 text-slate-400">Belajar, berkolaborasi, lalu membangun dampak secara bertahap.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
