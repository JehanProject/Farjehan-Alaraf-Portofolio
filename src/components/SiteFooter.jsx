import { ArrowUpRight } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-space-950/80 px-4 py-7 sm:px-6">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <a href="#home" className="text-xs font-bold tracking-[0.12em] text-slate-200">JEHAN <span className="text-electric-light">PROJECT</span></a>
        <p className="text-[10px] text-slate-500">© 2026 Jehan Project - Farjehan Alaraf. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 transition hover:text-electric-light">Kembali ke atas <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
