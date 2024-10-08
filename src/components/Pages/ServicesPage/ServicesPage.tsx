import FAQSection from '@/components/Organisms/FAQSection';
import Services from '@/components/Organisms/Services';
import ServicesFeature from '@/components/Organisms/ServicesFeature';
import ServicesHero from '@/components/Organisms/ServicesHero';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <Services />
      <ServicesFeature />
      <FAQSection />
    </>
  );
};

export default ServicesPage;
