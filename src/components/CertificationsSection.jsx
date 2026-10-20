import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionReveal from './SectionReveal';

const certifications = [
  {
    issuer: 'Cisco',
    title: 'Networking Basics',
    summary: 'Pemahaman dasar infrastruktur jaringan.',
    file: '/project/Networking_Basics_certificate_farjehanalaraf02-gmail-com_21ca0248-63b1-4df0-b620-38c7d7343159.pdf',
  },
  {
    issuer: 'Fortinet',
    title: 'Threat Landscape 3.0',
    summary: 'Kesadaran dan analisis ancaman keamanan siber.',
    file: '/project/Course_Completion_Certificate.pdf',
  },
  {
    issuer: 'Fakultas Sains dan Teknologi · UIN Imam Bonjol Padang',
    title: 'Webinar Lecture Series: Sosial Media Analitik',
    summary: 'Peserta webinar Lecture Series, 1 Oktober 2026.',
    file: '/project/Sertifikat%20Lecture%20Series.pdf',
  },
  {
    issuer: 'Fakultas Sains dan Teknologi · UIN Imam Bonjol Padang',
    title: 'Webinar Lecture Series: Memahami Pengguna, Organisasi, dan Tata Kelola TI',
    summary: 'Peserta webinar Lecture Series, 2 Oktober 2026.',
    file: '/project/Sertifikat%20Lecture%20Series%20(1).pdf',
  },
  {
    issuer: 'Public Speaking',
    title: 'Delivery Mastery',
    summary: 'Keterampilan komunikasi efektif dan presentasi.',
    file: null,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-container scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Learning milestones"
        title="Licenses & Certifications"
        description="Sertifikasi dan pelatihan yang mendukung pembelajaran saya di bidang teknologi dan komunikasi."
      />
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-space-900/80">
        {certifications.map((certification, index) => {
          const content = (
            <>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                <Award size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold-light">{certification.issuer}</p>
                <h3 className="mt-1 text-sm font-bold text-white sm:text-base">{certification.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">{certification.summary}</p>
              </div>
              {certification.file ? (
                <ArrowUpRight size={17} className="shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              ) : (
                <BadgeCheck size={18} className="shrink-0 text-gold/70" />
              )}
            </>
          );

          return (
            <SectionReveal key={certification.title} delay={index * 0.04}>
              {certification.file ? (
                <a href={certification.file} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-white/[0.08] p-5 transition hover:bg-white/[0.025] sm:px-7">
                  {content}
                </a>
              ) : (
                <div className="group flex items-center gap-4 border-b border-white/[0.08] p-5 last:border-0 sm:px-7">
                  {content}
                </div>
              )}
            </SectionReveal>
          );
        })}
      </div>
      <p className="mt-4 flex items-center gap-2 text-[10px] text-slate-500"><BadgeCheck size={13} className="text-gold" /> Pilih sertifikasi yang memiliki tautan untuk membuka dokumen.</p>
    </section>
  );
}
