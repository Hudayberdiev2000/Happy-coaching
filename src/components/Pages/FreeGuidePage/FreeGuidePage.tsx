import FreeCta from '@/components/Organisms/FreeCta';
import FreeFeatureSection from '@/components/Organisms/FreeFeatureSection';
import FreeHero from '@/components/Organisms/FreeHero';
import TestimonialSection from '@/components/Organisms/TestimonialSection';
import React from 'react';

const FreeGuidePage: React.FC = () => {
  return (
    <>
      <FreeHero />
      <TestimonialSection />
      <FreeFeatureSection />
      <FreeCta />
    </>
  );
};

export default FreeGuidePage;
