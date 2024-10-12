import React from 'react';
import HeroLeft from '@/components/Molecules/HeroLeft';
import HeroImageBox from '@/components/Molecules/HeroImageBox';
import HeroSection from '../HeroSection';

const ServicesHero: React.FC = () => {
  return (
    <HeroSection height="high">
      <HeroLeft
        upheading="I can help you in these patricular areas."
        heading="I help people to discover their true potential"
        description="I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
      />

      <HeroImageBox heroType="high" imageUrl="/images/service-hero.jpg" />
    </HeroSection>
  );
};

export default ServicesHero;
