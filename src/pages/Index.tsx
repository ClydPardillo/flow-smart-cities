
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import DemoSection from '../components/DemoSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "SmartFlow - AI-Powered IoT for Intelligent Traffic Flow Optimization";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProjectOverview />
      <Features />
      <Benefits />
      <DemoSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
