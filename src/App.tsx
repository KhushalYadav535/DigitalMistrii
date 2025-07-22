import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import ScreenshotsGallery from './components/ScreenshotsGallery';
import DownloadSection from './components/DownloadSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <PricingSection />
        <ScreenshotsGallery />
        <DownloadSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;