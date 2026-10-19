import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Award, 
  Cpu, 
  Mail, 
  Menu, 
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#portfolio', icon: Briefcase },
  { name: 'Certs', href: '#portfolio', icon: Award, tab: 'certificates' },
  { name: 'Stack', href: '#portfolio', icon: Cpu, tab: 'skills' },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function FloatingDockNavbar({ onSelectTab, onOpenContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item, e) => {
    if (item.tab && onSelectTab) {
      onSelectTab(item.tab);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 shadow-2xl ${
          scrolled
            ? 'bg-space-900/80 backdrop-blur-xl border-cyan-500/30 shadow-cyan-950/40 py-2'
            : 'bg-space-900/60 backdrop-blur-md border-white/10 shadow-black/60'
        }`}
      >
        {/* Brand Monogram */}
        <a 
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-blue-700 via-cyan-400 to-white p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.6)]">
            <div className="w-full h-full rounded-full bg-space-950 flex items-center justify-center overflow-hidden">
              <img 
                src="/project/jehan-monogram.png"
                alt="Jehan Project Logo" 
                className="w-7 h-7 object-contain"
                onError={(e) => {
                  e.currentTarget.hidden = true;
                  e.currentTarget.nextElementSibling.hidden = false;
                }}
              />
              <span hidden className="font-display font-bold text-xs tracking-wider text-white">JP</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              Jehan<span className="text-cyan-400">Project</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-tight leading-none">
              Farjehan Alaraf
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden sm:block h-5 w-[1px] bg-white/10" />

        {/* Desktop Dock Nav Items with Magnification */}
        <nav className="hidden sm:flex items-center gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            const isNeighbor = Math.abs((hoveredIndex ?? -99) - index) === 1;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item, e)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? 1.25 : isNeighbor ? 1.1 : 1,
                    y: isHovered ? -3 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.name}</span>
                </motion.div>
                {isHovered && (
                  <motion.div
                    layoutId="dock-bubble"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-cyan-400/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="hidden sm:block h-5 w-[1px] bg-white/10" />

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <div 
            onClick={onOpenContactModal}
            className="cursor-pointer group flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:bg-emerald-950/60"
            title="Klik untuk menghubungi"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-medium text-emerald-300 whitespace-nowrap hidden xs:inline">
              Available for Hire
            </span>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl glass-panel p-4 border border-cyan-500/30 shadow-2xl sm:hidden flex flex-col gap-2 z-50 bg-space-900/95"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Contact Farjehan</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
