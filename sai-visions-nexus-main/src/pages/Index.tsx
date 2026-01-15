import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TimelineSection from '@/components/TimelineSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen custom-scrollbar">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <BlogSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
};

export default Index;
