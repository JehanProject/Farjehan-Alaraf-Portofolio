import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Music2, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionReveal from './SectionReveal';

const socials = [
  { label: 'LinkedIn', handle: 'Farjehan Alaraf', href: 'https://www.linkedin.com/in/farjehan-alaraf-175403369/', icon: LinkedinMark },
  { label: 'GitHub', handle: '@JehanProject', href: 'https://github.com/JehanProject', icon: GithubMark },
  { label: 'Instagram', handle: '@je_hann022', href: 'https://www.instagram.com/je_hann022/', icon: InstagramMark },
  { label: 'TikTok', handle: '@frjhnalrf_022', href: 'https://www.tiktok.com/@frjhnalrf_022', icon: Music2 },
];

function LinkedinMark({ size = 16, className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GithubMark({ size = 16, className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.9 2.58 3.28 1.93.1-.71.39-1.2.7-1.48-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.21 1.15-2.99-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.12 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function InstagramMark({ size = 16, className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [emailLink, setEmailLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Diskusi portofolio dari ${form.name}`;
    const body = `Halo Farjehan,\n\n${form.message}\n\nNama: ${form.name}\nEmail: ${form.email}`;
    const mailto = `mailto:farjehanalaraf02@gmail.com?${new URLSearchParams({ subject, body })}`;
    setEmailLink(mailto);
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-container scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Let’s start a conversation"
        title="Mari Berkembang dan Berkolaborasi Bersama!"
        description="Saya selalu terbuka untuk diskusi mengenai pengembangan web, analisis sistem, atau sekadar bertukar wawasan seputar teknologi dan manajemen proyek. Jika Anda mencari talenta junior yang bersemangat untuk berkontribusi dalam tim atau proyek Anda, jangan ragu untuk menyapa!"
        centered
      />
      <div className="grid items-start gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-electric/20 bg-space-900/80 p-5 shadow-xl shadow-black/10 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/20 bg-electric/10 text-electric-light"><Send size={18} /></div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Kirim pesan</h3>
                <p className="text-xs text-slate-500">Pesan akan disiapkan melalui aplikasi email Anda.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-300">Nama</label>
                <input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border border-white/10 bg-space-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-electric/60 focus:ring-2 focus:ring-electric/10" placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-300">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-xl border border-white/10 bg-space-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-electric/60 focus:ring-2 focus:ring-electric/10" placeholder="nama@email.com" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-300">Pesan</label>
                <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-y rounded-xl border border-white/10 bg-space-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-electric/60 focus:ring-2 focus:ring-electric/10" placeholder="Ceritakan sedikit tentang hal yang ingin Anda diskusikan..." />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-5 py-3 text-sm font-bold text-white shadow-lg shadow-electric/20 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-electric-light focus:ring-offset-2 focus:ring-offset-space-900">
                Siapkan Email <Send size={15} />
              </button>
              {emailLink && (
                <p role="status" className="text-xs leading-5 text-slate-400">
                  Jika aplikasi email tidak terbuka, <a href={emailLink} className="font-semibold text-electric-light underline underline-offset-4">klik di sini untuk mengirim pesan</a>.
                </p>
              )}
            </div>
          </form>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-space-900/75 p-5 sm:p-6">
              <p className="section-kicker mb-4">Direct contact</p>
              <a href="mailto:farjehanalaraf02@gmail.com" className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-space-950/70 p-4 transition hover:border-electric/35">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric-light"><Mail size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] text-slate-500">Email</span>
                  <span className="block break-all text-xs font-semibold text-slate-100 sm:text-sm">farjehanalaraf02@gmail.com</span>
                </span>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-electric-light" />
              </a>
              <a href="https://wa.me/6282335360672" target="_blank" rel="noreferrer" className="group mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-space-950/70 p-4 transition hover:border-emerald-400/35">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><MessageCircle size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] text-slate-500">WhatsApp</span>
                  <span className="block text-sm font-semibold text-slate-100">0823-3536-0672</span>
                </span>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-emerald-300" />
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><MapPin size={14} /> Padang, Sumatera Barat, Indonesia</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-space-900/75 p-5 sm:p-6">
              <p className="section-kicker mb-4">Find me online</p>
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map(({ label, handle, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-space-950/70 p-3 transition hover:border-electric/35 hover:bg-electric/5">
                    <Icon size={16} className="shrink-0 text-slate-400 transition group-hover:text-electric-light" />
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-200">{label}</span>
                      <span className="block truncate text-[9px] text-slate-500">{handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
