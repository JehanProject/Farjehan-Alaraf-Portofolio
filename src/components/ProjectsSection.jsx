import { ArrowUpRight, Boxes, Database, Layers3, Waypoints } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SectionReveal from './SectionReveal';

const projects = [
  {
    number: '01',
    icon: Boxes,
    title: 'Sistem Informasi Manajemen Operasional Terintegrasi',
    context: 'Studi Kasus Lapangan — Toko Mira Plastik',
    role: 'Project Manager & Developer',
    description: 'Sebagai langkah nyata dalam masa perkembangan saya di bidang manajemen proyek, saya berkesempatan memimpin siklus pengembangan sistem (SDLC) dari tahap analisis kebutuhan bisnis hingga eksekusi. Proyek ini menjadi wadah pembelajaran langsung bagi saya dalam merancang arsitektur database dan antarmuka untuk mendigitalisasi operasional toko agar berjalan lebih efisien dan terstruktur.',
    technologies: ['CodeIgniter (CI3/CI4)', 'MySQL', 'Tailwind CSS', 'Requirement Analysis', 'SDLC'],
    image: '/project/tampilan SIM OT TOKO MIRA PLASTIK.jpg',
    imageAlt: 'Tampilan sistem informasi operasional Toko Mira Plastik',
    visual: 'from-blue-950/80 via-space-900 to-space-950',
  },
  {
    number: '02',
    icon: Waypoints,
    title: 'Knowledge-Based System (Sistem Pakar) Pemetaan Kompetensi',
    context: 'Proyek Penelitian Akademik',
    role: 'Systems Architect & Developer',
    description: 'Dalam masa perkembangan dan eksplorasi saya terhadap arsitektur sistem cerdas, saya ditantang untuk membangun sistem berbasis aturan (rule-based) guna memetakan kompetensi mahasiswa. Pada proyek ini, saya belajar secara praktis merancang alur logika dan mengimplementasikan mesin inferensi menggunakan algoritma Forward Chaining yang dikombinasikan dengan Certainty Factor.',
    technologies: ['PHP', 'MySQL', 'Forward Chaining', 'Certainty Factor', 'Logic Architecture'],
    visual: 'from-indigo-950/70 via-space-900 to-space-950',
  },
  {
    number: '03',
    icon: Database,
    title: 'Decision Support System (DSS) Pemilihan Laptop',
    context: 'Proyek Analisis Sistem Akademik',
    role: 'Systems Analyst & Developer',
    description: 'Mengembangkan Sistem Pendukung Keputusan (SPK) untuk mengotomatisasi rekomendasi perangkat laptop secara objektif. Mengimplementasikan metode Simple Additive Weighting (SAW) guna menghitung pembobotan multi-kriteria secara akurat dan sistematis.',
    technologies: ['PHP', 'MySQL', 'Algoritma SAW', 'Data Processing'],
    visual: 'from-amber-950/40 via-space-900 to-space-950',
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className={`relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.visual}`}>
      {project.image ? (
        <>
          <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover object-top opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-space-950/5" />
        </>
      ) : (
        <div className="blue-grid absolute inset-0 opacity-40" />
      )}
      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-space-950/60 text-electric-light backdrop-blur">
        <Icon size={20} />
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-5xl font-bold tracking-[-0.08em] text-white/[0.12]">{project.number}</span>
      {!project.image && (
        <div className="absolute inset-x-14 bottom-5 flex h-20 items-end gap-2 opacity-60">
          {[38, 63, 48, 82, 58, 100, 74].map((height, index) => (
            <span key={index} className="flex-1 rounded-t-md border border-electric/20 bg-gradient-to-t from-electric/10 to-electric/50" style={{ height: `${height}%` }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected case studies"
        title="Featured Projects"
        description="Studi kasus dan proyek akademik sebagai ruang belajar untuk menerapkan analisis, arsitektur sistem, dan pengembangan solusi."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <SectionReveal key={project.number} delay={index * 0.07}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="group h-full rounded-[1.65rem] border border-white/[0.09] bg-space-900/80 p-4 shadow-xl shadow-black/10 transition-colors hover:border-electric/45 sm:p-5"
            >
              <ProjectVisual project={project} />
              <div className="px-1 pb-1 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-electric-light">{project.context}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-white sm:text-xl">{project.title}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light">
                  <Layers3 size={13} /> {project.role}
                </p>
                <p className="mt-4 text-xs leading-6 text-slate-400 sm:text-[13px]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-space-950 px-2.5 py-1 text-[9px] font-medium text-slate-300 sm:text-[10px]">{technology}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Academic case study</span>
                  <ArrowUpRight size={15} className="text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-light" />
                </div>
              </div>
            </motion.article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
