import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Brand', '#brand'],
  ['Projects', '#projects'],
  ['Tech Stack', '#tech-stack'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-electric/20 bg-space-900/85 px-3 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-md sm:px-5"
      >
        <a href="#home" className="group flex shrink-0 items-center gap-2.5" aria-label="Jehan Project, kembali ke beranda">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-electric/40 bg-space-950">
            <img src="/project/jehan-monogram.png" alt="" className="h-7 w-7 object-contain" />
          </span>
          <span className="hidden text-xs font-bold tracking-[0.13em] sm:block">
            JEHAN <span className="text-electric-light">PROJECT</span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.055em] text-slate-300 transition-colors hover:bg-white/5 hover:text-white xl:px-3 xl:text-[11px]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-[11px] font-semibold text-gold-light sm:inline-flex">
            <span className="relative mr-2 mt-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Available to collaborate
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-electric/40 hover:text-white lg:hidden"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            aria-label="Navigasi mobile"
            className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-electric/20 bg-space-900/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-electric/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
