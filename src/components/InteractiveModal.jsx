import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  FolderGit2, 
  Award, 
  FileText, 
  Sparkles,
  Send,
  Download,
  Mail,
  Phone
} from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function InteractiveModal({
  isOpen,
  onClose,
  type, // 'project' | 'cert' | 'contact'
  data, // project or cert object
}) {
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-space-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl glass-panel border border-cyan-500/40 shadow-2xl overflow-hidden bg-space-900/95 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                {type === 'project' ? 'Project Specification' : type === 'cert' ? 'Credential Verification' : 'Quick Connect'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">

            {/* CASE 1: PROJECT MODAL */}
            {type === 'project' && data && (
              <>
                {/* Media Image Showcase */}
                <div className="space-y-3">
                  <div className="relative h-60 sm:h-80 w-full rounded-2xl overflow-hidden bg-space-950 border border-white/10">
                    <img
                      src={data.gallery ? data.gallery[selectedGalleryIdx] : data.image}
                      alt={data.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Multi-image thumbnail selector if gallery exists */}
                  {data.gallery && data.gallery.length > 1 && (
                    <div className="flex items-center gap-3">
                      {data.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedGalleryIdx(idx)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedGalleryIdx === idx ? 'border-cyan-400 scale-105' : 'border-white/10 opacity-60'
                          }`}
                        >
                          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${data.badgeColor}`}>
                      {data.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Periode: {data.year}</span>
                    <span className="text-xs font-mono text-cyan-400 font-bold ml-auto">{data.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {data.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    Key Architectural Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {data.highlights?.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Technologies Utilized:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/50 border border-cyan-800 text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* CASE 2: CERTIFICATE MODAL */}
            {type === 'cert' && data && (
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 flex-shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{data.issuer}</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                      {data.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>Diterbitkan: {data.date}</span>
                      <span>•</span>
                      <span className="text-emerald-400">{data.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Topics Covered */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    Materi & Kompetensi Teruji:
                  </h4>
                  <ul className="space-y-2">
                    {data.topics.map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PDF Document Actions */}
                {data.file ? (
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">Dokumen Sertifikat Digital</div>
                        <div className="text-[11px] font-mono text-slate-400">Format Resmi PDF Terverifikasi</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={data.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Buka PDF</span>
                      </a>
                      <a
                        href={data.file}
                        download
                        className="inline-flex items-center justify-center p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white border-white/10 hover:border-cyan-400 transition-colors"
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 text-center">
                    Sertifikat resmi terdaftar dalam arsip organisasi kemahasiswaan & kepanitiaan.
                  </div>
                )}
              </div>
            )}

            {/* CASE 3: QUICK CONTACT MODAL */}
            {type === 'contact' && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-cyan-500/30">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Terhubung dengan Farjehan Alaraf
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Tersedia untuk peran Tech Project Manager, perancangan sistem informasi, atau konsultasi web development.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://wa.me/6282335360672?text=Halo%20Farjehan,%20saya%20tertarik%20berkolaborasi%20untuk%20proyek..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-all font-medium text-sm shadow-md"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>WhatsApp Langsung</span>
                  </a>

                  <a
                    href="mailto:farjehanalaraf02@gmail.com?subject=Tawaran%20Kerjasama%20/%20Diskusi%20Proyek"
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-blue-950/50 border border-blue-500/40 text-cyan-300 hover:bg-blue-900/60 transition-all font-medium text-sm shadow-md"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Kirim Email Resmi</span>
                  </a>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-400">
                  Respon aktif dalam 1x24 jam kerja.
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 border-t border-white/10 bg-white/5 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Tutup Modal
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
