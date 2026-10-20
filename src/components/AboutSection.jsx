import { Building2, GraduationCap, UsersRound } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionReveal from './SectionReveal';

const facts = [
  { icon: GraduationCap, label: 'Program Studi', value: 'Sistem Informasi' },
  { icon: Building2, label: 'Kampus', value: 'UIN Imam Bonjol Padang' },
  { icon: UsersRound, label: 'Organisasi', value: 'Senat Mahasiswa FST' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-container scroll-mt-24 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="A little about me" title="About Me" />
          <SectionReveal delay={0.1}>
            <div className="relative -mt-5 sm:-mt-6">
              <img
                src="/project/remove-bg.png"
                alt="Farjehan Alaraf mengenakan seragam organisasi"
                className="mx-auto block max-h-[28rem] w-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
              />
            </div>
          </SectionReveal>
        </div>
        <SectionReveal>
          <div>
            <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
              <p>
                Halo, saya Farjehan Alaraf. Saat ini saya adalah mahasiswa aktif dari jurusan Sistem Informasi di UIN Imam Bonjol Padang (Angkatan 2024). Berada di masa perkuliahan membuat saya memposisikan diri sebagai seorang talenta junior yang terus berkembang, namun hal tersebut justru memacu fokus dan semangat saya untuk mendalami peran sebagai Tech Project Manager &amp; Systems Architect. Saya berdedikasi untuk belajar menjembatani kebutuhan organisasi, tata kelola TI, serta eksekusi pengembangan web modern guna membangun ekosistem digital yang terintegrasi.
              </p>
              <p>
                Di samping fokus pada studi dan proyek akademik di kampus, saya juga aktif menjabat dalam organisasi Senat Mahasiswa (SEMA) Fakultas Sains dan Teknologi UIN IB. Sebagai seorang pembelajar yang antusias, saya selalu terbuka untuk mengasah keahlian teknis, belajar memimpin tim, dan berkolaborasi dalam menciptakan solusi teknologi.
              </p>
            </div>
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="py-2">
                  <Icon size={17} className="mb-3 text-gold" />
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
