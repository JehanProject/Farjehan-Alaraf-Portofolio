import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Sparkles, 
  Mail, 
  FolderGit2, 
  Phone,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap
} from 'lucide-react';
import MagneticButton from './MagneticButton';

const roles = [
  "Tech Project Manager & Systems Architect",
  "Information Systems Student @ UIN IB",
  "Full-Stack Web Developer & System Analyst",
  "Agile Leadership & IT Governance"
];

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

const socials = [
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/JehanProject', color: 'hover:text-white hover:border-white/40' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/farjehan-alaraf-175403369/', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/6282335360672', color: 'hover:text-emerald-400 hover:border-emerald-400/40' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/@JehanProject', color: 'hover:text-red-500 hover:border-red-500/40' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/je_hann022/', color: 'hover:text-pink-400 hover:border-pink-400/40' },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@frjhnalrf_022', color: 'hover:text-cyan-400 hover:border-cyan-400/40' },
];

export default function HeroSection({ onOpenContactModal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,210,255,0.15)] backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-cyan-300 font-semibold">
                Tech Project Manager & Architect
              </span>
            </motion.div>

            {/* Headline Title */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono tracking-widest text-slate-400 uppercase">
                Welcome to
              </h2>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display">
                <span className="text-shimmer drop-shadow-md">Jehan Project</span>
                <span className="block text-2xl sm:text-4xl xl:text-5xl font-bold text-white mt-1">
                  Farjehan Alaraf
                </span>
              </h1>
            </div>

            {/* Dynamic Animated Typewriter Role */}
            <div className="h-10 flex items-center">
              <div className="inline-flex items-center gap-2 font-mono text-base sm:text-lg text-cyan-400 font-medium">
                <Terminal className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-slate-100">{displayText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Tagline & Subtagline */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed border-l-2 border-cyan-500/60 pl-3.5 text-left">
                "Bridging Business Strategy & Modern Web Development through Agile Leadership."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building Integrated Systems, Managing IT Projects & Developing Smart Solutions with precision and modern architectural standards.
              </p>
            </div>

            {/* Action Magnetic Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
              <a href="#portfolio">
                <MagneticButton 
                  variant="primary"
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold group"
                >
                  <FolderGit2 className="w-4 h-4 text-cyan-200 transition-transform group-hover:scale-110" />
                  <span>Explore Projects</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </MagneticButton>
              </a>

              <MagneticButton
                variant="secondary"
                onClick={onOpenContactModal}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold group"
              >
                <Mail className="w-4 h-4 text-cyan-400 transition-transform group-hover:scale-110" />
                <span>Contact Me</span>
              </MagneticButton>
            </div>

            {/* Social Icons Row with Hover Bounce */}
            <div className="pt-4 flex flex-col items-center lg:items-start gap-2.5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap justify-center">
                {socials.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <motion.a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.18, y: -4 }}
                      whileTap={{ scale: 0.92 }}
                      className={`w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 border border-white/10 transition-all duration-200 shadow-md ${soc.color}`}
                      title={soc.name}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual with Orbit Neon Rings & Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* The Main Orbit Stage Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
              {/* Outer Orbit Ring (Electric Blue) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-orbit-cw pointer-events-none">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#00D2FF]" />
                <div className="absolute bottom-1/4 right-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#0066FF]" />
              </div>

              {/* Middle Orbit Ring (Gold Glow) */}
              <div className="absolute inset-5 rounded-full border border-yellow-400/25 animate-orbit-ccw pointer-events-none">
                <div className="absolute top-1/3 -left-2 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#FFD700]" />
              </div>

              {/* Glowing Aura Behind Avatar */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-blue-600/40 via-cyan-400/30 to-gold/20 blur-2xl -z-10 animate-pulse-slow" />

              {/* Profile Avatar Frame with Neon Border */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 via-cyan-400 to-yellow-400 shadow-[0_0_35px_rgba(0,102,255,0.45)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-space-900 border-2 border-space-950">
                  <img
                    src="/project/foto profil.jpg"
                    alt="Farjehan Alaraf"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Floating Glass Node 1: Agile/PM */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-8 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-400/40 shadow-xl flex items-center gap-2.5 z-30"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white font-mono">Agile & Scrum</div>
                  <div className="text-[9px] text-cyan-300 font-mono">Project Leadership</div>
                </div>
              </motion.div>

              {/* Floating Glass Node 2: Systems Architect */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 glass-panel px-3.5 py-2 rounded-2xl border border-yellow-400/40 shadow-xl flex items-center gap-2.5 z-30"
              >
                <div className="w-7 h-7 rounded-lg bg-yellow-400/20 flex items-center justify-center text-yellow-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white font-mono">Systems Architect</div>
                  <div className="text-[9px] text-yellow-300 font-mono">Full-Stack Integration</div>
                </div>
              </motion.div>

              {/* Floating Glass Node 3: UIN IB 2024 */}
              <motion.div
                animate={{
                  y: [-5, 7, -5],
                }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-8 sm:-left-12 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-2 z-20 hidden sm:flex"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono text-slate-300 font-medium">UIN IB Padang '24</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
