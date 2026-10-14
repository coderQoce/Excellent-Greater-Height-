import React from 'react';
import Hero from '../components/Hero.jsx';
import FeatureStrip from '../components/FeatureStrip.jsx';
import AboutSection from '../components/AboutSection.jsx';
import Programs from '../components/Programs.jsx';
import StatisticsBar from '../components/StatisticsBar.jsx';
import UpdatesSection from '../components/UpdatesSection.jsx';
import AdmissionsSection from '../components/AdmissionsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <AboutSection />
      <Programs preview />
      <StatisticsBar />
      <UpdatesSection />
      <AdmissionsSection />
      <ContactSection />
    </>
  );
}
