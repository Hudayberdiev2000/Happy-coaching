import React from 'react';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Button from '@/components/Atoms/Button';
import HeroImageBox from '@/components/Molecules/HeroImageBox';
import HeroSection from '../HeroSection';

const ExtraSalesHero: React.FC = () => {
  return (
    <HeroSection withWaveIcon={true}>
      <HeroLeft
        upheading="Proven strategies backed by science for success."
        heading="Self Esteem Therapy"
        description="I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
      >
        <Button size="large">Calm your spot</Button>
      </HeroLeft>

      <HeroImageBox imageUrl="/images/extra-hero.jpg" />
    </HeroSection>
  );
};

export default ExtraSalesHero;
