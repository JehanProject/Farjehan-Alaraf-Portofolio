import { useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Code2 } from 'lucide-react';

function DigitalIdCard() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });
  const [hovered, setHovered] = useState(false);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  const codeCells = Array.from({ length: 81 }, (_, index) => {
    const row = Math.floor(index / 9);
    const col = index % 9;
    const inFinder = (row < 3 && col < 3) || (row < 3 && col > 5) || (row > 5 && col < 3);
    const finderPixel = row % 6 === 1 || col % 6 === 1 || (row % 6 === 0 && col % 6 === 0);
    return inFinder ? finderPixel : (row * 7 + col * 11 + row * col) % 3 !== 0;
  });

  return (
    <div className="relative mx-auto w-full max-w-[16rem] [perspective:1100px] sm:max-w-[17rem]">
      <div className="id-card-lanyard absolute left-1/2 top-0 z-0 h-24 w-24 -translate-x-1/2 -translate-y-8 rounded-b-3xl border-x-[10px] border-space-950 sm:h-28" />
      <div className="absolute left-1/2 top-4 z-20 h-8 w-16 -translate-x-1/2 rounded-t-xl rounded-b-md border border-slate-300/40 bg-gradient-to-b from-slate-300 to-slate-500 shadow-lg">
        <div className="mx-auto mt-2 h-2 w-8 rounded-full bg-space-800/80" />
      </div>
      <motion.article
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={handlePointerLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={reduceMotion ? undefined : { y: hovered ? -5 : 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="relative z-10 mt-16 aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-space-800 via-space-900 to-space-950 p-3.5 shadow-2xl shadow-electric/20 sm:p-4"
      >
        <div className="pointer-events-none absolute inset-0 blue-grid opacity-40" />
        <div className="pointer-events-none absolute -right-16 top-12 h-44 w-44 rounded-full bg-electric/15 blur-3xl" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-space-900">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(255,215,0,0.9)]" />
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-200">JEHAN PROJECT</span>
            </div>
            <span className="font-mono text-[9px] text-slate-500">JP / 026</span>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden bg-space-850">
            <img
              src="/project/foto profil.jpg"
              alt="Foto Farjehan Alaraf"
              className="h-full w-full object-cover object-[center_20%]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-space-950/10" />
            <div className="absolute bottom-3 left-4 right-4">
              <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">Farjehan Alaraf</p>
              <p className="mt-1 text-[10px] font-semibold text-electric-light sm:text-xs">Tech Project Manager &amp; Systems Architect</p>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 px-4 py-3.5">
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">Information Systems</p>
              <p className="mt-1 text-xs font-medium text-slate-200">UIN Imam Bonjol Padang · 2024</p>
              <div className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold text-gold-light">
                <BadgeCheck size={12} />
                DIGITAL IDENTITY
              </div>
            </div>
            <div className="grid h-12 w-12 shrink-0 grid-cols-9 gap-[1px] rounded bg-white p-1" aria-hidden="true">
              {codeCells.map((filled, index) => (
                <span key={index} className={filled ? 'qr-pixel' : 'bg-transparent'} />
              ))}
            </div>
          </div>
          <div className="barcode-lines mx-4 mb-3 h-2 opacity-70" aria-hidden="true" />
        </div>
      </motion.article>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-1/3 z-20 hidden items-center gap-2 rounded-xl border border-electric/25 bg-space-900/90 px-3 py-2 shadow-xl backdrop-blur sm:flex"
      >
        <BriefcaseBusiness size={15} className="text-electric-light" />
        <span className="text-[10px] font-semibold text-slate-200">Project Leadership</span>
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -right-4 bottom-12 z-20 hidden items-center gap-2 rounded-xl border border-gold/25 bg-space-900/90 px-3 py-2 shadow-xl backdrop-blur sm:flex"
      >
        <Code2 size={15} className="text-gold" />
        <span className="text-[10px] font-semibold text-slate-200">Systems &amp; Web</span>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const nameWords = ['FARJEHAN', 'ALARAF'];

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(ellipse_at_25%_35%,rgba(0,102,255,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 blue-grid opacity-25" />
      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-3.5 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.11em] text-gold-light sm:text-xs">AVAILABLE FOR HIRE / COLLABORATION</span>
          </motion.div>

          <p className="section-kicker mb-3">Tech Project Manager &amp; Systems Architect</p>
          <h1 aria-label="Farjehan Alaraf" className="font-display text-[clamp(2.7rem,8vw,6rem)] font-semibold uppercase leading-[1.08] tracking-[-0.075em] text-white">
            {nameWords.map((word, wordIndex) => (
              <span key={word} aria-hidden="true" className="mr-[0.22em] inline-flex overflow-hidden pb-2 last:mr-0">
                {Array.from(word).map((character, characterIndex) => (
                  <motion.span
                    key={`${word}-${characterIndex}`}
                    initial={reduceMotion ? false : { opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.16 + wordIndex * 0.3 + characterIndex * 0.035 }}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-7 text-slate-200 sm:text-base lg:mx-0">
            Mahasiswa Sistem Informasi UIN Imam Bonjol Padang &apos;24 <span className="text-electric-light">|</span> Junior Talent &amp; IT Systems Enthusiast
          </p>
          <p className="section-copy mx-auto mt-4 max-w-xl text-sm sm:text-base lg:mx-0">
            Menjembatani strategi bisnis dan teknologi melalui solusi sistem terintegrasi yang efisien, terstruktur, dan tepat guna.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 via-electric to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-electric/25 transition hover:-translate-y-0.5 hover:shadow-electric/40">
              Lihat Proyek <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-electric/40 hover:bg-electric/10">
              Hubungi Saya <ArrowUpRight size={16} className="text-electric-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <a href="#about" className="mt-12 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500 transition hover:text-slate-300 lg:inline-flex">
            Scroll untuk mengenal lebih lanjut <ArrowDownRight size={14} />
          </a>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <DigitalIdCard />
        </motion.div>
      </div>
    </section>
  );
}
