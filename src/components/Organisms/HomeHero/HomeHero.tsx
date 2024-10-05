import React from 'react';
import styles from './HomeHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Image from 'next/image';
import SuccessRate from '@/components/Atoms/SuccessRate';
import WaveIcon from '@/components/Atoms/WaveIcon';
import HeroLeft from '@/components/Molecules/HeroLeft';

const HomeHero: React.FC = () => {
  return (
    <section className={styles['home-hero']}>
      <MainContainer>
        <div className={styles['home-hero__container']}>
          <div className={styles['home-hero__wave-icon']}>
            <WaveIcon />
          </div>

          <HeroLeft
            upheading="Proven strategies backed by science for success."
            heading="Live life at the full potential"
            description="I help people to discover their true potential and live a fulfilling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and it is begin using backed by science.
        Wanna transform your life?"
            btnLabel="Get your free guide now"
          />

          <div className={styles['home-hero__img-box']}>
            <div className={styles['home-hero__img-wrapper']}>
              <span className={styles['home-hero__success-rate']}>
                <SuccessRate />
              </span>
              <Image
                className={styles['home-hero__image']}
                src={'/images/home-hero.png'}
                alt="Smiling girl"
                height={603}
                width={462}
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default HomeHero;
