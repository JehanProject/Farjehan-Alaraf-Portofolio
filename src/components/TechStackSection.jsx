import { useReducedMotion } from 'framer-motion';
import { Braces, Database, GitBranch, PanelsTopLeft } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionReveal from './SectionReveal';

const marqueeItems = ['React', 'Laravel', 'CodeIgniter', 'Tailwind CSS', 'MySQL', 'Agile SDLC', 'IT Governance', 'Git', 'PHP', 'Python'];

const skillGroups = [
  {
    icon: PanelsTopLeft,
    title: 'Junior Project Management & Architecture',
    skills: ['Agile Methodology', 'SDLC', 'Systems Architecture', 'IT Governance'],
    accent: 'text-electric-light',
  },
  {
    icon: Braces,
    title: 'Back-End Development',
    note: 'Active learning',
    skills: ['PHP', 'CodeIgniter (CI3 & CI4)', 'Laravel', 'Python'],
    accent: 'text-gold',
  },
  {
    icon: PanelsTopLeft,
    title: 'Front-End & UI Styling',
    skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
    accent: 'text-electric-light',
  },
  {
    icon: Database,
    title: 'Database & Tools',
    skills: ['MySQL', 'Git & GitHub', 'Figma', 'Cloudflare Pages'],
    accent: 'text-gold',
  },
];

export default function TechStackSection() {
  const reduceMotion = useReducedMotion();
  const marqueeText = marqueeItems.map((item) => `${item}  •  `).join('');

  return (
    <section id="tech-stack" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Tools in my workflow"
          title="Tech Stack & Core Competencies"
          description="Keahlian teknis dan alat yang sedang aktif saya pelajari serta kembangkan selama masa perkuliahan."
          centered
        />
      </div>
      <div className="relative mb-10 overflow-hidden border-y border-electric/15 bg-space-900/70 py-4">
        <div className={`flex w-max whitespace-nowrap font-mono text-xs font-medium tracking-wide text-slate-300 sm:text-sm ${reduceMotion ? '' : 'animate-tech-marquee'}`} aria-label={marqueeItems.join(', ')}>
          <span className="px-3">{marqueeText}</span>
          {!reduceMotion && <span className="px-3" aria-hidden="true">{marqueeText}</span>}
        </div>
      </div>
      <div className="section-container grid gap-4 sm:grid-cols-2">
        {skillGroups.map(({ icon: Icon, title, note, skills, accent }, index) => (
          <SectionReveal key={title} delay={index * 0.05}>
            <article className="h-full rounded-[1.6rem] border border-white/[0.09] bg-space-900/75 p-5 transition-colors hover:border-electric/35 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-space-950 ${accent}`}><Icon size={20} /></div>
                <GitBranch size={16} className="mt-2 text-slate-600" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{title}</h3>
              {note && <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-gold">{note}</p>}
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-space-950/80 px-3 py-2.5 text-[11px] font-medium text-slate-300 sm:text-xs">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{skill}
                  </li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
