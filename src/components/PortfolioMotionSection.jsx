import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Award, 
  Cpu, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Code2, 
  Layers, 
  FileText,
  Calendar,
  CheckCircle,
  Maximize2,
  Wrench,
  Users2,
  ChevronRight
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function PortfolioMotionSection({ activeTab, onTabChange, onSelectProject, onSelectCert }) {
  const tabs = [
    { id: 'projects', label: 'Featured Projects', icon: FolderGit2, count: '3' },
    { id: 'certificates', label: 'Verified Certificates', icon: Award, count: '6' },
    { id: 'skills', label: 'Tech Stack & Skills', icon: Cpu, count: '18+' },
  ];

  // 1. Projects Data
  const projectsData = [
    {
      id: 'mira-plastik',
      title: 'SIM Operasional Terintegrasi Toko Mira Plastik',
      role: 'Project Manager & Lead Developer',
      tech: ['CodeIgniter 3/4', 'PHP', 'MySQL', 'Tailwind CSS', 'Agile/Scrum'],
      year: '2024 – Sekarang',
      image: '/project/tampilan SIM OT TOKO MIRA PLASTIK.jpg',
      badge: 'Live Operations / Production',
      badgeColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40',
      description: 'Sistem Informasi Manajemen Operasional Terintegrasi Toko Mira Plastik yang mengotomasi pencatatan inventaris multi-gudang, transaksi Point of Sales (POS), pelaporan laba rugi real-time, serta sistem otorisasi multi-role (Kasir, Admin Gudang, Owner).',
      highlights: [
        'Sinkronisasi stok barang otomatis dengan peringatan batas minimum (Restock Alert)',
        'Dashboard analitik penjualan harian & bulanan berbasis chart interaktif',
        'Cetak struk kasir termal & ekspor laporan PDF/Excel otomatis',
        'Penerapan metodologi Agile Scrum untuk iterasi fitur berkala bersama owner'
      ]
    },
    {
      id: 'kbs-kompetensi',
      title: 'Knowledge-Based System Pemetaan Kompetensi Mahasiswa',
      role: 'Lead Developer & System Architect',
      tech: ['React', 'PHP / CodeIgniter', 'Tailwind CSS', 'MySQL', 'Forward Chaining'],
      year: '2024',
      image: null, // Will use custom cover component
      useCustomCover: true,
      badge: 'Expert System & AI Engine',
      badgeColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40',
      description: 'Sistem Pakar berbasis web untuk pemetaan kompetensi dan penjurusan keahlian mahasiswa Sistem Informasi menggunakan metode inferensi Forward Chaining dikombinasikan dengan Certainty Factor (CF).',
      highlights: [
        'Mesin inferensi rule-base dinamis untuk mendiagnosa dominasi skill (Software Dev, Data, Cyber, PM)',
        'Perhitungan tingkat keyakinan (Certainty Factor) untuk hasil akurat dan terukur',
        'Visualisasi radar chart profil kompetensi mahasiswa secara instan',
        'Rekomendasi jalur pembelajaran (learning path) dan roadmap karir terpersonalisasi'
      ]
    },
    {
      id: 'spk-laptop',
      title: 'Sistem Pendukung Keputusan (SPK) Pemilihan Laptop',
      role: 'Full-Stack Developer & Data Analyst',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'SAW Algorithm'],
      year: '2024',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
      badge: 'Decision Support System',
      badgeColor: 'text-yellow-300 bg-yellow-950/60 border-yellow-500/40',
      description: 'Aplikasi pendukung keputusan pemilihan laptop optimal berdasarkan kebutuhan spesifik pengguna (Programming, Multimedia, Gaming, Office) menggunakan metode Simple Additive Weighting (SAW).',
      highlights: [
        'Normalisasi matriks keputusan multi-kriteria (Harga, Processor, RAM, Storage, Portabilitas)',
        'Pembobotan dinamis sesuai prioritas anggaran dan preferensi pengguna',
        'Ranking akurasi tinggi dengan penjelasan komparasi skor antar laptop',
        'Manajemen database katalog perangkat yang fleksibel bagi administrator'
      ]
    }
  ];

  // 2. Certificates Data
  const certificatesData = [
    {
      id: 'cisco-networking',
      issuer: 'Cisco Networking Academy',
      title: 'Networking Basics',
      date: 'Oktober 2025',
      badge: 'Verified Credential',
      file: '/project/Networking_Basics_certificate_farjehanalaraf02-gmail-com_21ca0248-63b1-4df0-b620-38c7d7343159.pdf',
      color: 'from-blue-600/30 to-cyan-500/20 border-cyan-500/40',
      iconColor: 'text-cyan-400',
      topics: ['Network Protocols (TCP/IP)', 'Subnetting & Addressing', 'Network Devices & Topologies', 'Troubleshooting']
    },
    {
      id: 'fortinet-threat',
      issuer: 'Fortinet Training Institute',
      title: 'FCF - Introduction to the Threat Landscape 3.0',
      date: 'Oktober 2025',
      badge: 'Cybersecurity',
      file: '/project/Course_Completion_Certificate.pdf',
      color: 'from-red-600/30 to-orange-500/20 border-red-500/40',
      iconColor: 'text-red-400',
      topics: ['Cyber Threat Vectors', 'Malware & Ransomware Defense', 'Security Operations', 'Zero Trust Architecture']
    },
    {
      id: 'uin-it-governance',
      issuer: 'UIN Imam Bonjol Padang - FST',
      title: 'Webinar Lecture Series: Tata Kelola TI & Pengguna',
      date: 'Oktober 2026',
      badge: 'IT Governance',
      file: '/project/Sertifikat Lecture Series (1).pdf',
      color: 'from-emerald-600/30 to-teal-500/20 border-emerald-500/40',
      iconColor: 'text-emerald-400',
      topics: ['Framework Tata Kelola TI (COBIT/ITIL)', 'Service Level Agreement', 'User Adoption & Compliance', 'Risk Assessment']
    },
    {
      id: 'uin-social-analytics',
      issuer: 'UIN Imam Bonjol Padang - FST',
      title: 'Webinar Lecture Series: Sosial Media Analitik',
      date: 'Oktober 2026',
      badge: 'Data & Analytics',
      file: '/project/Sertifikat Lecture Series.pdf',
      color: 'from-purple-600/30 to-indigo-500/20 border-purple-500/40',
      iconColor: 'text-purple-400',
      topics: ['Social Media Sentiment Analysis', 'Audience Engagement Metrics', 'Data Crawling & Visualization', 'Looker Studio']
    },
    {
      id: 'sema-legislatif',
      issuer: 'SEMA-U UIN Imam Bonjol Padang',
      title: 'Peserta Sekolah Legislatif Mahasiswa',
      date: 'September 2026',
      badge: 'Leadership & Policy',
      file: null,
      color: 'from-yellow-600/30 to-amber-500/20 border-yellow-500/40',
      iconColor: 'text-yellow-400',
      topics: ['Legislative Drafting', 'Organisational Governance', 'Advocacy & Public Hearing', 'Strategic Negotiation']
    },
    {
      id: 'public-speaking',
      issuer: 'Speaking Official',
      title: 'Seminar Nasional Public Speaking: Delivery Mastery',
      date: 'Desember 2024',
      badge: 'Soft Skills',
      file: null,
      color: 'from-pink-600/30 to-rose-500/20 border-pink-500/40',
      iconColor: 'text-pink-400',
      topics: ['Executive Presentation', 'Storytelling in Tech', 'Body Language & Pitching', 'Audience Engagement']
    }
  ];

  // 3. Tech Stack & Skills Data
  const techCategories = [
    {
      title: 'Development & Frameworks',
      icon: Code2,
      skills: [
        { name: 'CodeIgniter 3', level: 'Advanced', highlight: 'Production Ready' },
        { name: 'CodeIgniter 4', level: 'Advanced', highlight: 'Enterprise MVC' },
        { name: 'Laravel', level: 'Learning & Building', highlight: 'Modern PHP' },
        { name: 'React', level: 'Intermediate', highlight: 'Component Architecture' },
        { name: 'PHP', level: 'Advanced', highlight: 'OOP & RESTful APIs' },
        { name: 'JavaScript', level: 'Advanced', highlight: 'ES6+ & Async' },
        { name: 'HTML5 & CSS3', level: 'Advanced', highlight: 'Semantic & Responsive' },
        { name: 'Tailwind CSS', level: 'Expert', highlight: 'Design Systems' },
        { name: 'Python', level: 'Intermediate', highlight: 'Scripting & AI Basics' },
        { name: 'SQL / MySQL', level: 'Advanced', highlight: 'Query Optimization & DB' }
      ]
    },
    {
      title: 'Tools & Ecosystem',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 'Proficient', highlight: 'Version Control' },
        { name: 'GitHub', level: 'Proficient', highlight: 'CI/CD & Collaboration' },
        { name: 'Figma', level: 'Intermediate', highlight: 'UI/UX & Wireframing' },
        { name: 'Looker Studio', level: 'Intermediate', highlight: 'Business Dashboards' },
        { name: 'MySQL Workbench', level: 'Advanced', highlight: 'Database Design' },
        { name: 'VS Code', level: 'Expert', highlight: 'Primary IDE' }
      ]
    },
    {
      title: 'Soft Skills & Leadership',
      icon: Users2,
      skills: [
        { name: 'Agile Project Management', level: 'Expert', highlight: 'Scrum Sprints & Backlog' },
        { name: 'IT Governance', level: 'Proficient', highlight: 'Standards & Compliance' },
        { name: 'Public Speaking', level: 'Certified', highlight: 'Delivery Mastery' },
        { name: 'Legislative Leadership', level: 'Active', highlight: 'SEMA FST UIN IB' }
      ]
    }
  ];

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>SHOWCASE & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          Portfolio & <span className="text-shimmer">Credentials</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Jelajahi portofolio proyek terintegrasi, sertifikasi kompetensi terverifikasi, dan peta kapabilitas teknologi.
        </p>
      </div>

      {/* Motion Tabs Selector (Framer Motion layoutId pill transition) */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 shadow-2xl relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors duration-300 z-10 ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-white/5 text-slate-400'
                }`}>
                  {tab.count}
                </span>

                {/* Animated Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 rounded-xl -z-10 shadow-lg shadow-cyan-500/30 border border-cyan-400/50"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents with AnimatePresence */}
      <AnimatePresence mode="wait">
        
        {/* ==================== TAB 1: PROJECTS ==================== */}
        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData.map((project, idx) => (
              <TiltCard
                key={project.id}
                glowColor={idx === 1 ? 'gold' : 'electric'}
                className="group flex flex-col justify-between h-full border border-white/10 hover:border-cyan-400/50 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Project Image / Custom Cover */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-t-xl bg-space-900">
                    {project.useCustomCover ? (
                      /* Custom Cover for KBS Project */
                      <div className="w-full h-full bg-gradient-to-br from-space-950 via-space-850 to-blue-950 flex flex-col items-center justify-center p-6 relative">
                        {/* Grid background */}
                        <div className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: 'linear-gradient(rgba(0,210,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.08) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                          }}
                        />
                        {/* Glow orb */}
                        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-electric/20 blur-[60px]" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gold/10 blur-[50px]" />
                        
                        <div className="relative z-10 text-center space-y-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-semibold tracking-wider uppercase">
                            📘 Laporan Proyek Sistem Pakar
                          </span>
                          <h4 className="text-sm sm:text-base font-bold font-display text-white leading-snug">
                            Knowledge-Based System
                          </h4>
                          <p className="text-[10px] sm:text-xs text-yellow-400 font-medium">
                            Pemetaan Kompetensi Mahasiswa
                          </p>
                          <p className="text-[9px] text-slate-400 font-mono">
                            Forward Chaining & Certainty Factor
                          </p>
                          <div className="flex gap-1.5 justify-center pt-1 flex-wrap">
                            {['React', 'PHP/CI', 'MySQL'].map((t) => (
                              <span key={t} className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-blue-500/15 border border-blue-500/25 text-blue-300">
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-[8px] text-slate-500 font-mono pt-1">
                            Farjehan Alaraf — UIN IB Padang 2024
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
                    
                    {/* Live Badge Glow */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border shadow-md backdrop-blur-md ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-panel flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>{project.role}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span>Lihat Detail Proyek</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </TiltCard>
            ))}
          </motion.div>
        )}

        {/* ==================== TAB 2: CERTIFICATES ==================== */}
        {activeTab === 'certificates' && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificatesData.map((cert) => (
              <TiltCard
                key={cert.id}
                glowColor="electric"
                className="group flex flex-col justify-between h-full p-6 border border-white/10 hover:border-cyan-400/50 cursor-pointer"
                onClick={() => onSelectCert(cert)}
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                      {cert.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-gold" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-300 group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">{cert.issuer}</span>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Topics Covered */}
                  <div className="space-y-1.5 mt-4 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Kompetensi Diuji:
                    </span>
                    <ul className="space-y-1">
                      {cert.topics.map((top, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview Sertifikat</span>
                  </span>
                  {cert.file && (
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      PDF Document
                    </span>
                  )}
                </div>
              </TiltCard>
            ))}
          </motion.div>
        )}

        {/* ==================== TAB 3: TECH STACK & SKILLS ==================== */}
        {activeTab === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {techCategories.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.title} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {category.skills.length} spesialisasi teknologi
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-950/20 transition-all cursor-default"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs sm:text-sm font-bold text-white">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                        <div className="text-[10px] font-mono text-cyan-300">
                          {skill.level}
                        </div>
                        <div className="text-[9px] text-slate-400 font-mono truncate mt-0.5">
                          {skill.highlight}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}
