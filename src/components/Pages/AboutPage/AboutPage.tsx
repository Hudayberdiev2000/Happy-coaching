import React from 'react';

import AboutFeatureSection from '@/components/Organisms/AboutFeatureSection';
import AboutHero from '@/components/Organisms/AboutHero/AboutHero';
import AboutReviewSection from '@/components/Organisms/AboutReviewSection';
import FAQSection from '@/components/Organisms/FAQSection';
import SocialProofSection from '@/components/Organisms/SocialProofCardSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <SocialProofSection />
      <AboutReviewSection />
      <AboutFeatureSection />
      <FAQSection />
    </>
  );
};

export default AboutPage;
