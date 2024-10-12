import React from 'react';
import styles from './HomeHero.module.scss';
import SuccessRate from '@/components/Atoms/SuccessRate';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Button from '@/components/Atoms/Button';
import HeroImageBox from '@/components/Molecules/HeroImageBox';
import HeroSection from '../HeroSection';

const HomeHero: React.FC = () => {
  return (
    <HeroSection withWaveIcon={true}>
      <HeroLeft
        upheading="Proven strategies backed by science for success."
        heading="Live life at the full potential"
        description="I help people to discover their true potential and live a fulfilling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and it is begin using backed by science.
        Wanna transform your life?"
        btnLabel="Get your free guide now"
      >
        <Button size="large">Get your free guide now</Button>
      </HeroLeft>

      <HeroImageBox imageUrl="/images/home-hero.png">
        <span className={styles['info-card']}>
          <SuccessRate />
        </span>
      </HeroImageBox>
    </HeroSection>
  );
};

export default HomeHero;
