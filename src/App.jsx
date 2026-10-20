import SiteNavbar from './components/SiteNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BrandSection from './components/BrandSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="portfolio-shell min-h-screen overflow-hidden bg-space-950 text-white">
      <CustomCursor />
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandSection />
        <ProjectsSection />
        <TechStackSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
