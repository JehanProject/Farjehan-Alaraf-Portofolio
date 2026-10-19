import React, { useState } from 'react';
import StarfieldBackground from './components/StarfieldBackground';
import FloatingDockNavbar from './components/FloatingDockNavbar';
import HeroSection from './components/HeroSection';
import AboutBentoSection from './components/AboutBentoSection';
import PortfolioMotionSection from './components/PortfolioMotionSection';
import ContactFooterSection from './components/ContactFooterSection';
import InteractiveModal from './components/InteractiveModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'project' | 'cert' | 'contact'
    data: null,
  });

  const handleOpenProjectModal = (project) => {
    setModalState({
      isOpen: true,
      type: 'project',
      data: project,
    });
  };

  const handleOpenCertModal = (cert) => {
    setModalState({
      isOpen: true,
      type: 'cert',
      data: cert,
    });
  };

  const handleOpenContactModal = () => {
    setModalState({
      isOpen: true,
      type: 'contact',
      data: null,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null,
    });
  };

  const handleSelectTabFromNav = (tabId) => {
    setActiveTab(tabId);
    // Smooth scroll to portfolio section
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* 1. Interactive Starfield & Nebula Parallax Background */}
      <StarfieldBackground />

      {/* 2. Floating Dock Navbar (iOS/macOS Style) */}
      <FloatingDockNavbar
        onSelectTab={handleSelectTabFromNav}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <HeroSection onOpenContactModal={handleOpenContactModal} />

        {/* About & Experience Bento Grid */}
        <AboutBentoSection />

        {/* Portfolio Section (3 Motion Tabs: Projects, Certificates, Tech Stack) */}
        <PortfolioMotionSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onSelectProject={handleOpenProjectModal}
          onSelectCert={handleOpenCertModal}
        />

        {/* Contact & Footer Bento Section */}
        <ContactFooterSection />
      </main>

      {/* Interactive Modal for Projects, Certificates & Quick Contact */}
      <InteractiveModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        data={modalState.data}
      />
    </div>
  );
}
