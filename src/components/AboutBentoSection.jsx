import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Building2, 
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import TiltCard from './TiltCard';

// Animated Number Counter Component
function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    const totalSteps = 40;
    const increment = end / totalSteps;
    const stepTime = duration / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500">
      {count}{suffix}
    </span>
  );
}

export default function AboutBentoSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>ABOUT & BACKGROUND</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white"
        >
          Architecting Systems, <br className="hidden sm:block" />
          <span className="text-shimmer">Empowering Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto"
        >
          Kombinasi antara kepemimpinan manajerial, kecakapan analitis rekayasa perangkat lunak, dan tata kelola teknologi informasi.
        </motion.p>
      </div>

      {/* Bento Grid Layout (4 Main Modules) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* 1. Card Profile Summary (Span 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7"
        >
          <TiltCard glowColor="electric" className="p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10 hover:border-cyan-400/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                  Profile Overview
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                Farjehan Alaraf
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Mahasiswa <span className="text-cyan-300 font-semibold">Sistem Informasi UIN Imam Bonjol Padang (Angkatan 2024)</span> yang mengombinasikan keahlian manajemen proyek TI (Agile/Scrum), pengembangan web full-stack modern (CodeIgniter 3/4, Laravel, React), tata kelola sistem terpadu, serta dasar keamanan siber dan analitik data.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Fokus utama berakar pada penciptaan nilai bisnis nyata: menerjemahkan kebutuhan operasional lapangan ke dalam arsitektur sistem perangkat lunak yang scalable, terstruktur, dan aman.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              {[
                { label: 'Agile & Scrum Leadership', color: 'text-cyan-300 bg-cyan-950/40 border-cyan-800' },
                { label: 'Full-Stack Web Dev', color: 'text-blue-300 bg-blue-950/40 border-blue-800' },
                { label: 'System Analysis & SPK', color: 'text-yellow-300 bg-yellow-950/40 border-yellow-800' },
                { label: 'Cybersecurity Foundations', color: 'text-emerald-300 bg-emerald-950/40 border-emerald-800' },
              ].map((pill, idx) => (
                <span key={idx} className={`text-xs px-2.5 py-1 rounded-md border font-mono ${pill.color}`}>
                  {pill.label}
                </span>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* 2. Card Education (Span 5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5"
        >
          <TiltCard glowColor="gold" className="p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10 hover:border-yellow-400/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-space-950 shadow-lg shadow-yellow-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-yellow-950/60 text-yellow-300 border border-yellow-800/60">
                  Higher Education
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                S1 Sistem Informasi
              </h3>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>UIN Imam Bonjol Padang</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 text-xs font-mono mb-4 border border-white/10">
                <Calendar className="w-3 h-3 text-gold" />
                <span>2024 – Sekarang (Aktif)</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Mempelajari rekayasa perangkat lunak, sistem basis data relasional & terdistribusi, manajemen proyek teknologi informasi, arsitektur enterprise, serta tata kelola teknologi informasi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Mahasiswa Aktif</span>
              <span className="text-yellow-400 font-bold">FST UIN IB</span>
            </div>
          </TiltCard>
        </motion.div>

        {/* 3. Card Experience Timeline (Span 8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-8"
        >
          <TiltCard glowColor="electric" className="p-6 sm:p-8 h-full border border-white/10 hover:border-cyan-400/40">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Experience & Leadership Timeline
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Track Record & Kontribusi</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 hidden sm:inline-block">
                Chronological
              </span>
            </div>

            {/* Timeline Items */}
            <div className="relative border-l-2 border-cyan-500/30 ml-3 space-y-6 pl-6 my-2">
              
              {/* Item 1: Toko Mira Plastik */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-space-950 shadow-[0_0_10px_#00D2FF]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Project Manager & Developer – Toko Mira Plastik
                  </h4>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 w-fit">
                    2024 – Sekarang
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Rancang Bangun Sistem Informasi Manajemen Operasional Terintegrasi Toko Mira Plastik. Memimpin siklus pengembangan mulai dari analisis kebutuhan, perancangan database MySQL, implementasi CodeIgniter/Tailwind, hingga deployment.
                </p>
              </div>

              {/* Item 2: SEMA FST UIN IB */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-yellow-400 border-2 border-space-950 shadow-[0_0_10px_#FFD700]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Pengurus / Anggota – Senat Mahasiswa (SEMA) FST UIN IB
                  </h4>
                  <span className="text-[11px] font-mono text-yellow-300 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-800/40 w-fit">
                    2024 – Sekarang
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Aktif dalam keorganisasian legislatif mahasiswa, pengawasan kebijakan organisasi fakultas, serta lulusan Sekolah Legislatif tingkat Universitas.
                </p>
              </div>

              {/* Item 3: KBS & SPK */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-space-950 shadow-[0_0_10px_#0066FF]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Web Developer & System Analyst – KBS & SPK Systems
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/10 w-fit">
                    Project-Based
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Mengembangkan Knowledge-Based System pemetaan kompetensi mahasiswa berbasis metode Forward Chaining & Certainty Factor, serta Sistem Pendukung Keputusan Pemilihan Laptop (metode SAW).
                </p>
              </div>

            </div>
          </TiltCard>
        </motion.div>

        {/* 4. Card Counter Stats (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-4"
        >
          <TiltCard glowColor="gold" className="p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10 hover:border-yellow-400/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-yellow-950/60 text-yellow-300 border border-yellow-800/60">
                  Verified Stats
                </span>
              </div>

              {/* 3 Metric counters */}
              <div className="space-y-6">
                
                {/* Metric 1 */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-baseline gap-2">
                    <AnimatedCounter target={5} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    Completed Projects
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Enterprise SIM, KBS & SPK
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-baseline gap-2">
                    <AnimatedCounter target={1} suffix="+ Years" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    PM & Dev Experience
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Agile Leadership & Full-Stack
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-baseline gap-2">
                    <AnimatedCounter target={6} suffix=" Verified" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    Certificates & Credentials
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Cisco, Fortinet, UIN IB, SEMA
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-cyan-300 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Continuous Growth & Learning
              </span>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
