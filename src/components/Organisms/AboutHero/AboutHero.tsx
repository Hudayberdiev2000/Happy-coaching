import React from 'react';
import styles from './AboutHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Image from 'next/image';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Button from '@/components/Atoms/Button';
import HeroImageBox from '@/components/Molecules/HeroImageBox';
import HeroSection from '../HeroSection';

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
        <div className={styles['hero__icon1-wrapper']}>
          <Image
            className={styles['hero__icon1']}
            width={80}
            height={80}
            src={'/icons/about-heroicon1.svg'}
            alt="icon1"
          />
        </div>
        <div className={styles['hero__icon2-wrapper']}>
          <Image
            className={styles['hero__icon2']}
            width={48}
            height={48}
            src={'/icons/about-heroicon2.svg'}
            alt="icon1"
          />
          <div className={styles['hero__icon2-wrapper__text-box']}>
            <span className={styles['hero__icon2-wrapper__text1']}>
              More than 250+
            </span>
            <span className={styles['hero__icon2-wrapper__text2']}>
              Online Sessions
            </span>
          </div>
        </div>
      </HeroImageBox>
    </HeroSection>
  );
};

export default AboutHero;
