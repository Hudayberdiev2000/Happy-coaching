import React from 'react';
import styles from './ServicesHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Image from 'next/image';

const ServicesHero: React.FC = () => {
  return (
    <section className={styles['service-hero']}>
      <MainContainer>
        <div className={styles['service-hero__container']}>
          <HeroLeft
            upheading="I can help you in these patricular areas."
            heading="I help people to discover their true potential"
            description="I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
          />

          <div className={styles['service-hero__img-box']}>
            <div className={styles['service-hero__img-wrapper']}>
              <Image
                className={styles['service-hero__img']}
                src={'/images/service-hero.jpg'}
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

export default ServicesHero;
