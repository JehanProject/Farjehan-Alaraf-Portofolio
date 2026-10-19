import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  ArrowUp
} from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

// Brand SVGs
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 1 0 6.34 6.34V8.5a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Farjehan Alaraf,\n\nSaya: ${formData.name}\nEmail: ${formData.email}\nSubjek: ${formData.subject}\nPesan:\n${formData.message}`;
    const query = new URLSearchParams({ text });
    setWhatsappUrl(`https://wa.me/6282335360672?${query.toString()}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directContacts = [
    {
      key: 'email',
      title: 'Email',
      value: 'farjehanalaraf02@gmail.com',
      action: 'mailto:farjehanalaraf02@gmail.com',
      icon: Mail,
      isCopy: true,
      color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40',
      description: 'Hubungi untuk kolaborasi & penawaran proyek'
    },
    {
      key: 'wa',
      title: 'WhatsApp',
      value: '082335360672',
      action: 'https://wa.me/6282335360672',
      icon: Phone,
      isCopy: true,
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
      description: 'Respon cepat untuk diskusi proyek & konsultasi'
    },
    {
      key: 'github',
      title: 'GitHub',
      value: 'github.com/JehanProject',
      action: 'https://github.com/JehanProject',
      icon: GithubIcon,
      isCopy: false,
      color: 'text-slate-300 bg-slate-900 border-white/10',
      description: 'Repository kode & open-source projects'
    },
    {
      key: 'linkedin',
      title: 'LinkedIn',
      value: 'Farjehan Alaraf',
      action: 'https://www.linkedin.com/in/farjehan-alaraf-175403369/',
      icon: LinkedinIcon,
      isCopy: false,
      color: 'text-[#0A66C2] bg-blue-950/40 border-blue-800/40',
      description: 'Jaringan profesional & rekam jejak karir'
    },
    {
      key: 'youtube',
      title: 'YouTube',
      value: '@JehanProject',
      action: 'https://www.youtube.com/@JehanProject',
      icon: YoutubeIcon,
      isCopy: false,
      color: 'text-red-400 bg-red-950/40 border-red-800/40',
      description: 'Konten tech, tutorial & showcase'
    },
    {
      key: 'instagram',
      title: 'Instagram',
      value: '@je_hann022',
      action: 'https://www.instagram.com/je_hann022/',
      icon: InstagramIcon,
      isCopy: false,
      color: 'text-pink-400 bg-pink-950/40 border-pink-800/40',
      description: 'Aktivitas kampus, event & daily update'
    },
    {
      key: 'tiktok',
      title: 'TikTok',
      value: '@frjhnalrf_022',
      action: 'https://www.tiktok.com/@frjhnalrf_022',
      icon: TikTokIcon,
      isCopy: false,
      color: 'text-cyan-300 bg-cyan-950/40 border-cyan-800/40',
      description: 'Tech shorts & creative content'
    }
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>LET'S COLLABORATE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          Get in Touch & <span className="text-shimmer">Connect</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Siap berkolaborasi untuk proyek Tech PM, pengembangan sistem web enterprise, atau diskusi teknologi.
        </p>
      </div>

      {/* Bento Grid Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Bento: Interactive Contact Form (Span 7) */}
        <div className="lg:col-span-7">
          <TiltCard glowColor="electric" className="p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Kirim Pesan Langsung
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Siapkan pesan untuk dikirim melalui WhatsApp
                </span>
              </div>
            </div>

            {whatsappUrl ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4 my-6"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <Send className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white font-display">
                  Pesan Siap Dikirim
                </h4>
                <p className="text-xs sm:text-sm text-cyan-200">
                  Pesan belum terkirim. Buka WhatsApp, periksa isi pesan, lalu tekan tombol Kirim.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Buka WhatsApp untuk Mengirim
                </a>
                <button
                  type="button"
                  onClick={() => setWhatsappUrl('')}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
                >
                  Ubah Pesan
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-mono text-slate-300">Nama Anda</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Farjehan Alaraf"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-mono text-slate-300">Alamat Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-mono text-slate-300">Subjek Proyek / Keperluan</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Kolaborasi Sistem Informasi & Web Dev"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-mono text-slate-300">Pesan Detail</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan ide proyek, estimasi waktu, atau pertanyaan yang ingin Anda diskusikan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Magnetic Button */}
                <div className="pt-2">
                  <MagneticButton
                    variant="primary"
                    className="w-full py-3.5 text-sm sm:text-base font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>Siapkan Pesan WhatsApp</span>
                    </span>
                  </MagneticButton>
                </div>
              </form>
            )}
          </TiltCard>
        </div>

        {/* Right Bento: Interactive Direct Connect Cards (Span 5) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="px-2 mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Direct Connect Cards (Klik untuk copy / direct link):
            </span>
          </div>

          <div className="space-y-2.5">
            {directContacts.map((contact) => {
              const Icon = contact.icon;
              const isCopied = copiedKey === contact.key;

              return (
                <div
                  key={contact.key}
                  onClick={() => {
                    if (contact.isCopy) {
                      handleCopy(contact.value, contact.key);
                    } else {
                      window.open(contact.action, '_blank');
                    }
                  }}
                  className="group p-3.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${contact.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {contact.title}
                        </h4>
                        {isCopied && (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-500/40">
                            Copied!
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block truncate max-w-[200px] sm:max-w-xs">
                        {contact.value}
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {contact.isCopy ? (
                      <Copy className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <img
            src="/project/jehan-logo-horizontal.png"
            alt="Jehan Project"
            className="h-5 w-20 shrink-0 object-contain"
          />
          <span>© 2026 Jehan Project by Farjehan Alaraf. Built with React, Tailwind CSS & Framer Motion.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all text-xs"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
