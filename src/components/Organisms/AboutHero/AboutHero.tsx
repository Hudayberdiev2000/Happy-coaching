import React from 'react';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Button from '@/components/Atoms/Button';
import HeroImageBox from '@/components/Molecules/HeroImageBox';
import HeroSection from '../HeroSection';
import AboutHeroInfoCards from '@/components/Molecules/AboutHeroInfoCards';

const AboutHero: React.FC = () => {
  return (
    <HeroSection>
      <HeroLeft
        upheading="Proven strategies backed by science for success."
        heading="About me"
        description="I help people to discover their true potential and live a fulfilling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and it is begin using backed by science.
        Wanna transform your life?"
      >
        <Button size="large">Get your free guide now</Button>
      </HeroLeft>

      <HeroImageBox imageUrl="/images/home-hero.png">
        <AboutHeroInfoCards />
      </HeroImageBox>
    </HeroSection>
  );
};

export default AboutHero;
